import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useState,useEffect } from 'react'
import axios from 'axios'
import './FindJobs.css'
import { useNavigate } from 'react-router-dom'

const FindJobs = () => {
  const navigate = useNavigate();
  const [jobs,setJobs]=useState([]);
  const url="http://localhost:5000/candidate/all-jobs"
  const url2="http://localhost:5000/candidate/apply-job"
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
        alert("Fetched Find Jobs")
        setJobs(response.data.allJobs);
        console.log(response.data.allJobs);
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
  const handleApply = async(id) =>{
    try{
        const response = await axios.post(url2,{jobID:id},{
          headers:{
            Authorization:`Bearer ${token}`
          }
        })
    
        if(response.data.success)
        {
          
          alert("Job Applied Successfully");
        }
      } 
      catch(error)
      {
        alert("Already Applied")
      }
    }
    const handleBookmark = async(id) =>{
      const url3=`http://localhost:5000/candidate/add-bookmark/${id}`;
      try{
          const response = await axios.post(url3,{},{
            headers:{
              Authorization:`Bearer ${token}`
            }})
          if(response.data.success)
          {
            alert("Added To Bookmarks");
          }
          
      }
      catch(error)
      {
        alert("Already Added")
      }
    }
    useEffect(()=>{
      getResponse();
    },[])
  return (
    <>
  <Navbar />
  <h2 style={{marginLeft:"50px"}}>AVAILABLE JOBS</h2>
   <div className="jobs-container">
     {jobs.map((job, index) => (
      <div className="job-card" key={index}>
        <div style={{display:"flex",marginTop:"10px"}}>
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
        <div style={{display:"flex",marginLeft:"-100px"}}>
          <button className='apply' onClick={() => handleApply(job._id)} 
          >
          Apply
          </button>
          <button className='bookmark' onClick={() => handleBookmark(job._id)}>Bookmark</button>
        </div>
      </div>
    ))}
  </div> 
</>
  )
}

export default FindJobs