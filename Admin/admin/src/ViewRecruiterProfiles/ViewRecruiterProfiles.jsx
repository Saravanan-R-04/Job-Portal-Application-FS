import React from 'react'
import  { useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './ViewRecruiterProfiles.css'
import axios from 'axios'
const ViewRecruiterProfiles = () => {
   const [recruiterProfiles,setRecruiterProfiles]=useState([]);
   const url="http://localhost:5000/admin/recruiter-profiles"
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
    const fetchRecruiters = async () => {
  try {
    const response = await axios.get(url);
    if (response.data.success) {
      alert("Recruiter Profiles Fetched Successfully");
      setRecruiterProfiles(response.data.allRecruiterProfiles);
      console.log(response.data.allRecruiterProfiles);
    } else {
      alert("Error In Fetching Recruiter");
    }
  } catch (error) {
    alert(error.message);
  }
};
    useEffect(()=>{
      fetchRecruiters();
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
        <button style={{backgroundColor:"blue",color:"white",width:"240px",height:"45px",fontSize:"15px",border:"none"}}
        onClick={CandidateProfiles}>
            <h3  style={{marginTop:"10px"}}>CANDIDATE PROFILES</h3>
        </button>
         <br />
        <br />
        <br />
        <button style={{backgroundColor:"black",color:"white",width:"240px",height:"45px",fontSize:"15px",border:"none"}}
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
    {recruiterProfiles.map((profile, index) => (
      <div className="job-card" key={index} style={{
        borderColor:"black",borderWidth:"2px",borderStyle:"solid",width:"410px",height:"290px",
        marginLeft:"-20px",marginTop:"0px",borderRadius:"10px",backgroundColor:"rgb(255, 255, 255)"
      }}>
        <div style={{display:"flex",marginTop:"10px",marginLeft:"30px"}}>
            <h3 className='title'>NAME: </h3>
            <h3 style={{marginLeft:"80px"}}>{profile.Name}</h3>
        </div>
        <br/>
        <div style={{display:"flex",marginTop:"-30px",marginLeft:"30px"}}>
            <h3 className='salary'>BIO: </h3>
            <h3 style={{marginLeft:"105px"}}>{profile.Bio}</h3>
        </div>
        <br/>
        <div style={{display:"flex",marginTop:"-30px",marginLeft:"30px"}}>
            <h3 className='desc'>COMPANY: </h3>
            <h3 style={{marginLeft:"45px"}}>{profile.CompanyName}</h3>
        </div>
        <br/>
        <div style={{display:"flex",marginTop:"-30px",marginLeft:"30px"}}>
            <h3 className='salary'>DESIGNATION: </h3>
            <h3 style={{marginLeft:"15px"}}>{profile.Designation}</h3>
        </div>
         <br/>
        <div style={{display:"flex",marginTop:"-30px",marginLeft:"30px"}}>
            <h3 className='salary'>LOCATION: </h3>
            <h3 style={{marginLeft:"50px"}}>{profile.Location}</h3>
        </div>
      </div>
    ))}
    </div>
    </div>
  )
}

export default ViewRecruiterProfiles