import React from 'react'
import './Navbar.css';
import {Link, useNavigate} from 'react-router-dom'
import { Navigate } from 'react-router-dom';
const Navbar = () => {
  const navigate=useNavigate();
  const logout = () =>{
    alert("Logged Out Successfully");
    localStorage.removeItem("token");
    navigate("/");
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
            <li className='item-0'><Link to='/'>JOBCIRCLE</Link></li>
            <li className='item-1'><Link to='/bookmarks'>BOOKMARKS</Link></li>
            <li className='item-2'><Link to='/find-jobs' onClick={handleNavigation}>FIND</Link></li>
            <li className='item-3'><Link to='/applied-jobs' onClick={handleNavigation}>APPLIED</Link></li>
            <li className='item-4'><Link to='/profile' onClick={handleNavigation}>PROFILE</Link></li>
            <li className='item-4'><Link to='/details' onClick={handleNavigation}>DETAILS</Link></li>
            <button className='b1'><li className='item-5' ><Link to='/login' style={{color:"white"}}>LOGIN</Link></li></button>
            <button className='b2' onClick={logout} style={{backgroundColor:"black",color:"white"}}><li className='item-6'>LOGOUT</li></button>
          </ul>
      </div>
    </>
  )
}
export default Navbar
