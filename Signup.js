import { useRef, useState } from "react";
import { useNavigate } from "react-router";

import './Signup.css';
function Sign(){
 
    const [change,setchange] =useState(false);
    const nav=useNavigate();
   
    function ChangeHandler(e){
e.preventDefault();
setchange(!change);
    }
    const Iemail=useRef();
    const Ipass=useRef();
   function submithandler(e){
        const mail=Iemail.current.value;

        const pass=Ipass.current.value;
        console.log(mail)
       
     
        e.preventDefault();
        let url;
        if(change){
url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBupNproc9--OrncxjwDq9Mg0KNrsD21zo';
        }else{
            url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBupNproc9--OrncxjwDq9Mg0KNrsD21zo';
        }
        fetch(url,{
            method:'POST',
            body:JSON.stringify({
                email:mail,
                password:pass,
                returnSecureToken:true,
            }),
            headers:{
                'Content-type':'aplication/json',
            },
        }).then((res)=>{
            if(res.ok){
return res.json();

            }else{
                return res.json().then((data)=>{
                    let errormsg="Authentication fault";
                  
                   throw new Error(errormsg);
                });
            }
        }).then((data)=>{

            console.log(data.idToken);
        nav('/you');
            localStorage.setItem("token",data.idToken);
      
        })
.catch((err)=>{
    alert(err.message);
})        
    }

    return(
        <>
        
        <h1 className="head">Video Sharing App</h1>
        <br></br>
        <hr></hr>
        <div className="form">
        <form  onSubmit={submithandler}>
            {change ?<h1 className="he">Login</h1>:<h1 className="he">SignUp</h1>}
        
            <div className="la"><label>Email:</label>
            <input className='I' type="email"  ref={Iemail}></input></div>
            <div className="la"><label>Password:</label>
            <input className='I' type="password" ref={Ipass}></input></div>
            <div>{change?<button  className="enter">Login</button>:<button className="enter">SignUp</button>}</div>
            <div>{change && <button className='par'>Forget password</button>}</div>
            <button onClick={ChangeHandler}  className='para'>{change?<p>Don't have an account?SignUp</p>:<p>already have an account ? Login</p>}</button>
        </form>
        </div>
        </>
    )
}
export default Sign;