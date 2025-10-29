import React from 'react'
import  { useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './ViewCandidateProfiles.css'
import axios from 'axios'
const ViewCandidateProfiles = () => {
   const [candidateProfiles,setCandidateProfiles]=useState([]);
   const url="http://localhost:5000/admin/candidate-profiles"
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
    const fetchCandidates = async () => {
  try {
    const response = await axios.get(url);
    if (response.data.success) {
      alert("Candidates Profiles Fetched Successfully");
      setCandidateProfiles(response.data.allCandidateProfiles);
      console.log(response.data.allCandidateProfiles);
    } else {
      alert("Error In Fetching Candidates");
    }
  } catch (error) {
    alert(error.message);
  }
};
    useEffect(()=>{
      fetchCandidates();
    },[])
  return (
    <div>
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
        <button style={{backgroundColor:"black",color:"white",width:"240px",height:"45px",fontSize:"15px",border:"none"}}
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
     <div className="jobs-container" style={{marginBottom:"500px"}}>
    {candidateProfiles.map((profile, index) => (
      <div className="job-card" key={index} style={{
        borderColor:"black",borderWidth:"2px",borderStyle:"solid",width:"410px",height:"290px",
        marginLeft:"-20px",marginTop:"0px",borderRadius:"10px",backgroundColor:"rgb(255, 255, 255)"
      }}>
        <div style={{display:"flex",marginTop:"10px",marginLeft:"30px"}}>
            <h3 className='title'>NAME: </h3>
            <h3 style={{marginLeft:"20px"}}>{profile.name}</h3>
        </div>
        <br/>
        <div style={{display:"flex",marginTop:"-30px",marginLeft:"30px"}}>
            <h3 className='salary'>EDUCATION: </h3>
            <h3 style={{marginLeft:"30px"}}>{profile.education}</h3>
        </div>
        <br/>
        <div style={{display:"flex",marginTop:"-30px",marginLeft:"30px"}}>
            <h3 className='desc'>SKILLS: </h3>
            <h3 style={{marginLeft:"20px"}}>{profile.skills}</h3>
        </div>
        <br/>
        <div style={{display:"flex",marginTop:"-30px",marginLeft:"30px"}}>
            <h3 className='salary'>EXPERIENCE: </h3>
            <h3 style={{marginLeft:"30px"}}>{profile.experience}</h3>
        </div>
         <br/>
        <div style={{display:"flex",marginTop:"-30px",marginLeft:"30px"}}>
            <h3 className='salary'>LOCATION: </h3>
            <h3 style={{marginLeft:"30px"}}>{profile.location}</h3>
        </div>
      </div>
    ))}
    </div>
    </div>
  )
}

export default ViewCandidateProfiles