import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './RProfile.css'
import { useNavigate } from 'react-router-dom';
const RProfile = () => {
  const url="http://localhost:5000/recruiter/r-get-profile"
  const [data,setData]=useState({})
  const navigate = useNavigate();
  const handleData = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (response.data.success) {
      setData(response.data.profileDetails);
    }
  } catch (error) {
    console.error("Error fetching recruiter profile:", error);
    navigate("/r");
  }
};

  const editNavigation = () =>{
    navigate("/r-edit-form")
  }
  const navigation = () =>{
    navigate("/r")
  }
  useEffect(()=>{
    handleData();
  },[])
  return (
    <>
      
      <h2 className='det'>PROFILE DETAILS</h2>
      <div className='profile'>
          <h3 style={{color:"blue"}}>NAME:  <span style={{marginLeft:"100px",color:"black"}}>{data.Name}</span></h3>
          <h3 style={{color:"blue"}}>BIO: <span style={{marginLeft:"120px",color:"black"}}>{data.Bio}</span></h3>
          <h3 style={{color:"blue"}}>COMPANY:<span style={{marginLeft:"65px",color:"black"}}>{data.CompanyName}</span> </h3>
          <h3 style={{color:"blue"}}>DESIGNATION: <span style={{marginLeft:"30px",color:"black"}}>{data.Designation}</span></h3>
          <h3 style={{color:"blue"}}>LOCATION: <span style={{marginLeft:"65px",color:"black"}}>{data.Location}</span></h3>
          <button style={{fontSize:"15px",color:"white",marginTop:"60px",marginLeft:"60px"}} onClick={navigation}>BACK</button>
          <button style={{fontSize:"15px",color:"white",marginTop:"60px"}} onClick={editNavigation}>UPDATE</button>
      </div>
    </>
  )
}

export default RProfile