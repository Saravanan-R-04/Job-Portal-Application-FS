import React from 'react'
import RNavbar from '../../components/RNavbar/RNavbar'
import { useState,useEffect } from 'react'
import axios from 'axios'
import './RPosted.css'
import { useNavigate } from 'react-router-dom'

const RPosted = () => {
  const navigate = useNavigate();
  const [jobs,setJobs]=useState([]);
  const url="http://localhost:5000/recruiter/get-all-jobs"
  const token = localStorage.getItem("token"); 
  
  const getResponse = async() =>{
    try{
    
     const response = await axios.get(url, {
    headers: {
        Authorization: `Bearer ${token}`,
      },
    });
   
      if(response.data.success)
      {
        alert("Fetched Posted Jobs")
        setJobs(response.data.allJobs);
        console.log(response.data.allJobs);
      }
      else
      {
        alert(response.data.message);
      }
    }
    catch(error)
    {
      navigate('/r')
      
    }
  }
  const handleDelete = async (id) =>{
    const deleteURL = `http://localhost:5000/recruiter/delete-job/${id}`;
    try{
      const response = await axios.delete(deleteURL,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      alert("Job Deleted Successfully");
    }
    catch(error)
    {
      alert(error.message);
    }
  }
    useEffect(()=>{
      getResponse();
    },[])
  return (
    <>
  <RNavbar />
  <h2 style={{marginLeft:"50px"}}>POSTED JOBS</h2>
  <div className="jobs-container">
    {jobs.map((job, index) => (
      <div className="job-card" key={index}>
        <div style={{display:"flex",marginTop:"15px"}}>
            <h3 className='title'>TITLE: </h3>
            <h3>{job.title}</h3>
        </div>
        <div style={{display:"flex",marginTop:"-30px"}}>
            <h3 className='desc'>DESCRIPTION: </h3>
            <h3>{job.description}</h3>
        </div>
        <div style={{display:"flex",marginTop:"-30px"}}>
            <h3 className='location'>LOCATION:</h3>
            <h3>{job.location}</h3>
        </div>
        <div style={{display:"flex",marginTop:"-30px"}}>
            <h3 className='salary'>SALARY: </h3>
            <h3>{job.salary}</h3>
        </div>
         <div style={{display:"flex",marginTop:"-30px"}}>
            <h3 className='salary'>SKILLS: </h3>
            <h3>{job.skills}</h3>
        </div>
        <button style={{backgroundColor:"black",color:"white",marginLeft:"33px" }}>UPDATE</button>
        <button style={{backgroundColor:"red",color:"white"}} onClick={()=>handleDelete(job._id)}>DELETE</button>
      </div>
    ))}
  </div>
</>
  )
}

export default RPosted