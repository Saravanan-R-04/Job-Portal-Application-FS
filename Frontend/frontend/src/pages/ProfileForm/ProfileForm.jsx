import React, { useState} from 'react'
import './ProfileForm.css'
import {useNavigate} from "react-router-dom"
import axios from 'axios'
const ProfileForm = () => {
  const url="http://localhost:5000/candidate/create-profile"
  const navigate = useNavigate();
  const [data,setData]=useState({
    name:"",
    bio:"",
    experience:"",
    location:"",
    education:"",
    resume:"",
    skills:"",
    github:""
  })
 
  const handleChange = (event) =>{
    console.log("Executing");
    const name=event.target.name;
    const value=event.target.value;
    setData((prev)=>{return{...prev,[name]:value}})
  }
  const handleSubmit = async(event) =>{
    event.preventDefault();
    try{
      const token=localStorage.getItem("token");
      const response=await axios.post(url,data,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      }
      );

      if(response.data.success)
      {
        alert(response.data.message);
        navigate("/")
      }
      else
      {
        alert("Error In Creating Profile");
      }
    }
    catch(error)
    {
      alert("Profile Already Created");
      navigate("/")
    }
  }
 return (
    <>
      <h2 style={{ marginLeft: "370px", marginTop: "120px", letterSpacing: "2px" }}>
        CREATE YOUR PROFILE
      </h2>
      <form className='profile-form' style={{ display: "flex",width:"1000px",marginLeft:"370px",height:"500px"}} onSubmit={handleSubmit}>
        <div>
          <div style={{ display: "flex" }}>
            <h3 className='h3'>NAME:</h3>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              style={{ width: "250px", height: "35px", marginLeft: "80px" }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <h3 className='h3'>BIO:</h3>
            <input
              type="text"
              name="bio"
              value={data.bio}
              onChange={handleChange}
              style={{ width: "250px", height: "35px", marginLeft: "105px" }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <h3 className='h3'>EXPERIENCE:</h3>
            <input
              type="text"
              name="experience"
              value={data.experience}
              onChange={handleChange}
              style={{ width: "250px", height: "35px", marginLeft: "30px" }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <h3 className='h3'>LOCATION:</h3>
            <input
              type="text"
              name="location"
              value={data.location}
              onChange={handleChange}
              style={{ width: "250px", height: "35px", marginLeft: "50px" }}
            />
          </div>
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <h3 className='h3'>EDUCATION:</h3>
            <input
              type="text"
              name="education"
              value={data.education}
              onChange={handleChange}
              style={{ width: "250px", height: "35px", marginLeft: "50px" }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <h3 className='h3'>RESUME(URL):</h3>
            <input
              type="text"
              name="resume"
              value={data.resume}
              onChange={handleChange}
              style={{ width: "250px", height: "35px", marginLeft: "40px" }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <h3 className='h3'>SKILLS:</h3>
            <input
              type="text"
              name="skills"
              value={data.skills}
              onChange={handleChange}
              style={{ width: "250px", height: "35px", marginLeft: "110px" }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <h3 className='h3'>GITHUB(URL):</h3>
            <input
              type="text"
              name="github"
              value={data.github}
              onChange={handleChange}
              style={{ width: "250px", height: "35px", marginLeft: "50px" }}
            />
          </div>
          <button type="submit" className='btn' style={{ color: "white" ,marginLeft:"10px"}}>
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
}
export default ProfileForm