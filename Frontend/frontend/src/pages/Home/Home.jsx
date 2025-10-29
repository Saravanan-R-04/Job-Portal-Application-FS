import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import HomeImg from '../../assets/home.jpg'
import { MdDesignServices } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { CiCloudOn } from "react-icons/ci";
import { MdEngineering } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa6";
import { FaPaintBrush } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import Footer from '../../components/Footer/Footer';
const Home = () => {
  return (
    <>
    <Navbar/>
    <br />
    <div style={{display:'flex'}}>
        <div className='h-1'>
            <h1 className='h1-1'>Got Talent..?</h1>
            <h1 className='h1-2'>Meet Opportunity</h1>
            <p className='p-1'>Great platform for the job seeker that searching for</p>
            <p className='p-2'>new career heights and passionate about startups</p>
        </div>
        <div>
            <img src={HomeImg} className='img-1'/>
        </div>
    </div>
    <div className='categories'>
        <h2 className='h2-1'>AVAILABLE CATEGORIES</h2>
        <div className='category-1'>
                <div className='developer'>
                    <FaCode style={{width:"50px",height:"50px",marginTop:"50px",marginLeft:"110px"}}/>
                    <p style={{marginLeft:"80px"}}>DEVELOPERS</p>
                </div>
                <div className='tester'>
                    <MdDesignServices style={{width:"50px",height:"50px",marginTop:"50px",marginLeft:"110px"}}/>
                     <p style={{marginLeft:"100px"}}>TESTERS</p>
                </div>
                <div className='hr'>
                    <FcBusinessman style={{width:"50px",height:"50px",marginTop:"50px",marginLeft:"110px"}}/>
                    <p>HUMAN RESOURCES</p>
                </div>
                <div className='prompt'>
                    <MdEngineering style={{width:"50px",height:"50px",marginTop:"50px",marginLeft:"110px"}}/>
                    <p>PROMPT ENGINEERS</p>
                </div>
        </div>
        <br />
        <div className='category-2'>
                <div className='ai'>
                    <MdEngineering style={{width:"50px",height:"50px",marginTop:"50px",marginLeft:"110px"}}/>
                    <p style={{marginLeft:"90px"}}>AI ENGINEERS</p>
                </div>      
                <div className='marketing'>
                    <FaBusinessTime style={{width:"50px",height:"50px",marginTop:"50px",marginLeft:"110px"}}/>
                     <p style={{marginLeft:"80px"}}>MARKETING</p>
                </div>
                <div className='designer'>
                    <FaPaintBrush style={{width:"50px",height:"50px",marginTop:"50px",marginLeft:"110px"}}/>
                     <p style={{marginLeft:"90px"}}>DESIGNERS</p>
                </div>
                <div className='cloud'>
                    <CiCloudOn style={{width:"50px",height:"50px",marginTop:"50px",marginLeft:"110px"}}/>
                    <p>CLOUD ENGINEERS</p>
                </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home