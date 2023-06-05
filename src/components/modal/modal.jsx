import React from 'react';
import PropTypes from 'prop-types';
import ModaOverlay from '../modal-overlay/modal-overlay';
import {createPortal} from 'react-dom';
//import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './modal.module.css';


export default function Modal(props) {
  return (
    <>
        {createPortal(
          <>
            <ModaOverlay onClose={props.onClose}></ModaOverlay>
            <div className={style.modalWindow}
            //onClick={(e)=>{e.stopPropagation()}}
            //onKeyDown={(e)=>{e.stopPropagation()}}
            >
        
            {
              props.header
            /*
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
              */
            }
              <div className={style.modalWindowContent}>
                {props.children === undefined ? <p className="text text_type_digits-medium">Просто окно ;-)</p> : props.children}
              </div>
            </div>            
          </>,
            document.getElementById('modals')            
        )}
    </>
  );
}

ModaOverlay.propTypes={
  onClose: PropTypes.func.isRequired,
  header: PropTypes.string
  //showModal: PropTypes.bool.isRequired
  //children: PropTypes.childrenl
}