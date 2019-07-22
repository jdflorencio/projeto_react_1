import React from 'react'

const Comment = ({c}) => {
  let comment =  'vazio'
  let email = false
  if(c){
    if(c.comment){
      comment = c.comment
    }
    if(c.email){
      email = c.email
    }
    
  }

  return(
    <div>
    <br />  
    <strong>Comentario:</strong> {comment} <br />
     <label style={{color: '#088da5'}}> eviado por {email}</label>
      <br />
      
    </div>
  )
}
export default Comment