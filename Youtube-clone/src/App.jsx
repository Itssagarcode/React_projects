import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Video from './Pages/Video/Video'

function App() {

// sidebar menu toogle button functionality
const [sidebar, setSidebar] = useState(true)


  return (
    <>
     <Navbar setSidebar={setSidebar}/>
     <Routes>
      <Route path='/' element={<Home sidebar={sidebar}/>} />
      <Route path='/video/:categoryId/:videoId' element={<Video/>} />
     </Routes>
    </>
  )
}

export default App
