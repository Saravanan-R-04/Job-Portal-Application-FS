import React, { useState} from 'react'
import './RProfileForm.css'
import {useNavigate} from "react-router-dom"
import axios from 'axios'
const RProfileForm = () => {
  const url="http://localhost:5000/recruiter/create-profile"
  const navigate = useNavigate();
  const [data,setData]=useState({
    Name:"",
    Bio:"",
    CompanyName:"",
    Designation:"",
    Location:""
   
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
        navigate("/r")
      }
      else
      {
        alert("Error In Creating Profile");
      }
    }
    catch(error)
    {
      alert("Profile Already Created");
      navigate("/r")
    }
  }
  return (
    <>
      <h2 style={{marginLeft:"470px",marginTop:"120px",letterSpacing:"2px"}}>COMPLETE YOUR PROFILE</h2>
      <form className='profile-form' style={{display:"flex"}} onSubmit={handleSubmit} > 
        <div>
            <div style={{display:"flex"}}>
              <div>
                <h3 className='h3'>NAME:</h3>
              </div>
              <div>
                <input type="text" style={{width:"250px",height:"35px",marginLeft:"120px"}} 
                name="Name" value={data.Name} onChange={handleChange}/>
              </div>
            </div>
            <div style={{display:"flex"}}>
              <div>
                <h3 className='h3'>BIO:</h3>
              </div>
              <div>
                <input type="text" style={{width:"250px",height:"35px",marginLeft:"145px"}}
                name="Bio" value={data.Bio} onChange={handleChange}/>
              </div>
            </div>
            <div style={{display:"flex"}}>
              <div>
                <h3 className='h3'>COMPANY NAME:</h3>
              </div>
              <div>
                <input type="text" style={{width:"250px",height:"35px",marginLeft:"30px"}}
                name="CompanyName" value={data.CompanyName} onChange={handleChange}/>
              </div>
            </div>  
            <div style={{display:"flex"}}>
              <div>
                <h3 className='h3'>DESIGNATION:</h3>
              </div>
              <div>
                <input type="text" style={{width:"250px",height:"35px",marginLeft:"55px"}}
                name="Designation" value={data.Designation} onChange={handleChange}/>
              </div>
            </div>
             <div style={{display:"flex"}}>
            <div>
              <h3 className='h3'>LOCATION:</h3>
            </div>
            <div>
              <input type="text" style={{width:"250px",height:"35px",marginLeft:"90px"}}
              name="Location" value={data.Location} onChange={handleChange}/>
            </div>
          </div>
           <button type="submit" style={{color:"white"}} className='btn'>SUBMIT</button>
        </div>
      </form>
    </>
  )
}
export default RProfileForm