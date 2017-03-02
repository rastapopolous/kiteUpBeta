import React, { PropTypes } from 'react'
import './styles.scss'

const Modal = ({ isOpen, handleClose, height, width, children }) => {
  const modal = {
    display: '',
    height,
    width
  }
  modal.display = isOpen === true ? 'inline-block' : 'none'
  return (
    <div className='modal-overlay' style={{ display: modal.display }}>
      <div className='modal' style={{ height: modal.height, width: modal.width }}>
        <div className='modal-guts'>
          {children}
        </div>
        <span className='close' onClick={() => handleClose(null)}>X</span>
      </div>
    </div>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  height: PropTypes.string,
  width: PropTypes.string
}

Modal.defaultProps = {
  height: '75%',
  width: '60%'
}

export default Modal
