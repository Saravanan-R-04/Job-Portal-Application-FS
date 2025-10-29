import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'
const PendingJobs = () => {
    const [data,setData]=useState([])
    const token = localStorage.getItem("token")
    const navigate = useNavigate();
    const acceptedJobs = () =>{
        navigate("/details")
    }
    const rejectedJobs = () =>{
        navigate("/rejected-jobs")
    }
    const pendingJobs = () =>{
        navigate("/pending-jobs")
    }
    const viewdetails = () =>{
        navigate("/view-details")
    }
    const getResponse = async() =>{
        const url="http://localhost:5000/candidate/get-pending-jobs"
        try{
      const response  = await axios.get(url,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      });
      console.log(response)
      if(response.data && response.data.appliedJobs)
      {
        alert("Fetched Pending Jobs");
        setData(response.data.appliedJobs)
       
        
      }
      console.log(response.data.appliedJobs);
    }
    catch(error)
    {
      console.log(error.message);
    }
    }
    useEffect(()=>{
        getResponse();
    },[])
  return (
    <>
        <Navbar/>
        <div style={{marginTop:"50px"}}>
         <button style={{backgroundColor:"blue",color:"white",width:"220px",height:"45px",fontSize:"15px",marginLeft:"10px"}}
         onClick={acceptedJobs}>
            ACCEPTED JOBS
        </button>
        <br />
        <br />
        <br />
        <button style={{backgroundColor:"blue",color:"white",width:"220px",height:"45px",fontSize:"15px",marginLeft:"10px"}}
        onClick={rejectedJobs}>
            REJECTED JOBS
        </button>
        <br />
        <br />
        <br />
        <button style={{backgroundColor:"black",color:"white",width:"220px",height:"45px",fontSize:"15px",marginLeft:"10px"}}
        onClick={pendingJobs}>
            PENDING JOBS
        </button>
        <br />
        <br />
        <br />
        <button style={{backgroundColor:"blue",color:"white",width:"220px",height:"45px",fontSize:"15px",marginLeft:"10px"}}
        onClick={viewdetails}>
            VIEW DETAILS
        </button>
        </div>
        <hr style={{width: "3px",height: "1980px",backgroundColor:"black",border: "none",marginLeft:"240px",marginTop:"-400px"}}></hr>
        <div className="jobs-container">
            {data.map((job, index) => (
            <div className="job-card" key={index} style={{marginLeft:"230px",marginTop:"-2000px"}}>
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
                 <button style={{width:"400px",height:"50px",marginLeft:"30px",color:"white",fontSize:"20px"}}>PENDING</button>
            </div>
            ))}
        </div>
    </>
  )
}

export default PendingJobs