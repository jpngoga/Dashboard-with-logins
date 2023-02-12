import React from 'react'
import './Create.css'
import {AiOutlineClose} from 'react-icons/ai'



export const Create= () => {
  
    return (
      <>
     
      <div className='create-wrapper'>
        <div className='create-container'>
        <div onClick={()=>{
            document.querySelector('.login-wrapper').style.display="none"
            document.querySelector('.create-wrapper').style.display="none"
            }}><AiOutlineClose style={{position: "relative", left: 250, top: -15}}         
          /></div>
          <h1>Create An Account</h1>
          <p>Don't have an account? Create your account, it takes less than a minute.</p>
          <label>Username</label>
          <input type={"text"}/>
          <label>Email</label>
          <input type={"text"}/>
        
          <div className='create-names'>
          <>
          <label className='one'>FirstName</label>
          </>
          <label className='one'>LastName</label>
          </div>
          <div className='create-inputsnames'>
          <>
          <input style={{width: "60px"}} type={"text"}/>
          </>
          <input style={{width: "60px"}} type={"text"}/>
          </div>
          
          <label>Mobile </label>
          <input type={"text"}/>
          <div className='create-nameslast'>
          <>
          <label>Password</label>
          </>
          <label>Password Again</label>
          </div>
        
          <div className='create-inputnames'>
          <>
          <input style={{width: "60px"}} type={"text"}/>
          </>
          <input style={{width: "60px"}} type={"text"}/>
          </div>
         
        
        </div>
      </div>
      </>
    )
  
}
