import React, { useState} from 'react'
import './SignUp.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate=useNavigate();
  const url="http://localhost:5000/register"
  const [data,setData]=useState({
    name:"",
    email:"",
    password:"",
    role:""
  });
  const onChangeHandler = (event) =>{
    const name=event.target.name;
    const value=event.target.value;
    setData((prev)=>{
      return {...prev,[name]:value}
    });
  }
  const onSubmitHandler = async (event) => {
    event.preventDefault();
   
    try {
        const response = await axios.post(url, data);
        console.log("Response:", response.data);
        if (response.data.success) {
            alert("User Registered Successfully");
            navigate("/login")
        } else {
            alert(response.data.message);
        }
    } catch (error) {
        console.error("Signup error:", error.response?.data || error);
        alert(error.response?.data?.message || "Error registering user!");
    }
}
  return (
    <>
      <h2 style={{letterSpacing:"3px",color:"blue",marginTop:"80px",fontSize:"30px",marginLeft:"750px"}}>JOBCIRCLE</h2>
      <div className='signup'>
          <h2 style={{marginLeft:"150px",color:"blue"}}><Link to='/'>SIGNUP</Link></h2>
          <form onSubmit={onSubmitHandler} style={{marginTop:"15px"}}>
          
          <div className='n'>
              <h3>Enter Your Name</h3>
              <input type="text" className='email' name="name" 
              onChange={onChangeHandler} value={data.name} required/>
          </div>
          <div className='e'>
              <h3>Enter Your Email</h3>
              <input type="email" className='email'
              onChange={onChangeHandler} value={data.email} name="email" required/>
          </div>
          <div className='p'>
              <h3>Enter Your Password</h3>
              <input type="password" className='password'
              onChange={onChangeHandler} value={data.password} name="password" required/>
          </div>
          <div className='r'>
              <h3>Role(Candidate/Recruiter)</h3>
              <input type="text" className='password'
              onChange={onChangeHandler} value={data.role} name="role" required/>
          </div>
          <button type='submit' style={{color:"white",fontSize:"17px"}}>SUBMIT</button>
          <br />
          <br />
           <Link to='/login' style={{marginLeft:"80px",marginTop:"30px",color:"blue"}}>Already have an account? LOGIN</Link>
          </form>
      </div>
    </>
  )
}
export default SignUp