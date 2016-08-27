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

  toggleModal (userId = null) {
    if (this.state.modalIsOpen) {
      this.setState({ modalIsOpen: false })
    } else {
      this.setState({ modalIsOpen: true,
                      selectedUserId: userId })
    }
  }
  
  return (
    <div className='modal' style={modalBg}>
      <div className='modalBox'>
        {children}
        <span className='close' onClick={this.toggleModal}>X</span>
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
