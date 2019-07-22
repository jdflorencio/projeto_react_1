import React, { Component } from 'react'

class SignUP extends Component {
	state = {
		email: '',
		passwd: ''
	}
	//Curry usando duas array function em uma
	handleChange = field => event =>{
		this.setState({
			[field]: event.target.value
		})
	}
	createAccount = () =>{
		this.props.createAccount(this.state.email, this.state.passwd)
	}
	render(){
		const errorMessages = {
			"auth/invalid-email": "E-mail inválido :(",
			"auth/user-not-found": "usuario não encontrado ;(",
			"auth/wrong-password": "Senha invalida :(",
			"auth/email-already-in-use": "Email já cadastrado!",
			"auth/weak-password": "Senha muito fraca."
		  }
		return(
			<div>
				<h4>Crie sua conta de login</h4>
				{
					this.props.isSignUpError && <div className="card text-white bg-danger mb-3"> 
					<div className="card-body">
						<h3>falhou  {errorMessages[this.props.signUpError]}</h3>
						</div>
					</div>
				}
				<form className="form-inline">
				
				<br />
				<input className="form-control mr-2"type='text' onChange={this.handleChange('email')} placeholder='Email'/>
				<input className="form-control mr-2"type='password' onChange={this.handleChange('passwd')} placeholder='passwd'/>
				<button className="btn btn-primary mr-2" type='button' onClick={this.createAccount}>criar conta  </button>
				<button  className="btn" onClick={() => this.props.changeScreen('login')} >Entrar, já tenho um conta</button>
				
				</form>
			</div>		

		)
	}
}

export default SignUP