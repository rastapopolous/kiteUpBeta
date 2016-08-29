import React, { Component, PropTypes } from 'react'
import UserCard from './UserCard'
import Modal from '../../common/Modal'
import UserProfile from '../UserProfile'
import './styles.scss'

export default class UserGrid extends Component {
  constructor () {
    super()

    this.state = {
      modalIsOpen: false,
      selectedUserId: null
    }

    this.renderUser = this.renderUser.bind(this)
    this.renderModal = this.renderModal.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal (userId = null) {
    if (this.state.modalIsOpen) {
      this.setState({ modalIsOpen: false })
    } else {
      this.setState({ modalIsOpen: true,
                      selectedUserId: userId })
    }
  }

  renderModal () {
    let userData = null
    if (this.state.selectedUserId !== null) {
      userData = this.props.users.find((user) => user._id === this.state.selectedUserId)
    }
    return (
      <Modal isOpen={this.state.modalIsOpen} handleClose={this.toggleModal}>
        <UserProfile user={userData} />
      </Modal>
    )
  }

  renderUser () {
    return (
      this.props.users.map((user) =>
        <div className='pure-u-lg-1-6 pure-u-md-1-4 pure-u-1-2' key={user._id}>
          <UserCard user={user} onHandleClick={this.toggleModal} />
        </div>)
    )
  }

  render () {
    return (
      <div>
        {this.renderModal()}
        <div className='pure-g'>
          <div className='pure-u-23-24 center-align'>
            <h2>User Grid</h2>
            <div className='grid-panel'>
              {this.renderUser()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

UserGrid.propTypes = {
  users: PropTypes.array.isRequired
}
