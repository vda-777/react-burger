import PropTypes from 'prop-types';
import OkIcon from '../../image/ok-icon.svg';
import style from './order-details.module.css';

export default function OrderDetails(props) {
    return (
      <>
        <span className='mt-8'>
          <p className="text text_type_digits-large">{props.numberOrder}</p>
        </span>        
        <span className='mt-8'>
          <p className="text text_type_main-medium">идентификатор заказа</p>
        </span>
        
        {/*<CheckMarkIcon/>*/}
        <span className='mt-15'>
          <img className={style.imageCheckMark} src={OkIcon} alt=''></img>
        </span>
        
        <span className='mt-15'>
          <p className="text text_type_main-small">Ваш заказ начали готовить</p>
        </span>
        <span className='mt-2 mb-30'>
          <p className="text text_type_main-small text_color_inactive">Дождитесь готовности на орбитальной станции</p>
        </span>
     </>
    );
}

OrderDetails.propTypes={
  numberOrder: PropTypes.string.isRequired
}