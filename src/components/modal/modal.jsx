import React from 'react';
import PropTypes from 'prop-types';
import ModaOverlay from '../modal-overlay/modal-overlay';
import {createPortal} from 'react-dom';

export default function Modal(props) {
  return (
    <>
        {createPortal(
            <ModaOverlay header={props.header} onClose={props.onClose}>
                {props.children}
            </ModaOverlay>,
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