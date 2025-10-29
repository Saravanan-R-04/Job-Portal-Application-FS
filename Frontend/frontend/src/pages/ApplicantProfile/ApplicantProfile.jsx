import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate,useParams} from 'react-router-dom';
const Profile = () => {
    const {id}=useParams();
  const url=`http://localhost:5000/recruiter/applicant-profile/${id}`
  const [data,setData]=useState([])
  const navigate = useNavigate();
  const handleData=async()=>{
    try{
      const token=localStorage.getItem("token");
      const response = await axios.get(url,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      if(response.data.success)
      {
        setData(response.data.profileData);
        console.log(response.data.profileData)
      }
      else{
        alert(response.data.message)
      }
    }
    catch(error)
    {
      navigate("/")
    }
  }
  const editNavigation = () =>{
    navigate("/edit-form")
  }
  const navigation = () =>{
    navigate("/r-view")
  }
  useEffect(()=>{
    handleData();
  },[])
  return (
    <>
      
      <h2 className='det' style={{marginTop:"60px"}}>PROFILE DETAILS</h2>
      <div className='profile' style={{height:"650px",width:"600px",marginTop:"-20px"}}>
          <h3 style={{color:"blue"}}>NAME:  <span style={{marginLeft:"100px",color:"black"}}>{data.name}</span></h3>
          <h3 style={{color:"blue"}}>BIO: <span style={{marginLeft:"120px",color:"black"}}>{data.bio}</span></h3>
          <h3 style={{color:"blue"}}>EXPERIENCE:<span style={{marginLeft:"45px",color:"black"}}>{data.experience}</span> </h3>
          <h3 style={{color:"blue"}}>LOCATION: <span style={{marginLeft:"60px",color:"black"}}>{data.location}</span></h3>
          <h3 style={{color:"blue"}}>EDUCATION: <span style={{marginLeft:"50px",color:"black"}}>{data.education}</span></h3>
          <h3 style={{color:"blue"}}>RESUME: <span style={{marginLeft:"85px",color:"black"}}>{data.resume}</span></h3>
          <h3 style={{color:"blue"}}>SKILLS: <span style={{marginLeft:"100px",color:"black"}}>{data.skills}</span></h3>
          <h3 style={{color:"blue"}}>GITHUB: <span style={{marginLeft:"90px",color:"black"}}>{data.github}</span></h3>
          <button style={{fontSize:"15px",color:"white",marginLeft:"100px"}} onClick={navigation}>BACK</button>
          <button style={{fontSize:"15px",color:"white"}} onClick={editNavigation}>UPDATE</button>
      </div>
    </>
  )
}

export default Profile