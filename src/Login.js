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
			<h4>Entre para comentar: </h4>
			{
				this.props.isAuthError && <div className="card text-white bg-danger mb-3">
				 		<div className="card-body">
							<h3>falhou :( {errorMessages[this.props.authError]}</h3>
						</div>
					</div>
			}
				<form className="form-inline">					
					<input className="form-control mr-2" type='text' onChange={this.handleChange('email')} placeholder='Email'/>
					<input className="form-control mr-2" type='password' onChange={this.handleChange('passwd')} placeholder='passwd'/>
					<button className="btn btn-primary mr-2 " type='button' onClick={this.login}>Entrar</button>
					<button className="btn  mr-2"onClick={() => this.props.changeScreen('signup')} >Criar Conta</button>
				</form>		
			</div>		
		)
	}
}

export default Login