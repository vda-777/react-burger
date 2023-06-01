//import { Overlay } from "react-portal-overlay";
import React from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import style from './modal.module.css';

export default function Modal(props) {
  const refModalOverlay = React.useRef();
  React.useEffect(()=>{
    refModalOverlay.current.focus();
  },[]);

  return (    
    <div className={style.modalOverlay}
      tabIndex={0}
      ref={refModalOverlay}
      onClick={props.onClose}
      onKeyDown={(e)=>{if(e.key === 'Escape') props.onClose();}}
    >
        <div className={style.modalWindow}
          onClick={(e)=>{e.stopPropagation()}}
          //onKeyDown={(e)=>{e.stopPropagation()}}
        >
          
          {
            props.header === undefined 
            ?
              <div className={style.modalWindowHeaderNoCaption}>
                  <span className='mt-10 ml-10'><p className="text text_type_digits-medium">{props.header}</p></span>
                  <span className='mt-15 mr-10'><CloseIcon type="primary" onClick={props.onClose}/></span>
              </div>
            :
              <div className={style.modalWindowHeaderCaption + ' mt-10'}>
                    <p className="ml-10 text text_type_digits-medium">Детали ингредиента</p>
                    <span className='mr-10'><CloseIcon type="primary" onClick={props.onClose}/></span>
              </div>
            }
          <div className={style.modalWindowContent}>
            {props.children === undefined ? <p className="text text_type_digits-medium">Просто окно ;-)</p> : props.children}
          </div>
        </div>        
    </div>
  );    
}

Modal.propTypes={
  onClose: PropTypes.func.isRequired,
  header: PropTypes.string
  //children: PropTypes.childrenl
}



