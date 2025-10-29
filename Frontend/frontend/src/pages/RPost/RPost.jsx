import React, { useState} from 'react'
import './RPost.css'
import {useNavigate} from "react-router-dom"
import axios from 'axios'
const RPost = () => {
  const url="http://localhost:5000/recruiter/create-job"
  const navigate = useNavigate();
  const [data,setData]=useState({
  company:"",
  title:"",
  description:"",
  location:"",
  salary:"",
  skills:""
  })
 
  const handleChange = (event) =>{
    console.log("Executing");
    const name=event.target.name;
    const value=event.target.value;
    setData((prev)=>{return{...prev,[name]:value}})
  }
  const handleSubmit = async(event) =>{
    event.preventDefault();
    try{
      const token=localStorage.getItem("token");
      const response=await axios.post(url,data,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      }
      );

      if(response.data.success)
      {
        alert(response.data.message);
        navigate("/")
      }
      else
      {
        alert("Job Created Successfully");
        navigate("/r")
      }
    }
    catch(error)
    {
      alert(error.message);
      navigate("/r")
    }
  }
  return (
    <>
      <h2 style={{marginLeft:"470px",marginTop:"60px",letterSpacing:"2px"}}>POST A JOB</h2>
      <form className='profile-form' style={{display:"flex",width:"640px",height:"700px"}} onSubmit={handleSubmit} > 
        <div>
            <div style={{display:"flex"}}>
              <div>
                <h3 className='h3'>Company:</h3>
              </div>
              <div>
                <input type="text" style={{width:"270px",height:"35px",marginLeft:"60px"}} 
                name="company" value={data.company} onChange={handleChange}/>
              </div>
            </div>
            <div style={{display:"flex"}}>
              <div>
                <h3 className='h3'>Title:</h3>
              </div>
              <div>
                <input type="text" style={{width:"270px",height:"35px",marginLeft:"100px"}} 
                name="title" value={data.title} onChange={handleChange}/>
              </div>
            </div>
            <div style={{display:"flex"}}>
              <div>
                <h3 className='h3'>Description:</h3>
              </div>
              <div>
                <input type="text" style={{width:"270px",height:"35px",marginLeft:"40px"}}
                name="description" value={data.description} onChange={handleChange}/>
              </div>
            </div>
            <div style={{display:"flex"}}>
              <div>
                <h3 className='h3'>Location:</h3>
              </div>
              <div>
                <input type="text" style={{width:"270px",height:"35px",marginLeft:"65px"}}
                name="location" value={data.location} onChange={handleChange}/>
              </div>
            </div>  
            <div style={{display:"flex"}}>
              <div>
                <h3 className='h3'>Salary:</h3>
              </div>
              <div>
                <input type="number" style={{width:"270px",height:"35px",marginLeft:"85px"}}
                name="salary" value={data.salary} onChange={handleChange}/>
              </div>
            </div>
            <div style={{display:"flex"}}>
              <div>
                <h3 className='h3'>Skills:</h3>
              </div>
              <div>
                <input type="text" style={{width:"270px",height:"35px",marginLeft:"90px"}}
                name="skills" value={data.skills} onChange={handleChange}/>
              </div>
            </div>
            <button type="submit" style={{color:"white"}} className='btn'>SUBMIT</button>
        </div>
      </form>
    </>
  )
}
export default RPost