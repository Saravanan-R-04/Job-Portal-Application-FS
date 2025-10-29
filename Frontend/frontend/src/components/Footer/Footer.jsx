import './Footer.css'
import React from 'react'

const Footer = () => {
  return (
    <>
    <br />
    <br/>
    <br />
    <br />
    <br />
    <div className='footer'>
        <div className='div-1'>
            <div className='name'>
                <h2 style={{letterSpacing:"1.5px"}}>JOBCIRCLE</h2>
                <h3 className='h3-1'>Most Complete Job Portal</h3>
                <h3 className='h3-2'>SignUp and start finding your job</h3>
            </div>
        </div>
        <div className='div-2'>
            <div className='Services'>
                <h3>Services</h3>
                <ul>
                    <li>Browser Jobs</li>
                    <li>Companies</li>
                    <li>Candidate Dashboard</li>
                    <li>Profile</li>
                </ul>
            </div>
            <div className='Support'> 
                <h3>Support</h3>
                <ul>
                    <li>Terms of use</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy</li>
                    <li>Cookie Policy</li>
                </ul>
            </div>
            <div className='Newsletter'>
                <h3 className='n'>Newsletter</h3>
                <ul>
                    <input type="text" className='nl' placeholder='Enter Your Email here'/>
                    <br />
                    <button className='nl-btn'>Subscribe</button>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer