import React from 'react'
import { useEffect,useState} from 'react'
import axios from 'axios'
import RNavbar from '../../components/RNavbar/RNavbar'
import { useNavigate } from 'react-router-dom'
const RView = () => {
  const navigate = useNavigate();
  const [data,setData]=useState([]);
  const url = "http://localhost:5000/recruiter/job-applicants";
  const token = localStorage.getItem("token")
  const [profile,setProfile]=useState([]);
  const getResponse = async() =>{
    try{
      const response = await axios.get(url,{headers:{
        Authorization:`Bearer ${token}`
      }})
      if(response.data.success)
      {
        setData(response.data.data);
        console.log(response.data.data);
        alert("Fetched Successfully");
      }
      
    }
    catch(error)
    {
      alert(error.message);
    }
  }
  const viewProfile = async(id) =>{
    navigate(`/applicant-profile/${id}`)
  }  
  const  reject = async(id) =>{
    const url=`http://localhost:5000/recruiter/reject-job/${id}`
    try{
      const response = await axios.put(url,null,{headers:{
        Authorization:`Bearer ${token}`
      }})
      if(response.data.success)
      {
        alert("Job Rejected Successfully");
      }
    }
    catch(error)
    {
      console.log(error.message);
    }
  }      
  const accept = async(id) =>{
    const url=`http://localhost:5000/recruiter/accept-job/${id}`
    try{
      const response = await axios.put(url,null,{headers:{
        Authorization:`Bearer ${token}`
      }})
      if(response.data.success)
      {
        alert("Job Accepted Successfully");
      }
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
  <div>
    <RNavbar/>
    <h2 style={{marginLeft:"50px"}}>JOB APPLICANTS</h2>
    {data.length === 0 ? (
      <p>No applications found.</p>
    ) : (
      <ul>
        {data.map((app, index) => (
          <div key={index} style={{borderStyle:"solid",borderColor:"black",borderWidth:"2px",borderRadius:"10px",width:"500px",height:"500px"}}>
            <div style={{display:"flex",marginTop:"-10px"}}>
              <h3 style={{color:"blue"}}>NAME:</h3>
              <h3 style={{marginLeft:"60px"}}>{app.applicantId.name}</h3>
            </div>
             <div style={{display:"flex",marginTop:"-30px"}}>
              <h3 style={{color:"blue"}}>EMAIL:</h3>
              <h3 style={{marginLeft:"60px"}}>{app.applicantId.email}</h3>
            </div>
            <div style={{display:"flex",marginTop:"-30px"}}>
              <h3 style={{color:"blue"}}>COMPANY:</h3>
              <h3 style={{marginLeft:"25px"}}>{app.jobID.company}</h3>
            </div>
            <div style={{display:"flex",marginTop:"-30px"}}>
              <h3 style={{color:"blue"}}>TITLE:</h3>
              <h3 style={{marginLeft:"70px"}}>{app.jobID.title}</h3>
            </div>
            <div style={{display:"flex",marginTop:"-30px"}}>
              <h3 style={{color:"blue"}}>SALARY:</h3>
              <h3 style={{marginLeft:"48px"}}>{app.jobID.salary}</h3>
            </div>
             <div style={{display:"flex",marginTop:"-30px"}}>
              <h3 style={{color:"blue"}}>LOCATION:</h3>
              <h3 style={{marginLeft:"28px"}}>{app.jobID.location}</h3>
            </div>
            <div style={{display:"flex",marginTop:"-30px"}}>
              <h3 style={{color:"blue"}}>STATUS:</h3>
              <h3 style={{marginLeft:"55px"}}>{app.status}</h3>
            </div>
            <button onClick={()=>{viewProfile(app.applicantId._id)}} style={{marginLeft:"30px",color:"white"}}>VIEW</button>
            <button onClick={()=>{reject(app._id)}} style={{marginLeft:"30px",backgroundColor:"red",color:"white"}}>REJECT</button>
            <button onClick={()=>{accept(app._id)}} style={{marginLeft:"30px",backgroundColor:"green",color:"white"}}>ACCEPT</button>
          </div>
        ))}
      </ul>
    )}
  </div>
);

}

export default RView