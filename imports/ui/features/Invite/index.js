import React, { Component } from 'react'
import Modal from '../../common/Modal'
import InviteList from './InviteList'

export default class Invite extends Component {
  constructor () {
    super()

    this.state = {
      modalIsOpen: false
    }

    this.toggleModal = this.toggleModal.bind(this)
    this.renderModal = this.renderModal.bind(this)
  }

  toggleModal () {
    if (this.state.modalIsOpen) {
      this.setState({ modalIsOpen: false })
    } else {
      this.setState({ modalIsOpen: true })
    }
  }

  renderModal () {
    return (
      <Modal isOpen={this.state.modalIsOpen} handleClose={this.toggleModal} height={'50%'}>
        <InviteList />
      </Modal>
    )
  }
  render () {
    return (
      <div>
        {this.renderModal()}
        <button onClick={this.toggleModal}>Invite New Users</button>
      </div>
    )
  }
}
