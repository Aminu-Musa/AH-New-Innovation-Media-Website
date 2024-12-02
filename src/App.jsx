import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import About from './pages/About'


const App = () => {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='services' element={<Services/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='about' element={<About/>}/>
        </Routes>
      <Footer/>
      </Router>

    </>
  )
}

export default App