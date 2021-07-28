import React from "react";
import { connect } from 'react-redux';
import {login} from "../redux/actions";

class Login extends React.Component{
  
  constructor(){
    super()
    this.state = {
      email:'',
      senha:''
    }
    this.handleChange = this.handleChange.bind(this)
    this.onSubmitForm = this.onSubmitForm.bind(this)
  }
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  onSubmitForm() {
    const { history, add } = this.props;
    add(this.state);
    history.push('/cadastrados');
  }

  render(){
    return(
      <div>
        <fieldset>
          <input
	  name='email'
          type='email'
	  placeholder='E-mail:'
	  onChange={ this.handleChange }
          />
          <input
	  name='senha'
          type='password'
	  placeholder='Senha:'
	  onChange={ this.handleChange }
          />
	  <button onClick={ this.onSubmitForm }>LOGIN!</button>
        </fieldset>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (value) => dispatch(login(value))
});

export default connect(null, mapDispatchToProps)(Login);