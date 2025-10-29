import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import './ViewDetails.css'
import { useNavigate } from 'react-router-dom'
const ViewDetails = () => {
  const navigate = useNavigate();
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
    const [candidateCount,setCandidateCount]=useState(0);
    const [recruiterCount,setRecruiterCount]=useState(0);
    const [jobCount,setJobCount]=useState(0);
    const [jobAppliedCount,setJobAppliedCount]=useState(0);
    const [pendingCount,setPendingCount]=useState(0);
    const [rejectedCount,setRejectedCount]=useState(0);
    const [acceptedCount,setAcceptedCount]=useState(0);
    const getCandidatesCount = async() =>
    {
      const url1="http://localhost:5000/admin/all-candidates";
      try{
        const response = await axios.get(url1)
        if(response.data.success)
        {
          setCandidateCount(response.data.allCandidates.length);
        }
      }
      catch(error)
      {
        alert(error.message);
      }

    }
    const getRecruitersCount = async() =>
    {
      const url1="http://localhost:5000/admin/all-recruiters";
      try{
        const response = await axios.get(url1)
        if(response.data.success)
        {
          setRecruiterCount(response.data.allRecruiters.length);
        }
      }
      catch(error)
      {
        alert(error.message);
      }

    }
    const getJobsPostedCount = async() =>
    {
      const url1="http://localhost:5000/admin/all-jobs";
      try{
        const response = await axios.get(url1)
        if(response.data.success)
        {
          setJobCount(response.data.allJobs.length);
        }
      }
      catch(error)
      {
        alert(error.message);
      }

    }
    const getJobsAppliedCount = async() =>
    {
      const url1="http://localhost:5000/admin/applied-jobs-count";
      try{
        const response = await axios.get(url1)
        if(response.data.success)
        {
          setJobAppliedCount(response.data.allJobs.length);
        }
      }
      catch(error)
      {
        alert(error.message);
      }

    }
    const getPendingCount = async() =>
    {
      const url1="http://localhost:5000/admin/pending-count";
      try{
        const response = await axios.get(url1)
        if(response.data.success)
        {
          console.log("Executed");
          setPendingCount(response.data.pendingJobs.length);
        }
      }
      catch(error)
      {
        alert(error.message);
      }

    }
    const getRejectedCount = async() =>
    {
      const url1="http://localhost:5000/admin/rejected-count";
      try{
        const response = await axios.get(url1)
        if(response.data.success)
        {
           console.log("Executed");
          setRejectedCount(response.data.rejectedJobs.length);
        }
      }
      catch(error)
      {
        alert(error.message);
      }

    }
    const getAcceptedCount = async() =>
    {
      const url1="http://localhost:5000/admin/accepted-count";
      try{
        const response = await axios.get(url1)
        if(response.data.success)
        {
           console.log("Executed");
          setAcceptedCount(response.data.acceptedJobs.length);
        }
      }
      catch(error)
      {
        alert(error.message);
      }

    }

  useEffect(()=>{
    getCandidatesCount();
    getRecruitersCount();
    getJobsPostedCount();
    getJobsAppliedCount();
    getPendingCount();
    getRejectedCount();
    getAcceptedCount();
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
        <button style={{backgroundColor:"blue",color:"white",width:"240px",height:"45px",fontSize:"15px",border:"none"}}
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
        <button style={{backgroundColor:"black",color:"white",width:"240px",height:"45px",fontSize:"15px",border:"none"}}
        onClick={ViewDetails}>
            <h3  style={{marginTop:"10px"}}>VIEW DETAILS</h3>
        </button>
    </div>
   <hr style={{width: "3px",height: "860px",backgroundColor:"black",border: "none",marginLeft:"240px",marginTop:"-610px"}}></hr>
   <div style={{display:"flex"}}>
      <div style={{width:"230px",height:"130px",borderStyle:"solid",borderWidth:"3px",borderColor:"black",marginLeft:"350px",marginTop:"-730px",borderRadius:"10px"}}>
        <h3 style={{marginLeft:"25px"}}>NO OF CANDIDATES</h3>
        <h2 style={{marginLeft:"100px",color:"blue"}}>{candidateCount}</h2>
      </div>
      <div style={{width:"230px",height:"130px",borderStyle:"solid",borderWidth:"3px",borderColor:"black",marginLeft:"80px",marginTop:"-730px",borderRadius:"10px"}}>
        <h3 style={{marginLeft:"25px"}}>NO OF RECRUITERS</h3>
        <h2 style={{marginLeft:"100px",color:"blue"}}>{recruiterCount}</h2>
      </div>
      <div style={{width:"230px",height:"130px",borderStyle:"solid",borderWidth:"3px",borderColor:"black",marginLeft:"80px",marginTop:"-730px",borderRadius:"10px"}}>
        <h3 style={{marginLeft:"25px"}}>NO OF JOBS POSTED</h3>
        <h2 style={{marginLeft:"100px",color:"blue"}}>{jobCount}</h2>
      </div>
      <div style={{width:"230px",height:"130px",borderStyle:"solid",borderWidth:"3px",borderColor:"black",marginLeft:"80px",marginTop:"-730px",borderRadius:"10px"}}>
        <h3 style={{marginLeft:"25px"}}>NO OF JOBS APPLIED</h3>
        <h2 style={{marginLeft:"100px",color:"blue"}}>{jobAppliedCount}</h2>
      </div>
   </div>
   <div style={{display:"flex",marginTop:"200px",marginLeft:"150px"}}>
      <div style={{width:"230px",height:"130px",borderStyle:"solid",borderWidth:"3px",borderColor:"black",marginLeft:"350px",marginTop:"-730px",borderRadius:"10px"}}>
        <h3 style={{marginLeft:"45px"}}>PENDING JOBS</h3>
        <h2 style={{marginLeft:"100px",color:"blue"}}>{pendingCount}</h2>
      </div>
      <div style={{width:"230px",height:"130px",borderStyle:"solid",borderWidth:"3px",borderColor:"black",marginLeft:"80px",marginTop:"-730px",borderRadius:"10px"}}>
        <h3 style={{marginLeft:"45px"}}>ACCEPTED JOBS</h3>
        <h2 style={{marginLeft:"100px",color:"blue"}}>{acceptedCount}</h2>
      </div>
      <div style={{width:"230px",height:"130px",borderStyle:"solid",borderWidth:"3px",borderColor:"black",marginLeft:"80px",marginTop:"-730px",borderRadius:"10px"}}>
        <h3 style={{marginLeft:"45px"}}>REJECTED JOBS</h3>
        <h2 style={{marginLeft:"100px",color:"blue"}}>{rejectedCount}</h2>
      </div>
   </div>

</>
  )
}

export default ViewDetails