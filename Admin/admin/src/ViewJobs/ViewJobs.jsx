import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import './ViewJobs.css'
import { useNavigate } from 'react-router-dom'
const FindJobs = () => {
  const navigate = useNavigate();
  const [jobs,setJobs]=useState([]);
  const url="http://localhost:5000/admin/all-jobs"
  
      const HOME = () =>{
          navigate("/");
      }
      const Candidates = () =>{
          navigate("/ViewCandidates");
      }
      const Recruiters = () =>{
          navigate("/ViewRecruiters");
      }
      const Jobs = () =>{
          navigate("/ViewJobs");
      }
      const CandidateProfiles = () =>{
        navigate("/ViewCandidateProfiles")
    }
    const RecruiterProfiles = () =>{
        navigate("/ViewRecruiterProfiles")
    }
    const ViewDetails = () =>{
        navigate("/ViewDetails")
    }
  const getResponse = async() =>{
    try{
    
     const response = await axios.get(url, {
    });
   
      if(response.data.success)
      {
        setJobs(response.data.allJobs);
        alert("Jobs Fetched Successfully")
      }
      else
      {
        alert("Error In Fetching");
      }
    }
    catch(error)
    {
      navigate('/')
      
    }
  }
  const deleteJob = async(id) =>{
    const url = `http://localhost:5000/admin/delete-job/${id}`;
    try{
      const response = await axios.delete(url);
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
      <div style={{marginTop:"50px"}}>
        
        <button style={{backgroundColor:"blue",color:"white",width:"240px",height:"45px",fontSize:"15px",border:"none"}}
        onClick={HOME}>
            <h3 style={{marginTop:"10px"}}>HOME</h3>
        </button>
        <br />
        <br />
        <br />
        <button style={{backgroundColor:"blue",color:"white",width:"240px",height:"45px",fontSize:"15px",border:"none"}}
        onClick={Candidates}>
            <h3 style={{marginTop:"10px"}}>VIEW CANDIDATES</h3>
        </button>
        <br />
        <br />
        <br />
        <button style={{backgroundColor:"blue",color:"white",width:"240px",height:"45px",fontSize:"15px",border:"none"}}
        onClick={Recruiters}>
            <h3  style={{marginTop:"10px"}}>VIEW RECRUITERS</h3>
        </button>
        <br />
        <br />
        <br />
        <button style={{backgroundColor:"black",color:"white",width:"240px",height:"45px",fontSize:"15px",border:"none"}}
        onClick={Jobs}>
            <h3  style={{marginTop:"10px"}}>VIEW JOBS</h3>
        </button>
         <br />
        <br />
        <br />
        <button style={{backgroundColor:"blue",color:"white",width:"240px",height:"45px",fontSize:"15px",border:"none"}}
        onClick={CandidateProfiles}>
            <h3  style={{marginTop:"10px"}}>CANDIDATE PROFILES</h3>
        </button>
         <br />
        <br />
        <br />
        <button style={{backgroundColor:"blue",color:"white",width:"240px",height:"45px",fontSize:"15px",border:"none"}}
        onClick={RecruiterProfiles}>
            <h3  style={{marginTop:"10px"}}>RECRUITER PROFILES</h3>
        </button>
         <br />
        <br />
        <br />
        <button style={{backgroundColor:"blue",color:"white",width:"240px",height:"45px",fontSize:"15px",border:"none"}}
        onClick={ViewDetails}>
            <h3  style={{marginTop:"10px"}}>VIEW DETAILS</h3>
        </button>
    </div>
   <hr style={{width: "3px",height: "860px",backgroundColor:"black",border: "none",marginLeft:"240px",marginTop:"-610px"}}></hr>
  <div className="jobs-container">
    {jobs.map((job, index) => (
      <div className="job-card" key={index}>
        <div style={{display:"flex",marginTop:"0px",marginLeft:"30px"}}>
            <h3 className='title'>COMPANY: </h3>
            <h3 style={{marginLeft:"10px"}}>{job.company}</h3>
        </div>
        <div style={{display:"flex",marginTop:"0px",marginLeft:"30px"}}>
            <h3 className='title'>TITLE: </h3>
            <h3 style={{marginLeft:"10px"}}>{job.title}</h3>
        </div>
        <br />
        <br />
        <div style={{display:"flex",marginTop:"-40px",marginLeft:"30px"}}>
            <h3 className='desc'>DESCRIPTION: </h3>
            <h3 style={{marginLeft:"10px"}}>{job.description}</h3>
        </div>
        <br />
        <br />
        <div style={{display:"flex",marginTop:"-40px",marginLeft:"30px"}}>
            <h3 className='location'>LOCATION:</h3>
            <h3 style={{marginLeft:"10px"}}>{job.location}</h3>
        </div>
        <br/>
        <br />
        <div style={{display:"flex",marginTop:"-40px",marginLeft:"30px"}}>
            <h3 className='salary'>SALARY: </h3>
            <h3 style={{marginLeft:"10px"}}>{job.salary}</h3>
        </div>
        <br />
        <br />
        <div style={{display:"flex",marginTop:"-40px",marginLeft:"30px"}}>
            <h3 className='salary'>SKILLS: </h3>
            <h3 style={{marginLeft:"10px"}}>{job.skills}</h3>
        </div>
         <button style={{backgroundColor:"red",color:"white",width:"110px",height:"35px",marginLeft:"140px",fontSize:"17px",marginTop:"15px"}}
         onClick={()=>{deleteJob(job._id)}}>DELETE</button>
      </div>
    ))}
  </div>
</>
  )
}

export default FindJobs