
import './Login.css'
import {FaFacebook} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {Create} from '../Login/Create'
import { Lostpassword } from './Lostpassword'

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../features/authenticationSlice";
import { useSelector } from "react-redux";
import { Navbar } from "../../components/Navbar";

export const Login= () => {
  const [login, setLogin] = useState('login-container')
  // login chech using reduxtoolkit
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, error } = useSelector((state) => state.auth);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      console.log("Here");
      navigate("/dashboard");
    }
  }, [isLoggedIn]);

  console.log(isLoggedIn, "From Login screen");

  console.log(userEmail, userPassword);

  const handleLogin = () => {
    dispatch(
      loginUser({
        email: userEmail,
        password: userPassword,
      })
    );
  };
// till here
//these are the useState to navigate to create pass and lost pass
  const DisplaySignUp = ()=>{
    setLogin('create__element')
  }
  const DisplayLostPassword = () =>{
    setLogin('lostpassword-container')
  }
// end of navigates
    return (
      

      <>
      <div className='login-wrapper'>
        <Navbar/>
      {
        login === 'login-container' && <div className='login-container'>
          <div onClick={()=>{
            document.querySelector('.login-wrapper').style.display="none"
            document.querySelector('.create-wrapper').style.display="none"
          }}><AiOutlineClose style={{position: "relative", left: 250, top: -15}}         
          /></div>
          <h1>Log In</h1>
          <p>Don't have an account? <Link><span onClick={DisplaySignUp} >Create your account</span></Link>, it takes less than a minute.</p>
          <label>Email</label>
          <input type={"text"}
            onChange={(e) => {
            setUserEmail(e.target.value);}}
          />

          <label>Password</label>
          <input type={"text"}
            onChange={(event) => {
            setUserPassword(event.target.value);
          }}
          />
          <p
          style={{
            color: "red",
          }}
        >
          {error}
        </p>
          
          <div className='login-one'>
          <button onClick={handleLogin} style={{backgroundColor: "#011640"}}>LOGIN</button>
          </div>
          
          <hr></hr>
          
          <div className='login-two'>
          <button style={{backgroundColor: "#1877F2"}}><FaFacebook/>   LOGIN WITH FACEBOOK</button>
          </div>
          <br></br>
          <div className='login-three'>
          <button style={{ backgroundColor: "#C63D2D"}}>LOGIN WITH GOOGLE</button>
          </div>
          
          <p onClick={DisplayLostPassword }><Link>Lost your Password</Link></p>
        </div>
      }
        {
          login === 'create__element' && <Create/>
        }
        else
       {
        login === 'lostpassword-container' && <Lostpassword/>
        }
        
      
      </div>
      
      </>
    )
  
}
