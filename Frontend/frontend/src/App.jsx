import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import Home from './pages/Home/Home'
import FindJobs from './pages/FindJobs/FindJobs'
import AppliedJobs from './pages/AppliedJobs/AppliedJobs'
import Profile from './pages/Profile/Profile'
import ProfileForm from './pages/ProfileForm/ProfileForm'
import BookMarks from './pages/BookMarks/BookMarks'
import EditProfile from './pages/EditProfile/EditProfile'
import RProfileForm from './pages/RProfileForm/RProfileForm'
import RHome from './pages/RHome/RHome'
import RPost from './pages/RPost/RPost'
import RView from './pages/RView/RView'
import RPosted from './pages/RPosted/RPosted'
import RProfile from './pages/RProfile/RProfile'
import REditProfile from './pages/REditProfile/REditProfile'
import ApplicantProfile from './pages/ApplicantProfile/ApplicantProfile'
import Details from './pages/Details/Details'
import RDetails from './pages/RDetails/RDetails'
import RejectedJobs from './pages/RejectedJobs/RejectedJobs'
import PendingJobs from './pages/PendingJobs/PendingJobs'
import VDetails from './pages/VDetails/VDetails'
const App = () => {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/bookmarks' element={<BookMarks/>}/>
          <Route path='/find-jobs' element={<FindJobs/>}/>
          <Route path='/applied-jobs' element={<AppliedJobs/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/profileform' element={<ProfileForm/>}/>
          <Route path='/edit-form' element={<EditProfile/>}/>
          <Route path='/rprofileform' element={<RProfileForm/>}/>
          <Route path='/details' element={<Details/>}/>
          <Route path='/view-details' element={<VDetails/>}/>
          <Route path='/rejected-jobs' element={<RejectedJobs/>}/>
          <Route path='/pending-jobs' element={<PendingJobs/>}/>
           <Route path='/r-details' element={<RDetails/>}/>
          <Route path='/r' element={<RHome/>}/>
          <Route path='/r-post' element={<RPost/>}/>
          <Route path='/r-view' element={<RView/>}/>
          <Route path='/r-posted' element={<RPosted/>}/>
          <Route path='/r-profile' element={<RProfile/>}/>
          <Route path='/r-edit-form' element={<REditProfile/>}/>
          <Route path='/applicant-profile/:id' element={<ApplicantProfile/>}/>
      </Routes>
    </>
  )
}
export default App