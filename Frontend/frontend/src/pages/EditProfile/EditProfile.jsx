import React, { useState, useEffect } from 'react';
import './EditProfile.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const EditProfile = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const getUrl = "http://localhost:5000/candidate/get-profile";

  const [profiledata, setProfileData] = useState({});
  const [data, setData] = useState({
    name: "",
    bio: "",
    experience: "",
    location: "",
    education: "",
    resume: "",
    skills: "",
    github: ""
  });

  const getProfile = async () => {
    try {
      const response = await axios.get(getUrl, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.data.success) {
        setProfileData(response.data.profileDetails);
        console.log(response.data.profileDetails)
        alert("Profile Data Fetched");
      }
    } catch (error) {
      alert("Error fetching profile");
    }
  };

  useEffect(() => {
    getProfile();
  },[]);

  useEffect(() => {
    if (profiledata && Object.keys(profiledata).length > 0) {
      setData({
        name: profiledata.name || "",
        bio: profiledata.bio || "",
        experience: profiledata.experience || "",
        location: profiledata.location || "",
        education: profiledata.education || "",
        resume: profiledata.resume || "",
        skills: profiledata.skills || "",
        github: profiledata.github || ""
      });
    }
  }, [profiledata]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (id) => {
    
    const updateUrl = `http://localhost:5000/candidate/update-profile/${id}`;
    try {
      const response = await axios.put(updateUrl, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.data.success) {
        alert("Profile Updated Successfully");
        navigate("/profile");
      } else {
        alert("Error Updating Profile");
      }
    } catch (error) {
      alert("Update Failed");
    }
  };

  return (
    <>
      <h2 style={{ marginLeft: "370px", marginTop: "120px", letterSpacing: "2px" }}>
        UPDATE YOUR PROFILE
      </h2>
      <form className='profile-form' style={{ display: "flex",width:"1000px",marginLeft:"370px",height:"500px"}} onSubmit={(e) => {
        e.preventDefault(); 
        handleSubmit(profiledata._id); 
  }}>
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
};

export default EditProfile;
