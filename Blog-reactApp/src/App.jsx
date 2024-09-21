import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
import Hero from './components/Hero/Hero'
import Slider from './components/Slider/Slider'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className=' w-full min-h-screen flex flex-wrap content-between bg-slate-500'>
      <div className=' w-full block'>
        <Header />
        
        <main>
         <Outlet />
        {/* <Slider/> */}
        </main>
        <Hero/>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
