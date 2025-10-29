import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
const VDetails = () => {
    const[bookmarkcount,setBookmarkcount]=useState(0);
    const[appliedjobcount,setAppliedjobcount]=useState(0);
    const[acount,setAcount]=useState(0);
    const[pcount,setPcount]=useState(0);
    const[rcount,setRcount]=useState(0);
   const navigate=useNavigate();
   const token = localStorage.getItem("token")
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
    const getBookMarksCount = async() =>{
        const url="http://localhost:5000/candidate/view-bookmark";
        try{
            const response = await axios.get(url,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            if(response.data.success)
            {
                setBookmarkcount(response.data.allBookMarks.length)
            }
        }
        catch(error)
        {
            alert(error.message);
        }
    }
     const getAppliedJobsCount = async() =>{
        const url="http://localhost:5000/candidate/get-applied-jobs";
        try{
            const response = await axios.get(url,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            if(response.data.success)
            {
                setAppliedjobcount(response.data.appliedJobs.length)
            }
        }
        catch(error)
        {
            alert(error.message);
        }
    }
    const getAcceptedJobsCount = async() =>{
        const url="http://localhost:5000/candidate/get-accepted-jobs";
        try{
            const response = await axios.get(url,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            if(response.data.success)
            {
                setAcount(response.data.appliedJobs.length)
            }
        }
        catch(error)
        {
            alert(error.message);
        }
    }
    const getRejectedJobsCount = async() =>{
        const url="http://localhost:5000/candidate/get-rejected-jobs";
        try{
            const response = await axios.get(url,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            if(response.data.success)
            {
                setRcount(response.data.appliedJobs.length)
            }
        }
        catch(error)
        {
            alert(error.message);
        }
    }
    const getPendingJobsCount = async() =>{
        const url="http://localhost:5000/candidate/get-pending-jobs";
        try{
            const response = await axios.get(url,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            if(response.data.success)
            {
                setPcount(response.data.appliedJobs.length)
            }
        }
        catch(error)
        {
            alert(error.message);
        }
    }
    useEffect(()=>{
        getBookMarksCount();
        getAppliedJobsCount();
        getAcceptedJobsCount();
        getRejectedJobsCount();
        getPendingJobsCount();

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
        <button style={{backgroundColor:"blue",color:"white",width:"220px",height:"45px",fontSize:"15px",marginLeft:"10px"}}
        onClick={pendingJobs}>
            PENDING JOBS
        </button>
        <br />
        <br />
        <br />
        <button style={{backgroundColor:"black",color:"white",width:"220px",height:"45px",fontSize:"15px",marginLeft:"10px"}}
        onClick={viewdetails}>
            VIEW DETAILS
        </button>
        </div>
        <hr style={{width: "3px",height: "1980px",backgroundColor:"black",border: "none",marginLeft:"240px",marginTop:"-400px"}}></hr>
    <div style={{display:"flex"}}>
      <div style={{width:"230px",height:"130px",borderStyle:"solid",borderWidth:"3px",borderColor:"black",marginLeft:"350px",marginTop:"-2000px",borderRadius:"10px"}}>
        <h3 style={{marginLeft:"45px"}}>PENDING JOBS</h3>
        <h1 style={{marginLeft:"100px",color:"blue",marginTop:"-15px"}}>{pcount}</h1>
      </div>
      <div style={{width:"230px",height:"130px",borderStyle:"solid",borderWidth:"3px",borderColor:"black",marginLeft:"80px",marginTop:"-2000px",borderRadius:"10px"}}>
        <h3 style={{marginLeft:"45px"}}>REJECTED JOBS</h3>
        <h1 style={{marginLeft:"100px",color:"blue",marginTop:"-15px"}}>{rcount}</h1>
      </div>
      <div style={{width:"230px",height:"130px",borderStyle:"solid",borderWidth:"3px",borderColor:"black",marginLeft:"80px",marginTop:"-2000px",borderRadius:"10px"}}>
        <h3 style={{marginLeft:"45px"}}>ACCEPTED JOBS</h3>
        <h1 style={{marginLeft:"100px",color:"blue",marginTop:"-15px"}}>{acount}</h1>
      </div>
   </div>
   <div style={{display:"flex",marginTop:"200px",marginLeft:"150px"}}>
    <div style={{width:"230px",height:"130px",borderStyle:"solid",borderWidth:"3px",borderColor:"black",marginLeft:"350px",marginTop:"-2000px",borderRadius:"10px"}}>
        <h3 style={{marginLeft:"35px"}}>BOOKMARK JOBS</h3>
        <h1 style={{marginLeft:"100px",color:"blue",marginTop:"-15px"}}>{bookmarkcount}</h1>
      </div>
      <div style={{width:"230px",height:"130px",borderStyle:"solid",borderWidth:"3px",borderColor:"black",marginLeft:"80px",marginTop:"-2000px",borderRadius:"10px"}}>
        <h3 style={{marginLeft:"45px"}}>APPLIED JOBS</h3>
        <h1 style={{marginLeft:"100px",color:"blue",marginTop:"-15px"}}>{appliedjobcount}</h1>
      </div>

   </div>
    </>
  )
}

export default VDetails