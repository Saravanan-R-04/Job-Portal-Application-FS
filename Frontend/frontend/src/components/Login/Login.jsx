import React, { useState} from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate();
  const url="http://localhost:5000/login";
  const [token,setToken]=useState("");
  const [data,setData]=useState({
    email:"",
    password:"",
  });
  const onChangeHandler = (event) =>{
    const name=event.target.name;
    const value=event.target.value;
    setData((prev)=>{
      return {...prev,[name]:value}
    });
  }
  const onSubmitHandler = async(event) =>{
    event.preventDefault();
    try{
        console.log(data);
        const response = await axios.post(url,data);
        console.log(response.data);
        if(response.data.success)
        {
          setToken(response.data.token);
          localStorage.setItem("token",response.data.token);
          const role=response.data.role;
          if(role==="Candidate")
          {
            alert("Login Successfully");
            navigate("/profileform");
          }
          if(role==="Recruiter")
          {
            navigate("/rprofileform");
          }
        }
        else
        {
          alert(response.data.message);
        }
    }
    catch(error)
    {
      alert("User Not Found");
      navigate("/signup")
    }
  }
  return (
    <div className='bg'>
      <h2 style={{letterSpacing:"3px",color:"white",marginTop:"150px",fontSize:"30px",marginLeft:"750px"}}>JOBCIRCLE</h2>
      <div className='login'>
          <h2 style={{marginLeft:"170px",color:"blue"}}><Link to='/'>LOGIN</Link></h2>
          <form onSubmit={onSubmitHandler}>
          <div>
              <h3>Enter Your Email</h3>
              <input type="email" className='email'
              onChange={onChangeHandler} value={data.email} name="email" required/>
          </div>
          <div>
              <h3>Enter Your Password</h3>
              <input type="password" className='password'
              onChange={onChangeHandler} value={data.password} name="password" required/>
          </div>
          <button type='submit' style={{color:"white",fontSize:"17px"}}>SUBMIT</button>
          <br />
          <br />
          <br />
           <Link to='/signup' style={{marginLeft:"80px",marginTop:"30px",color:"blue"}}>Don't have an account? SIGN-UP</Link>
          </form>
      </div>
    </div>
  )
}
export default Login