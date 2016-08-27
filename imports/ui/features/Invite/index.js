
import React, { Component, PropTypes } from 'react'
import Modal from '../../common/Modal'

export default class Invite extends Component {

  constructor () {
    super ()
    
    this.state = {
      email: '',
      emailList: []
    }

    this.addEmail = this.addEmail.bind(this) 
    this.handleChange = this.handleChange.bind(this)
    this.removeEmail = this.removeEmail.bind(this)
    this.renderInputForm = this.renderInputForm.bind(this)
    this.renderOutputForm = this.renderOutputForm.bind(this)
  }
   
  handleChange (e) {
    e.preventDefault()

    this.setState({
      email: this.refs.emailInput.value
    })
  }  

  addEmail () {
    this.state.emailList.push(this.state.email) 
    /*returns email property val to '' after its pushed to emailList array*/
    this.state.email = '' 
  }
  
  removeEmail (deleteMail) { 
    let removed = this.state.emailList.indexOf(deleteMail)
    this.state.emailList.splice(removed, 1)
  }
  
  renderInputForm () {
    return (
      <form className='pure-form'>
        <input
          type='text'
          autoFocus
          value={this.state.email}
          ref='emailInput'
          onChange={this.handleChange}
          placeholder='email here' />
        <button className="pure-button pure-button-active" onClick={() => this.addEmail()}>Add email</button>  
      </form>  
    )  
  } 
  
  renderOutputForm() {    
    let emailItem = (email) => {    
      return 
        <li>
          <span>{email}</span>
          <span onClick={this.removeEmail(email)}> X</span>
        </li>
    }   
    return 
      <textarea>
        <ul>{this.state.emailList.map(emailItem)}</ul>
      </textarea>  
        
  } 
 

  render () {
    return (
      <div>
        <modal>
          <div>
            {this.renderInputForm()}
          </div>
          <div>
            {this.renderOutputForm()}
          </div>
          <div>
           <button className="pure-button pure-button-active" onClick={this.toggleModal}>Invite Users</button>
          </div> 
        </modal>
      </div>
    )
  }
}
      

/*
render: function(){ 
  var createItem = function(itemText) {
    return <li>{itemText}</li>;
  };
  return <ul>{this.props.items.map(createItem)}</ul>;
  }
});    
*/

