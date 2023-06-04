//import { Overlay } from "react-portal-overlay";
import React from 'react';
import PropTypes from 'prop-types';
import style from './modal-overlay.module.css';

export default function ModaOverlay(props) {
  const refModalOverlay = React.useRef();
  React.useEffect(()=>{
    refModalOverlay.current.focus();
  },[]);

  return (
    <div className={style.modalOverlay}
      tabIndex={0}
      ref={refModalOverlay}
      onClick={props.onClose}
      onKeyDown={(e)=>{if(e.key === 'Escape') props.onClose()}}
    />       
    //</div>
  );    
}

ModaOverlay.propTypes={
  onClose: PropTypes.func.isRequired,
  header: PropTypes.string
  //children: PropTypes.childrenl
}



