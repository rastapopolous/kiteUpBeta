// component includes button for dashboard that toggles open message modal
// that contains <messageUsersComponent/>
import React, { Component, PropTypes } from 'react'
import MessageUsersComponent from './MessageUsersComponent'
import Modal from '../../common/Modal'
import './styles.scss'

export default class MessageUsers extends Component {
  constructor () {
    super()

    this.state = {
      modalIsOpen: false
    }

    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal () {
    if (this.state.modalIsOpen) {
      this.setState({ modalIsOpen: false })
    } else {
      this.setState({ modalIsOpen: true })
    }
  }
  // renders to dashboard as 'messageUsers' button, which
  // expands into modal containing component and searchbyName
  render () {
    return (
      <div>
        <button
          className='pure-button pure-button-active message-button el-spacing'
          onClick={this.toggleModal}>
          Message Clients
        </button>
        <Modal isOpen={this.state.modalIsOpen} handleClose={this.toggleModal}>
          <MessageUsersComponent
            filteredUsers={this.props.filteredUsers}
            users={this.props.users} />
        </Modal>
      </div>
    )
  }
}
MessageUsers.propTypes = {
  filteredUsers: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired
}
