import { Route, Routes } from 'react-router'
import Homepage from './Homepage'
import ProgramToday from './ProgramToday'
import NotFoundPage from './NotFoundPage'
import './App.css'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/today' element={<ProgramToday />} />


        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
