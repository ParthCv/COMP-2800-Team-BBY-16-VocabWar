import React from 'react'
import Signup from './Signup';
import Login from './Login';
import Logout from './Logout';
import { useUser } from 'reactfire';
import './StartPage.css';
import './BottomLogo.png';
import LoginPage from './LoginPage';
import { Router , Route, Switch,  Link } from "react-router-dom";
import { render } from 'react-dom';



const handleLoginPage = () => {
    

  }

const handleSignUpPage = () => {
    
   
}

export default function StartPage() {
    const user = useUser();
    return (
      
    <div>
       
         <h1> Vocab War </h1>
         {/* <Logo /> */}
         <img src="BottomLogo.png" /> 
         <div class="myform-button">
         {/* <Router>
        <Route path="/LoginPage" component={LoginPage} /> 
         <Link to={{pathname: '/LoginPage'}} className="myform-btn">hello</Link>
         </Router> */}
          <button class="myform-btn" onClick={handleLoginPage}>Login</button>
          <button class="myform-btn" onClick={handleSignUpPage}>Create An Account</button>
          <button class="myform-btn" >Continue With Google</button>
          
      </div>
    </div>
    )
}

