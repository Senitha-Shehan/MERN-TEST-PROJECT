import React from 'react'

const User = (props) => {

    const {_id,name,age,email}= props.user;

  return (
    
    <div>
        <br></br>

        <div>
            <h1>ID:{_id}</h1>
            <h1>Name:{name}</h1>
            <h1>Age:{age}</h1>
            <h1>email:{email}</h1>
            <button>Update</button>
            <button>Delete</button>
    
        </div>
      
    </div>
  )
}

export default User
