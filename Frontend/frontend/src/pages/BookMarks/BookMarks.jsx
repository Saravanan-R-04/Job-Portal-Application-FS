import React from 'react'
import './BookMarks.css'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const BookMarks = () => {
    const navigate=useNavigate();
    const [bookmarks,setBookMarks] = useState([]);
    const url="http://localhost:5000/candidate/view-bookmark";
    const token=localStorage.getItem("token")
    const getResponse =async () =>{
        try{
            const response = await axios.get(url,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            if(response.data.success)
            {
                alert("Bookmark Fetched Successfully");
                setBookMarks(response.data.allBookMarks);
                console.log(response.data.allBookMarks)
            }
        }
        catch(error)
        {
            alert(error.message)
        }
    }
    const handleVisit = () =>{
        navigate("/find-jobs")
    }
    const handleDelete = async(id) =>{
        const url2=`http://localhost:5000/candidate/delete-bookmark/${id}`;
        try{
            const response = await axios.delete(url2,{
            headers:{
            Authorization:`Bearer ${token}`
            } });
            if(response.data.success)
            {
                alert("Bookmark Deleted");
            }
        }
        catch(error){
            alert(error.message);
        }
    }
    useEffect(()=>{
        getResponse();
    },[])
    return (
    <>
    <Navbar/>
    <h2 style={{marginLeft:"50px"}}>BOOKMARKS</h2>
  <div className="jobs-container">
    {bookmarks.map((bookmark, index) => (
      <div className="job-card" key={index}>
        <div style={{display:"flex",marginTop:"15px"}}>
            <h3 className='title'>TITLE: </h3>
            <h3>{bookmark.jobId.title}</h3>
        </div>
        <div style={{display:"flex",marginTop:"-30px"}}>
            <h3 className='desc'>DESCRIPTION: </h3>
            <h3>{bookmark.jobId.description}</h3>
        </div>
        <div style={{display:"flex",marginTop:"-30px"}}>
            <h3 className='location'>LOCATION:</h3>
            <h3>{bookmark.jobId.location}</h3>
        </div>
        <div style={{display:"flex",marginTop:"-30px"}}>
            <h3 className='salary'>SALARY: </h3>
            <h3>{bookmark.jobId.salary}</h3>
        </div>
         <div style={{display:"flex",marginTop:"-30px"}}>
            <h3 className='salary'>SKILLS: </h3>
            <h3>{bookmark.jobId.skills}</h3>
        </div>
        <div style={{display:"flex",marginLeft:"-100px"}}>
          <button className='apply' onClick={()=>handleVisit()}
          >
          VISIT
          </button>
          <button className='bookmark' onClick={()=>handleDelete(bookmark._id)}>DELETE</button>
        </div>
      </div>
    ))}
  </div>
    </>
  )
}

export default BookMarks