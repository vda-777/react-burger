import { useEffect, useState, useId, useMemo} from 'react';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import style from '../burger-ingredients/burger-ingredients.module.css';
import IngredientsDetails from '../ingredients-details/ingredients-details';
import Modal from '../modal/modal';
import PropTypes from 'prop-types';
import {ingredientPropType} from '../../utils/type';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import { setCurrentIngredient } from '../../services/reducers/current-ingredient';
import { useDrag } from 'react-dnd';
import { isEmpty } from '../../utils/is-empty';
//import {v4 as uuidv4} from "uuid";



export default function BurgerIngredient({_id, name, type, proteins, fat, carbohydrates, calories, price, image, image_large}) {
    const {bun, ingredients} = useSelector((store) => ({
      bun: store.burgerConstruction.bun,
      ingredients: store.burgerConstruction.ingredients
      }),shallowEqual
    );
    const dispatch = useDispatch();

    const ingredientClick = (props) => {
      dispatch(setCurrentIngredient(props));
    };

    const [ {opacity}, ref] = useDrag({
      type: 'Ingredient',
      item: {_id, type},
      collect: monitor => ({
        opacity: monitor.isDragging() ? 0.2 : 1
      })
    });

    const countIngredients = useMemo(
      () => {
      if(type === 'bun') 
        return bun.filter((item) => item._id === _id).length
      else 
        return ingredients.filter((item) => item._id === _id).length
    },[_id, bun, ingredients, type]
    );

    return (
    <div style={{ opacity }} ref={ref} className={style.BurgerIngredientsElement + ' mr-6 mb-8'}
        onClick={(event) => {ingredientClick({name, proteins, fat, carbohydrates, calories, image_large});}}>
            {(countIngredients > 0) ? (<span className={style.BurgerIngredientsElementCounter}><Counter count={countIngredients} size="small"/></span>): <></>}
            <img className={style.BurgerIngredientsElementImage + ' ml-4 mr-4'} src={image} alt={name}/>
            <span className={style.BurgerIngredientsElementPrice + ' text text_type_digits-default mt-1 mb-1'}>
                {price}
                <span className='ml-2'>
                    <CurrencyIcon type="primary"/>
                </span>
            </span>
            <span className={style.BurgerIngredientsElementCaption + ' text text_type_main-small'}>{name}</span>
    </div>
  );
};

BurgerIngredient.propTypes= {
  //allData: PropTypes.arrayOf(ingredientPropType),
  //setFilteredData: PropTypes.func
};