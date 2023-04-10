import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import OkIcon from '../../image/ok-icon.svg';

export default function OrderDetails(props) {
  const styleModal = {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'start',
      alignItems: 'start',
      boxShadow: 'rgba(100, 100, 111, 0.3) 0px 7px 29px 0px',

      backgroundColor: '#1C1C21',
      border: '1px solid rgba(76, 76, 255, 0.2)',
      borderRadius: '40px',
      position:  'absolute',
      
      width: '720px',
      //height: '718px',
      top: 'calc(50% - 359px)',
      left: 'calc(50% - 360px)',
      //bottom: ''
  };

    return (
      <div style={styleModal} >
        <span className='mt-15 mr-10' style={{alignSelf:'end'}}><CloseIcon type="primary" onClick={props.onClose}/></span>
        <span className='mt-30' style={{alignSelf:'center'}}><p className="text text_type_digits-large">{props.numberOrder}</p></span>
        <span className='mt-8'style={{alignSelf:'center'}}><p className="text text_type_main-medium">идентификатор заказа</p></span>
        
        <span className='mt-15 mb-15' style={{alignSelf:'center'}}><img style={{height:'120px', width: '120px'}} src={OkIcon} alt=''></img></span>
        
        <span className='mb-2'style={{alignSelf:'center'}}><p className="text text_type_main-small">Ваш заказ начали готовить</p></span>
        <span className='mb-30'style={{alignSelf:'center'}}><p className="text text_type_main-small text_color_inactive">Дождитесь готовности на орбитальной станции</p></span>
     </div>
    );
}

OrderDetails.propTypes={
  onClose: PropTypes.func,
  numberOrder: PropTypes.string
}