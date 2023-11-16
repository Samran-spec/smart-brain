import React from 'react'
import '../navigation/Navigation.css'

const Navigation = ({onRouteChange, isSignIn}) => {
if(isSignIn){
  return (
    <nav className='nav'>
        <p onClick={()=>onRouteChange('signIn')}>Sign Out</p>
    </nav>
  )
}
else{
  return(
    <nav className='nav'>
    <p onClick={()=>onRouteChange('home')}>Sign In</p>
    <p onClick={()=>onRouteChange('register')}>Register</p>
</nav>
  )
}
}

export default Navigation