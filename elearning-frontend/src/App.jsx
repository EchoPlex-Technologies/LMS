import React, { useEffect, useState } from 'react'
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
import RoomFinderPage from './pages/RoomFinderPage'
import FinancialsPage from './pages/FinancialsPage'



function App() {
  // eslint-disable-next-line no-unused-vars
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme');
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial = saved || (prefersDark ? 'dark' : 'light');
      if (initial === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
      else document.documentElement.removeAttribute('data-theme');

      const toggleTheme = () => {
        const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        if (next === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
        else document.documentElement.removeAttribute('data-theme');
        // eslint-disable-next-line no-unused-vars
        try { localStorage.setItem('theme', next); } catch (e) { /* empty */ }
        setTheme(next);
      }

      // expose for legacy callers (Sidebar button)
      window.toggleTheme = toggleTheme;

      // eslint-disable-next-line no-unused-vars
      return () => { try { delete window.toggleTheme } catch (e) { /* empty */ } };
      // eslint-disable-next-line no-unused-vars
    } catch (e) {/* do nothing */ }
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (prefersDark ? 'dark' : 'light');
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(initial);
  }, []);

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
        <Route path='/findaroom' element={<RoomFinderPage />} />



        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
