import React from 'react'
import './RNavbar.css';
import {Link, useNavigate} from 'react-router-dom'
import { Navigate } from 'react-router-dom';
const RNavbar = () => {
  const navigate=useNavigate();
  const logout = () =>{
    alert("Logged Out Successfully");
    localStorage.removeItem("token");
    navigate("/r");
  }
  const handleNavigation = () =>{
    const token=localStorage.getItem("token")
    {
      if(!token)
      {
        navigate("/")
        alert("You Need To Login");
      }
    }
  }
  return (
    <>
      <div className='navbar'>
          
          <ul className='nav-items'>
            <li className='item-0'><Link to='/r'>JOBCIRCLE</Link></li>
            <li className='item-1'><Link to='/r-post'>POST</Link></li>
            <li className='item-2'><Link to='/r-view' onClick={handleNavigation}>VIEW</Link></li>
            <li className='item-3'><Link to='/r-posted' onClick={handleNavigation}>POSTED</Link></li>
            <li className='item-4'><Link to='/r-profile' onClick={handleNavigation}>PROFILE</Link></li>
              <li className='item-4'><Link to='/r-details' onClick={handleNavigation}>DETAILS</Link></li>
            <button className='b1'><li className='item-5' ><Link to='/login' style={{color:"white"}}>LOGIN</Link></li></button>
            <button className='b2' onClick={logout} style={{backgroundColor:"black",color:"white"}}><li className='item-6'>LOGOUT</li></button>
          </ul>
      </div>
    </>
  )
}
export default RNavbar
