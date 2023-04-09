import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetailCaption from '../ingredient-detail-caption/ingredient-detail-caption'
import PropTypes from 'prop-types';

export default function IngredientsDetails(props) {
  const styleModal = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'start',

    //alignItems: 'start',
    boxShadow: 'rgba(100, 100, 111, 0.3) 0px 7px 29px 0px',

    backgroundColor: '#1C1C21',
    border: '1px solid rgba(76, 76, 255, 0.2)',
    borderRadius: '40px',
    position:  'absolute',
    
    width: '720px',
    top: 'calc(50% - 270px)',
    left: 'calc(50% - 360px)',
    //zIndex: '1'
  };
    return (
      <div style={styleModal} >        
        <span className='mt-10 ml-10 mr-10' style={{display:'flex', justifyContent:'space-between', width:'auto'}}>
          <p className="text text_type_digits-medium">Детали ингредиента</p><CloseIcon type="primary" onClick={props.onClose}/>
        </span>
        
        <span style={{alignSelf:'center', display:'flex', justifyContent:'center'}}>
          <img className='ml-5 mr-5' src={props.currentIngredient.image_large} alt={props.currentIngredient.name}></img>
        </span>
        
        <span className='mt-4 mb-8' style={{display:'flex', alignSelf:'center'}}>
          <p className="text text_type_digits-default">{props.currentIngredient.name}</p>
        </span>

        <span className='mb-15' style={{display:'flex', alignSelf:'center'}}>
          <IngredientDetailCaption compositionName='Каллории, ккал' compositionCount={props.currentIngredient.calories}></IngredientDetailCaption>
          <IngredientDetailCaption compositionName='Белки' compositionCount={props.currentIngredient.proteins}></IngredientDetailCaption>
          <IngredientDetailCaption compositionName='Жиры' compositionCount={props.currentIngredient.fat}></IngredientDetailCaption>
          <IngredientDetailCaption compositionName='Углеводы' compositionCount={props.currentIngredient.carbohydrates}></IngredientDetailCaption>
        </span>
     </div>
    );
}

IngredientsDetails.propTypes={
  onClose: PropTypes.func,
  currentIngredient: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    calories: PropTypes.number,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number
  })
}