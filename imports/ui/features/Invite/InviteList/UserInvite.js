import React, { PropTypes } from 'react'

const UserInvite = ({ id, email, deleteEmail }) => (
  <div>
    {email}
    <button onClick={() => deleteEmail(id)}>Delete</button>
  </div>
)

UserInvite.propTypes = {
  id: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  deleteEmail: PropTypes.func.isRequired
}

export default UserInvite
