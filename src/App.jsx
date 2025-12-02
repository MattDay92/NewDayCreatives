import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/view/Home'
import Nav from './components/Nav'
import Music from './components/view/Music'
import Arrangements from './components/view/Arrangements'
import Websites from './components/view/Websites'

function App() {
  const [currentPage, setCurrentPage] = useState(null)

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home currentPage={currentPage} setCurrentPage={setCurrentPage} />} />
        <Route path='/music' element={<Music currentPage={currentPage} setCurrentPage={setCurrentPage} />} />
        <Route path='/arrangements' element={<Arrangements currentPage={currentPage} setCurrentPage={setCurrentPage} />} />
        <Route path='/websites' element={<Websites currentPage={currentPage} setCurrentPage={setCurrentPage} />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
