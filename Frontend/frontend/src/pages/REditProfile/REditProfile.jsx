import React, { useState, useEffect } from 'react';
import './REditProfile.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const REditProfile = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const getUrl = "http://localhost:5000/recruiter/r-get-profile";

  const [profiledata, setProfileData] = useState({});
  const [data, setData] = useState({
    Name: "",
    Bio: "",
    CompanyName: "",
    Designation: "",
    Location: ""
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
        Name: profiledata.Name || "",
        Bio: profiledata.Bio || "",
        CompanyName: profiledata.CompanyName || "",
        Designation: profiledata.Designation || "",
        Location: profiledata.Location || "",
      });
    }
  }, [profiledata]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (id) => {
    
    const updateUrl = `http://localhost:5000/recruiter/update-profile/${id}`;
    try {
      const response = await axios.put(updateUrl, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.data.success) {
        alert("Profile Updated Successfully");
        navigate("/r-profile");
      } else {
        alert("Error Updating Profile");
      }
    } catch (error) {
      alert("Update Failed");
    }
  };

  return (
    <>
      <h2 style={{ marginLeft: "470px", marginTop: "120px", letterSpacing: "2px" }}>
        UPDATE YOUR PROFILE
      </h2>
      <form className='profile-form' style={{ display: "flex" }} onSubmit={(e) => {
        e.preventDefault(); 
        handleSubmit(profiledata._id); 
  }}>
        <div>
          <div style={{ display: "flex" }}>
            <h3 className='h3'>NAME:</h3>
            <input
              type="text"
              name="Name"
              value={data.Name}
              onChange={handleChange}
              style={{ width: "250px", height: "35px", marginLeft: "120px" }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <h3 className='h3'>BIO:</h3>
            <input
              type="text"
              name="Bio"
              value={data.Bio}
              onChange={handleChange}
              style={{ width: "250px", height: "35px", marginLeft: "145px" }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <h3 className='h3'>COMPANYNAME:</h3>
            <input
              type="text"
              name="CompanyName"
              value={data.CompanyName}
              onChange={handleChange}
              style={{ width: "250px", height: "35px", marginLeft: "30px" }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <h3 className='h3'>DESIGNATION:</h3>
            <input
              type="text"
              name="Designation"
              value={data.Designation}
              onChange={handleChange}
              style={{ width: "250px", height: "35px", marginLeft: "50px" }}
            />
          </div>
            <div style={{ display: "flex" }}>
            <h3 className='h3'>LOCATION:</h3>
            <input
              type="text"
              name="Location"
              value={data.Location}
              onChange={handleChange}
              style={{ width: "250px", height: "35px", marginLeft: "80px" }}
            />
          </div>
          <button type="submit" className='btn' style={{ color: "white" }}>
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
};

export default REditProfile;
