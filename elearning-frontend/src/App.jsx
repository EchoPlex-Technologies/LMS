import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import StudentDashboard from './pages/student/StudentDashboard';
import StudentFinancePage from './pages/student/StudentFinancePage';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import './App.css'


function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route index element={<HomePage />} />

          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/student-finance" element={<StudentFinancePage />} />

          <Route path='/teacher-dashboard' element={<TeacherDashboard />} />


        </Routes>
      </div>
    </>
  )
}

export default App
