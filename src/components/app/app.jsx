import { useEffect } from "react";
import style from './app.module.css';
import Header from '../header/header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getBurgerIngredients } from '../../services/action/burger-ingredients';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

function App() {
  const dispatch = useDispatch();
  //const { allData, loadingBurgerIngredients, errorLoadingBurgerIngredients } = useSelector((store) => ({
  const { loadingBurgerIngredients, errorLoadingBurgerIngredients } = useSelector((store) => ({
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
        {loadingBurgerIngredients && 
          <Modal onClose={() => null} header={'Загрузка данных'}>
            <p className="text text_type_digits-small">Загружаем данные с сервера, боюсь с вашим интернетом надо будет подождать.</p>
            <p className="mb-10 text text_type_digits-small">Наберитесь терпения и ожидайте окончания загрузки...</p>
          </Modal>}
        {errorLoadingBurgerIngredients && 
          <Modal onClose={() => null} header={'Ошибочка'}>
            <p className="text text_type_digits-small">Упс. Вознилка проблема с получением данных с сервера.</p>
            <p className="text text_type_digits-small">Сообщение об ощибке: {errorLoadingBurgerIngredients}</p>
            <p className="mb-10 text text_type_digits-small">Попробуйте обновить страницу.</p>
          </Modal>}
        {errorLoadingBurgerIngredients && (console.log(`Error - ${errorLoadingBurgerIngredients}`))}
        
        {!errorLoadingBurgerIngredients && !errorLoadingBurgerIngredients &&          
          <>
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients />
              <BurgerConstructor />
            </DndProvider>
          </>
        }
      </main>
    </div>    
  );
}

export default App;