// see dashboardComponent notes.  InviteContainer is called by Dashboard
// which calls inviteComponent, which calls userInvite
import React, { Component } from 'react'
import InviteComponent from './InviteComponent'
import Modal from '../../common/Modal'
import './styles.scss'

export default class Invite extends Component {
  constructor () {
    super()

    this.state = {
      modalIsOpen: false
    }

    this.toggleModal = this.toggleModal.bind(this)
  }
  // Controls the display modal for the invite component
  toggleModal () {
    if (this.state.modalIsOpen) {
      this.setState({ modalIsOpen: false })
    } else {
      this.setState({ modalIsOpen: true })
    }
  }

  render () {
    return (
      <div>
        <button
          className='pure-button pure-button-active add-button el-spacing'
          onClick={this.toggleModal}>
          Add Clients
        </button>
        <Modal isOpen={this.state.modalIsOpen} handleClose={this.toggleModal}>
          <InviteComponent />
        </Modal>
      </div>
    )
  }
}
