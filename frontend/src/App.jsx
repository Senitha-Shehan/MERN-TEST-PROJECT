import React from 'react'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Footer from './component/Footer'
import Form from './pages/Form'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Form" element={<Form />} />
      </Routes>

      <Footer />
      
    </div>
  )
}

export default App
