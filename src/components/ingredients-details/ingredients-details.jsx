import IngredientDetailCaption from '../ingredient-detail-caption/ingredient-detail-caption'
//import PropTypes from 'prop-types';
import style from './ingredients-details.module.css'
import {ingredientPropType} from '../../utils/type'

export default function IngredientsDetails(props) {
    return (
      <>        
        <span>
          <img src={props.currentIngredient.image_large} alt={props.currentIngredient.name}></img>
        </span>
        
        <span className='mt-4'>
          <p className="text text_type_digits-default">{props.currentIngredient.name}</p>
        </span>

        <span className={style.IngredientsDetailCaptions + ' mt-8 mb-15'}>
          <IngredientDetailCaption compositionName='Каллории, ккал' compositionCount={props.currentIngredient.calories}></IngredientDetailCaption>
          <IngredientDetailCaption compositionName='Белки' compositionCount={props.currentIngredient.proteins}></IngredientDetailCaption>
          <IngredientDetailCaption compositionName='Жиры' compositionCount={props.currentIngredient.fat}></IngredientDetailCaption>
          <IngredientDetailCaption compositionName='Углеводы' compositionCount={props.currentIngredient.carbohydrates}></IngredientDetailCaption>
        </span>
     </>
    );
}

IngredientsDetails.propTypes={
  currentIngredient: ingredientPropType.isRequired
}