import React from "react";

class Cadastrados extends React.Component{
  constructor(){
    super()
    this.onSubmitForm = this.onSubmitForm.bind(this)
  }
  onSubmitForm() {
    const { history } = this.props
    history.push('/cadastro');
  }
  render(){
    return(
      <div>
        <h1>Usuarios Cadastrados</h1>
        <button onClick={this.onSubmitForm}>CADASTRE-SE</button>
      </div>
    )
  }
}

export default Cadastrados;