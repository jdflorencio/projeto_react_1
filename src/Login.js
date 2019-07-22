import React, { Component } from 'react'

class Login extends Component {
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
	login = () =>{
		this.props.login(this.state.email, this.state.passwd)
	}
	render(){
		const errorMessages = {
			"auth/invalid-email": "E-mail inválido",
			"auth/user-not-found": "usuario não encontrado",
			"auth/wrong-password": "Senha invalida"
		  }
		return(
			<div>
				<h4>Login</h4>
				{
					this.props.isAuthError && <p style={{color: 'red'}}> falhou :( {errorMessages[this.props.authError]}</p>
				}
	
				<input type='text' onChange={this.handleChange('email')} placeholder='Email'/>
				<input type='password' onChange={this.handleChange('passwd')} placeholder='passwd'/>
				<button type='button' onClick={this.login}>Entrar</button>
				<button onClick={() => this.props.changeScreen('signup')} >Criar Conta</button>

			</div>				
		)
	}
}

export default Login