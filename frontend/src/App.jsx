import React from 'react'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Footer from './component/Footer'
import UserDetails from './component/UserDetails/UserDetails'
import AddUser from './component/AddUser/AddUser'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/UserDetails" element={<UserDetails />} />
        <Route path="/AddUser" element={<AddUser />} />
      </Routes>

      <Footer />
      
    </div>
  )
}

export default App
