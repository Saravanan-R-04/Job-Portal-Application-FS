import React, { useState,useEffect} from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar';
import {useNavigate} from "react-router-dom"
const AppliedJobs = () => {
  const url="http://localhost:5000/candidate/get-applied-jobs";
  const navigate = useNavigate();
  const [data,setData]=useState([]);
  const token = localStorage.getItem("token");
  const getResponse = async() =>{
    try{
      const response  = await axios.get(url,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      });
      console.log(response)
      if(response.data && response.data.appliedJobs)
      {
        alert("Fetched Applied Jobs");
        setData(response.data.appliedJobs)
       
        
      }
      console.log(response.data.appliedJobs);
    }
    catch(error)
    {
      console.log(error.message);
    }
  }
  const Navigation = () =>{
    navigate("/")
  }
  const deleteAppliedJob = async(id) =>{
    const url2=`http://localhost:5000/candidate/delete-job/${id}`;
    try{
      const response  = await axios.delete(url2,{
        headers:{
          Authorization:`Bearer ${token}`
        }})
        if(response.data.success)
        {
          alert("Job Deleted Successfully");
        }
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
     <Navbar />
     <h2 style={{marginLeft:"50px"}}>APPLIED JOBS</h2>
     <div className="jobs-container">
     {data.map((job, index) => (
      <div className="job-card" key={index}>
        <div style={{display:"flex",marginTop:"15px"}}>
            <h3 className='title'>TITLE: </h3>
            <h3>{job.jobID.title}</h3>
        </div>
        <div style={{display:"flex",marginTop:"-30px"}}>
            <h3 className='desc'>DESCRIPTION: </h3>
            <h3>{job.jobID.description}</h3>
        </div>
        <div style={{display:"flex",marginTop:"-30px"}}>
            <h3 className='location'>LOCATION:</h3>
            <h3>{job.jobID.location}</h3>
        </div>
        <div style={{display:"flex",marginTop:"-30px"}}>
            <h3 className='salary'>SALARY: </h3>
            <h3>{job.jobID.salary}</h3>
        </div>
        <div style={{display:"flex",marginTop:"-30px"}}>
            <h3 className='salary'>SKILLS: </h3>
            <h3>{job.jobID.skills}</h3>
        </div>
          <button style={{marginLeft:"35px",fontSize:"16px",color:"white"}} onClick={Navigation}>VISIT</button>
          <button style={{fontSize:"16px",backgroundColor:"red",color:"white"}} onClick={()=>{deleteAppliedJob(job._id)}}>DELETE</button>
      </div>
    
    ))}
    
     </div>
    </>
  )
}

export default AppliedJobs