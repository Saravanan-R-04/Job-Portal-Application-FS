import React from 'react'
import './Home.css'
import AdminImg from '../assets/admin.jpg'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate=useNavigate();
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
  return (
    <>
    <center><h1 style={{marginLeft:"90px"}}>ADMIN DASHBOARD</h1></center>
    <img src={AdminImg} style={{marginLeft:"500px",marginTop:"30px",width:"800px",height:"500px"}}/>
    <div style={{marginTop:"-550px"}}>
         <button style={{backgroundColor:"black",color:"white",width:"240px",height:"45px",fontSize:"15px"}}
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
        <button style={{backgroundColor:"blue",color:"white",width:"240px",height:"45px",fontSize:"15px",border:"none"}}
        onClick={ViewDetails}>
            <h3  style={{marginTop:"10px"}}>VIEW DETAILS</h3>
        </button>
    </div>
    <hr style={{width: "3px",height: "1980px",backgroundColor:"black",border: "none",marginLeft:"240px",marginTop:"-600px"}}></hr>
    </>
    
  )
}

export default Home