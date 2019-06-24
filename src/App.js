import React, { Component }from 'react'
import NewComment from './NewComment'
import Commnents from './Comments'

class App extends Component {
  
  state = {
    comments:{}, 
    isLoading: false
  }

  sendComment = comment => {
    const { database } = this.props
    const id = database.ref().child('comments').push().key;
    console.log(id)
    const comments = {}
    comments['comments/'+id] = {
     comment
    }
    
    database.ref().update(comments)
    {/*Alterando o state interno */}
    // this.setState({
    //   comments: [...this.state.comments, comment],
    // })    
  }

  componentDidMount(){
    const { database } = this.props

    this.setState({isLoading: true})
    this.comments = database.ref('comments')
    this.comments.on('value', snapshot => {
      this.setState({comments: snapshot.val(),
      isLoading: false})
    })
  }

  render () {
    return (
      <div>
        <NewComment sendComment={this.sendComment} />
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