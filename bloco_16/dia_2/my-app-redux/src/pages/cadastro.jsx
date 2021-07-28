import React from "react";
import { connect } from 'react-redux';
import { cadastro } from "../redux/actions";

class Cadastro extends React.Component{
  constructor(){
    super()
    this.state = {
      nome:'',
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
          name='nome'
          type='text'
	        placeholder='Nome:'
          onChange={ this.handleChange }
          />
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
          <button onClick={this.onSubmitForm}>CADASTRADOS</button>
        </fieldset>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (value) => dispatch(cadastro(value))
});

export default connect(null, mapDispatchToProps)(Cadastro);