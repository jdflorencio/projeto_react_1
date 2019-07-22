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
    <div className="card mt-2">
      <div className="card-header">
        Enviado por: {email}
      </div>
      <div className="card-body">
        {comment} <br />
        <label style={{color: '#088da5'}}> eviado por {email}</label>
      </div>      
    </div>
  )
}
export default Comment