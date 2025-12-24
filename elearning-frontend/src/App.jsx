import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import ProgramTodayPage from './pages/ProgramTodayPage'
import NotFoundPage from './pages/NotFoundPage'
import SchedulePage from './pages/SchedulePage'
import AssignmentsPage from './pages/AssignmentsPage'
import AttendancePage from './pages/AttendancePage'
import AppsPage from './pages/AppsPage'
import ProfilePage from './pages/ProfilePage'
import './App.css'
import AssessmentsPage from './pages/AssessmentsPage'
import FinancialsPage from './pages/FinancialsPage'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/today' element={<ProgramTodayPage />} />
        <Route path='/schedule' element={<SchedulePage />} />
        <Route path='/assignments' element={<AssignmentsPage />} />
        <Route path='/attendance' element={<AttendancePage />} />
        <Route path='/apps' element={<AppsPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/finances' element={<FinancialsPage />} />
        <Route path='/assessments' element={<AssessmentsPage />} />



        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
