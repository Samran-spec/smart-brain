import React from 'react'
import './SignUp.css'


const SignUp = ({onRouteChange}) => {
  return (
    <div className="card-body">
    <form className="card-upCard">
      <h1>Sign Up</h1>
      <div className="name">
        <label>Name</label>
        <br />
        <input type="text" />
      </div>
      <div className="Email">
        <label>Email</label>
        <br />
        <input type="text" />
      </div>
      <div className="Password">
        <label>Password</label>
        <br />
        <input type="text" />
      </div>
      <button className="SignInBtn" onClick={()=>onRouteChange('home')}>Register</button>
      <br/>
     
      
    </form>
  </div>
  )
}

export default SignUp