import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import HomePage from "./pages/HomePage";
import UserDetails from "./component/UserDetails/UserDetails";
import AddUser from "./component/AddUser/AddUser";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content (grow to take available space) */}
      <main className="flex-grow container mx-auto p-6">
        <Routes>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/UserDetails" element={<UserDetails />} />
          <Route path="/AddUser" element={<AddUser />} />
        </Routes>
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default App;
