import React, { Component }from 'react'
import NewComment from './NewComment'
import Commnents from './Comments'
import Login from './Login'
import User from './User'

class App extends Component {
  
  state = {
    comments:{}, 
    isLoading: false,
    isAuth: false, 
    isAuthError: false,
    authError: '',
    user: {}
  }

  sendComment = comment => {
    console.log('estou passando aqui =>', comment)
    const { database } = this.props
    const id = database.ref().child('comments').push().key;
    console.log(id)
    const comments = {}
    comments['comments/'+id] = {
      comment,
      email: this.state.user.email,
      userId: this.state.user.uid
    }
    
    database.ref().update(comments)
    // this.setState({
    //   comments: [...this.state.comments, comment],
    // })    
  }
  login = async(email, passwd) => {
    const { auth } = this.props
    this.setState({
      authError: '',
      isAuthError: false
    })
    try{
      await auth.signInWithEmailAndPassword(email, passwd)
    }catch(err){
      this.setState({
        authError: err.code,
        isAuthError: true
      })
    } 
  }

  componentDidMount(){
    const { database, auth } = this.props

    this.setState({isLoading: true})
    this.comments = database.ref('comments')
    this.comments.on('value', snapshot => {
      
      this.setState({comments: snapshot.val(),
      isLoading: false})
    })
    auth.onAuthStateChanged(user => {
      if(user){
        this.setState({
          isAuth: true,
          user
        })
      }else{
        this.setState({
          isAuth: false,
          user:{}
        })

      }
    } )
  }

  logout = () =>{
    const { auth } = this.props
    auth.signOut()
  }

  render () {
    return (
      <div>
      {this.state.isAuth && <User email={this.state.user.email} logout={this.logout}/>} 
      {!this.state.isAuth && <Login login={this.login} />}
        { this.state.isAuth &&  <NewComment sendComment={this.sendComment} /> }
       
        <Commnents comments={this.state.comments}/>
        {/*conditionally render  */}
        {
          this.state.isLoading &&  <p>Carregando...</p>
        }
      </div>
    )
  }
}
export default App