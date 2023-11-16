import React from "react";
import "./SignIn.css";

const SignIn = ({onRouteChange}) => {
  return (
    <div className="card-body">
      <form className="card">
        <h1>Sign In</h1>
        <div className="email">
          <label>Email</label>
          <br />
          <input type="text" />
        </div>
        <div className="password">
          <label>Password</label>
          <br />
          <input type="text" />
        </div>
        <button className="SignInBtn" onClick={()=>onRouteChange('home')}> Login</button>
        <br/>
        <div className="register">
        <p  onClick={()=>onRouteChange('register')}> register</p>
        </div>
        
      </form>
    </div>
  );
};

export default SignIn;
