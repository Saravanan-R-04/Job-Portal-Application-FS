import React from 'react'
import {Routes,Route} from 'react-router-dom'
import ViewCandidates from './ViewCandidates/ViewCandidates'
import ViewRecruiters from './ViewRecruiters/ViewRecruiters'
import ViewJobs from './ViewJobs/ViewJobs'
import ViewCandidateProfiles from './ViewCandidateProfiles/ViewCandidateProfiles'
import ViewRecruiterProfiles from './ViewRecruiterProfiles/ViewRecruiterProfiles'
import ViewDetails from './ViewDetails/ViewDetails' 
import Home from './Home/Home'
const App = () => {
  return (
    <Routes>
      <Route path='/ViewCandidates' element={<ViewCandidates/>} />
      <Route path='/ViewRecruiters' element={<ViewRecruiters/>} />
      <Route path='/ViewJobs' element={<ViewJobs/>}/>
      <Route path='/ViewCandidateProfiles' element={<ViewCandidateProfiles/>}/>
      <Route path='/ViewRecruiterProfiles' element={<ViewRecruiterProfiles/>}/>
      <Route path='/ViewDetails' element={<ViewDetails/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
  )
}
export default App
