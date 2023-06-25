import { useEffect } from "react";
import style from './app.module.css';
import Header from '../header/header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import LoadingErrorWindow from '../loading-error-window/loading-error-window';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getBurgerIngredients } from '../../services/action/burger-ingredients';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { isEmpty } from '../../utils/is-empty';

function App() {
  const dispatch = useDispatch();
  const { allData, loadingBurgerIngredients, errorLoadingBurgerIngredients } = useSelector((store) => ({
    allData: store.burgerIngredients.burgerIngredients,
    loadingBurgerIngredients: store.burgerIngredients.loadingBurgerIngredients,
    errorLoadingBurgerIngredients: store.burgerIngredients.errorLoadingBurgerIngredients
    }),shallowEqual
  );

  useEffect(() => {
      dispatch(getBurgerIngredients());
  },[dispatch]);

  return (
    <div className={style.page}>
      <Header />

      <main className={style.context}>
        <LoadingErrorWindow loading = {loadingBurgerIngredients} error = {errorLoadingBurgerIngredients}></LoadingErrorWindow>
        
        {!errorLoadingBurgerIngredients && !errorLoadingBurgerIngredients && !isEmpty(allData)  &&
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients />
              <BurgerConstructor />
            </DndProvider>
        }
      </main>
    </div>    
  );
}

export default App;