import { useState} from 'react';
import {createPortal} from 'react-dom';
import { Tabs } from '../burger-ingredients-tabs/burger-ingredients-tabs'
import IngredientsDetails from '../ingredients-details/ingredients-details'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';

export function BurgerIngredients(props) {  
    const Filtered = (type) => {
        if(typeof type === 'undefined')
          props.setFilteredData(props.allData.filter((data) => data.type.includes('bun')))
        else
          props.setFilteredData(props.allData.filter((data) => data.type.includes(type)))
    }

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
    {showModal && createPortal(
      <IngredientsDetails onClose={() => setShowModal(false)} currentIngredient={currentItem}/>,
      document.body
    )}
    <section className='BurgerIngredients mr-5' style={{display: 'flex', flexDirection: 'column', minWidth: '48%', maxWidth: '48%' }}>
        <p className='BurgerIngredientsTitle mt-10 mb-5 text text_type_main-large' style={{display: 'flex', justifyContent: 'left'}}>Собери бургер</p>
        
        <Tabs Scroling={Filtered}/>
        
        <section className="Ingredients custom-scroll ml-4 mr-4" style={{display:"flex", overflowY: 'scroll'}}>
            <ul style={{display:'flex', flexWrap: 'wrap', justifyContent: 'center', height: '50%'}}>
                {props.filteredData && Array.isArray(props.filteredData) &&
                    props.filteredData.map(({_id, name, type, proteins, fat, carbohydrates, calories, price, image, image_large}) => (                      
                      /*<li key={_id} className="Ingredient mr-6 mb-8" style={{listStyleType: `none`, maxWidth:'50%', alignContent:'stretch'}} onClick={(event) => setShowModal(true)}>*/
                        <li key={_id} className="Ingredient mr-6 mb-8" style={{listStyleType: `none`, maxWidth:'50%', alignContent:'stretch'}} onClick={(event) => {ingredientClick({
                          name, proteins, fat, carbohydrates, calories, image_large
                        }); setShowModal(true);}}
                        >
                            <div style={{position:'relative'}}><Counter count={1} size="small"/></div>
                            <img className="ml-4 mr-4" style={{display:'flex',justifyContent:'center'}} src={image} alt={name}/>
                            <p className="text text_type_digits-default mt-1 mb-1" style={{display:'flex',justifyContent:'center'}}>{price}<span className='ml-2'></span><CurrencyIcon type="primary"/></p>
                            <p className="text text_type_main-small" style={{display:'flex', justifyContent:'center', maxWidth:'272px'}}>{name}</p>
                        </li>
                        ))}
            </ul>
      </section>
    </section>
    </>
  );
};

BurgerIngredients.propTypes= {
  allData: PropTypes.arrayOf(
    PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number
  })),
  filteredData: PropTypes.arrayOf(
    PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number
  })),
  setFilteredData: PropTypes.func
};