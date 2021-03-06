import React, { PropTypes } from 'react'
import './styles.scss'

function UserCard ({ user, onHandleClick }) {
  const {
    image,
    firstname,
    lastname,
    city,
    _id
  } = user
  return (
    <div className='grid-cell' onClick={() => onHandleClick(_id)}>
      <figure>
        <img className='pure-img' src={image} alt='UserCard profile' />
        <figcaption>
          <span><p>{firstname} {lastname}</p></span>
          <span><p>{city}</p></span>
        </figcaption>
      </figure>
    </div>
  )
}

UserCard.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }),
  onHandleClick: PropTypes.func.isRequired
}

export default UserCard
