import { useEffect, useState} from 'react';
import {Tabs} from '../burger-ingredients-tabs/burger-ingredients-tabs'
import IngredientsDetails from '../ingredients-details/ingredients-details'
import Modal from '../modal/modal'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import {ingredientPropType} from '../../utils/type'
import style from './burger-ingredients.module.css'


export default function BurgerIngredients(props) {  
    const [filteredData, setFilteredData] = useState([]);

    const Filtered = (type) => {
        if(typeof type === 'undefined')
          setFilteredData(props.allData.filter((data) => data.type.includes('bun')))
        else
          setFilteredData(props.allData.filter((data) => data.type.includes(type)))
    }
    useEffect(()=> {      
      //Filtered('bun');
      setFilteredData(props.allData.filter((data) => data.type.includes('bun')))
    },
    [props.allData])

    const [showModal, setShowModal] = useState(false);
    const [currentItem, setCurrentItem] = useState({});
    const ingredientClick = (props) => {
      //let updatedValue = {};
      //updatedValue = props;
      setCurrentItem(currentItem => ({
        ...currentItem,
        //...updatedValue
        ...props
      }));
      //setShowModal(true);
    };

  return (
    <>
      {
        showModal &&
        <Modal onClose={() => setShowModal(false)} header='Детали ингредиента'>
          <IngredientsDetails onClose={() => setShowModal(false)} currentIngredient={currentItem}/>
        </Modal>
      }
    {/*showModal && createPortal(
      //<IngredientsDetails onClose={() => setShowModal(false)} currentIngredient={currentItem}/>,
      <Modal onClose={() => setShowModal(false)} header='Детали ингредиента'>
        <IngredientsDetails onClose={() => setShowModal(false)} currentIngredient={currentItem}/>
      </Modal>,    
      document.getElementById('modals')
    )*/}
    <section className={style.BurgerIngredients + ' mr-5'}>
        <span className={style.BurgerIngredientsTitle + ' mt-10 mb-5 text text_type_main-large'}>Собери бургер</span>        
        <Tabs Scroling={Filtered}/>
            <ul className={style.BurgerIngredientsElements +' custom-scroll ml-4 mr-4'}> 
                {filteredData && Array.isArray(filteredData) &&
                    filteredData.map(({_id, name, type, proteins, fat, carbohydrates, calories, price, image, image_large}) => (                      
                        <li key={_id} className={style.BurgerIngredientsElement + ' mr-6 mb-8'} onClick={(event) => {ingredientClick({
                          name, proteins, fat, carbohydrates, calories, image_large
                        }); setShowModal(true);}}
                        >
                            <span className={style.BurgerIngredientsElementCounter}><Counter count={1} size="small"/></span>
                            <img className={style.BurgerIngredientsElementImage + ' ml-4 mr-4'} src={image} alt={name}/>
                            <span className={style.BurgerIngredientsElementPrice + ' text text_type_digits-default mt-1 mb-1'}>
                              {price}
                              <span className='ml-2'>
                                <CurrencyIcon type="primary"/>
                              </span>
                            </span>
                            <span className={style.BurgerIngredientsElementCaption + ' text text_type_main-small'}>{name}</span>
                        </li>
                        ))}
            </ul>
    </section>
    </>
  );
};

BurgerIngredients.propTypes= {
  allData: PropTypes.arrayOf(ingredientPropType),
  setFilteredData: PropTypes.func
};