import React, { useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './ViewCandidates.css'
import axios from 'axios'
const ViewCandidates = () => {
   const [candidates,setCandidate]=useState([]);
   const url="http://localhost:5000/admin/all-candidates"
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
      alert("Candidates Fetched Successfully");
      setCandidate(response.data.allCandidates);
      console.log(response.data.allCandidates);
    } else {
      alert("Error In Fetching Candidates");
    }
  } catch (error) {
    console.error("Error occurred while fetching candidates:", error);
    alert("An unexpected error occurred. Please try again later.");
  }
};
    const deleteCandidate = async(id) =>{
      const url=`http://localhost:5000/admin/delete-candidate/:${id}`;
      try{
        const response = await axios.delete(url);
        if(response.data.success)
        {
          alert("Candidate Deleted Successfully");
        }
      }
      catch(error)
      {
        alert(error.message);
      }
    }
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
        <button style={{backgroundColor:"black",color:"white",width:"240px",height:"45px",fontSize:"15px",border:"none"}}
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
     <hr style={{width: "3px",height: "860px",backgroundColor:"black",border: "none",marginLeft:"240px",marginTop:"-610px"}}></hr>
     <div className="jobs-container">
    {candidates.map((candidate, index) => (
      <div className="job-card" key={index} style={{
        borderColor:"black",borderWidth:"2px",borderStyle:"solid",width:"410px",height:"270px",
        marginLeft:"-20px",marginTop:"0px",borderRadius:"10px",backgroundColor:"rgb(255, 255, 255)"
      }}>
        <div style={{display:"flex",marginTop:"25px",marginLeft:"30px"}}>
            <h3 className='title'>NAME: </h3>
            <h3 style={{marginLeft:"20px"}}>{candidate.name.toUpperCase()}</h3>
        </div>
        <br/>
        <div style={{display:"flex",marginTop:"-30px",marginLeft:"30px"}}>
            <h3 className='desc'>EMAIL: </h3>
            <h3 style={{marginLeft:"20px"}}>{candidate.email.toUpperCase()}</h3>
        </div>
        <br/>
        <div style={{display:"flex",marginTop:"-30px",marginLeft:"30px"}}>
            <h3 className='salary'>ROLE: </h3>
            <h3 style={{marginLeft:"30px"}}>{candidate.role.toUpperCase()}</h3>
        </div>
        <button style={{backgroundColor:"red",color:"white",width:"110px",height:"35px",marginLeft:"140px",fontSize:"17px",marginTop:"15px"}}
        onClick={()=>deleteCandidate(candidate._id)}>DELETE</button>
      </div>
    ))}
  </div>
    </div>
  )
}

export default ViewCandidates