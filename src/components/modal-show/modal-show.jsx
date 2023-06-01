import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import {createPortal} from 'react-dom';

export default function ModalShow(props) {
  return (
    <>
        {createPortal(
            <Modal header={props.header} onClose={props.onClose}>
                {props.children}
            </Modal>,
            document.getElementById('modals')
        )}
    </>
  );
}

ModalShow.propTypes={
  onClose: PropTypes.func.isRequired,
  header: PropTypes.string,
  showModal: PropTypes.bool.isRequired
  //children: PropTypes.childrenl
}