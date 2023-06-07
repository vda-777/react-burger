import React from 'react';
import PropTypes from 'prop-types';
import style from './modal-overlay.module.css';

export default function ModaOverlay(props) {
  return (
    <div className={style.modalOverlay}
      tabIndex={0}
      onClick={props.onClose}
    />       
  );    
}

ModaOverlay.propTypes={
  onClose: PropTypes.func.isRequired,
  header: PropTypes.string
}