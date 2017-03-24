import React, { Component } from 'react';
// import Login from './App';
import "./Validator.css";

class Validator extends Component {
  constructor(props) {
    super()
    this.state = {
      user: "",
      password: "",
      validator: ""
    };
    this.validUser = this.validUser.bind(this);
    this.validPassword = this.validPassword.bind(this);
    this.validValidator = this.validValidator.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  validUser(pass) {
    this.setState({user: pass.target.value})
  }
  validPassword(pass) {
    this.setState({password: pass.target.value})
  }
  validValidator(pass) {
    this.setState({validator: pass.target.value})
  }
  handleSubmit(pass) {
    pass.preventDefault();
    if(this.state.password === this.state.validator) {
      alert("Logged in. Welcome...");
    } else {
      alert("Failure Login...");
    };
  }
render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <h1>Sign Up</h1>
      <input type="text" value={this.state.user} placeholder="Enter Email" onChange={this.validUser}/>
      <input type="password" value={this.state.password} placeholder="Enter Password" onChange={this.validPassword} />
      <input type="password" value={this.state.validator} placeholder="Re-Enter Password" onChange={this.validValidator}/>
      <input type="submit" value="Submit" />
      </form>
      );
    }

}

export default Validator;
