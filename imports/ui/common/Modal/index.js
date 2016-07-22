import React, { PropTypes } from 'react'
import './styles.scss'

const Modal = ({ isOpen, handleClose, children }) => {
  const modalBg = {
    display: ''
  }
  if (isOpen) {
    modalBg.display = 'block'
  } else {
    modalBg.display = 'none'
  }
  return (
    <div className='modal' style={modalBg}>
      <div className='modalBox'>
        {children}
        <span className='close' onClick={() => handleClose(null)}>X</span>
      </div>
    </div>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired
}

export default Modal
