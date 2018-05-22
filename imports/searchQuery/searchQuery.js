handleSubmit (e) {
  e.preventDefault()
  const filteredUsers = this.`filter`Users(this.props.users, this.state.keyword)
  this.props.updatedFilteredUsers(filteredUsers)
}

filterUsers (users, keyword) {
  // when the keyword is empty return the full users collection
  if (keyword.length === 0) {
    return users
  }

  const lowecaseKeyword = keyword.toLowerCase()
  // return the filtered collection of users
  return users.filter((user) => {
    let match = false

    Object.keys(user).forEach((key) => {
      if (!match) {
        let value = user[key]

        if (typeof value === 'string') {
          value = value.toLowerCase()
          match = value.includes(lowecaseKeyword)
        }
      }
    })
    return match
  })
}
