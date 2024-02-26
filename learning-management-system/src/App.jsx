
import { Route, Routes } from 'react-router-dom'
import './App.css'
// import Footer from './Components/Footer/Footer'
// import HomeLayout from './Layouts/HomeLayout'
import HomePage from './Pages/HomePage/HomePage'
import AboutUs from './Components/AboutUs/AboutUs'
import NotFound from './Pages/NotFound/NotFound'

function App() {


  return (
    < >
    <Routes>
       <Route path='/' element={<HomePage/>}></Route>
       <Route path='/about' element={<AboutUs/>}></Route>

       <Route path='*' element={<NotFound/>}></Route>
    </Routes>


    </>
  )
}

export default App
