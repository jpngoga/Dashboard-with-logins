

          import React from 'react'
          import './lostpassword.css'
          import {AiOutlineClose} from 'react-icons/ai'
          
          
          
          export const Lostpassword= () => {
            
              return (
                <>
               
                <div className='lostpassword-wrapper'>
                  <div className='lostpassword-container'>
                  <div onClick={()=>{
                      document.querySelector('.login-wrapper').style.display="none"
                      document.querySelector('.create-wrapper').style.display="none"
                      document.querySelector('.lostpassword-wrapper').style.display="none"
                      }}><AiOutlineClose style={{position: "relative", left: 250, top: -15}}         
                    /></div>
                    <h1>Lost Password?</h1>
                    <p>Enter your email address and we'll send you a link you can use to pick a new password.</p>
                    
                    <label>Username or Email</label>
                    <br></br>
                    <input type={"text"}/>
                  
                    <div className='lostpassword-one'>
                    <button style={{ backgroundColor: "#011640"}}>GET A NEW PASSWORD</button>
                    </div> 
                    
                    </div>
                
                </div>
                </>
              )
            
          }
          