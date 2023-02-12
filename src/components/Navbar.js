
import "@fontsource/roboto"; // Defaults to weight 400.
import "@fontsource/montserrat"; // Defaults to weight 400.
import {BiUserCircle} from 'react-icons/bi';

import {Link} from 'react-router-dom'
import { Login } from "../screens/Login/Login";
import { useState } from "react";
export const Navbar = () =>{
  
  const [displayLogin, setDisplayLogin] = useState(false)

  const ShowLogin =()=>{
    setDisplayLogin(!displayLogin)
  }
    return (
      <>
      {
        displayLogin ? (
          <Login/>
        ): null
      }
      
      
        <nav>
        
          <div className="App-header">
          <h1><Link to={'/'}>BLAIR OWENS</Link></h1>
          <ul className="lists">
            <li><Link to={'/ourproperties'}>Our Properties</Link></li>
            <li><Link to={'/mls'}>MLS Search</Link></li>
            <li><Link to={'/communities'}>Communities</Link></li>
            <li><Link to={'/news'}>News</Link></li>
            <li><Link to={'/about'}>About Blair</Link></li>
            <li><Link to={'contact'}>contact</Link></li>
            {/* <i onClick={()=>{
              document.querySelector('.login-wrapper').style.display="inline"

            }}><BiUserCircle className='icon'/></i> */}
            <i  onClick={ShowLogin}><BiUserCircle className='icon'/></i>
            
            
          </ul>
          
    
        </div>
       
        </nav>

       </>
    )
}
