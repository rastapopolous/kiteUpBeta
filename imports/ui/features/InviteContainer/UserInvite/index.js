// UserInvite called to generate display email w delete for list to send
// almost identical to Edwin's UserInvite
import React, { PropTypes } from 'react'

const UserInvite = ({ id, email, deleteEmail }) =>
  <div>
    {email}
    <span onClick={() => deleteEmail(id)}>   X</span>
  </div>

UserInvite.propTypes = {
  id: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  deleteEmail: PropTypes.func.isRequired
}

export default UserInvite
