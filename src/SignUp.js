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
				<h4>Signup</h4>
				{
					this.props.isSignUpError && <p style={{color: 'red'}}> falhou  {errorMessages[this.props.signUpError]}</p>
				}
				<input type='text' onChange={this.handleChange('email')} placeholder='Email'/>
				<input type='password' onChange={this.handleChange('passwd')} placeholder='passwd'/>
				<button type='button' onClick={this.createAccount}>criar conta  </button>
				<button onClick={() => this.props.changeScreen('login')} >Entrar, já tenho um conta</button>
				

			</div>				
		)
	}
}

export default SignUP