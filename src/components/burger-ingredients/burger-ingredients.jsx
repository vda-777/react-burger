import { useEffect, useState, useMemo} from 'react';
import {Tabs} from '../burger-ingredients-tabs/burger-ingredients-tabs';
import IngredientsDetails from '../ingredients-details/ingredients-details';
import Modal from '../modal/modal';

import PropTypes from 'prop-types';
import {ingredientPropType} from '../../utils/type';
import style from './burger-ingredients.module.css';
import { isEmpty } from '../../utils/is-empty';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';
import { delCurrentIngredient } from '../../services/reducers/current-ingredient';



export default function BurgerIngredients() {
    const { allData } = useSelector((store) => ({
      allData: store.burgerIngredients.burgerIngredients
      }),shallowEqual
    );
    const currentIngredient = useSelector((store) => 
      store.currentIngredient.currentIngredient);
    const dispatch = useDispatch();
    
    const [filteredData, setFilteredData] = useState([]);
    const Filtered = (type) => {
        if(typeof type === 'undefined')
          setFilteredData(allData.filter((data) => data.type.includes('bun')))
        else
          setFilteredData(allData.filter((data) => data.type.includes(type)))
    }    
    useEffect(()=> {
      setFilteredData(allData.filter((data) => data.type.includes('bun')))
    },
    [allData])
    

    const [showModal, setShowModal] = useState(false);    
    useEffect(() =>{
      setShowModal(!isEmpty(currentIngredient));
    },
    [currentIngredient])

    const content = useMemo(
      () => {
          return filteredData.map((item) => {
            return <BurgerIngredient key={item._id} {...item}/>;
          })
      },[filteredData]
    );
    
  return (
    <>
      {
        showModal &&
          <Modal onClose={() => dispatch(delCurrentIngredient())/*setShowModal(false)*/} header={'Детали ингредиента'}>
            <IngredientsDetails currentIngredient={currentIngredient}/>
          </Modal>
      }
    <section className={style.BurgerIngredients + ' mr-5'}>
        <span className={style.BurgerIngredientsTitle + ' mt-10 mb-5 text text_type_main-large'}>Собери бургер</span>
        <Tabs Scroling={Filtered}/>
        <div className={style.BurgerIngredientsElements +' custom-scroll ml-4 mr-4'}>
          {content}
        </div>
    </section>
    </>
  );
};

BurgerIngredients.propTypes= {
  //allData: PropTypes.arrayOf(ingredientPropType),
  //setFilteredData: PropTypes.func
};