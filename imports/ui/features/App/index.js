import React, { Component, PropTypes } from 'react'

export default class App extends Component {
  render () {
    return (
      <div>
        <h1>Hello KiteUp</h1>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node,
}
