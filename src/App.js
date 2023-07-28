import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Layout from './pages/Layout';
import Hostels from './pages/Hostels';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter> 
    <Navbar/>
        <Routes>
          <Route path="/" element={<Layout/>}> </Route>
          <Route path="about" element={<AboutUs />} />
          <Route path="hostels" element={<Hostels/>}/>
          {/* <Route path="blog" element={<Blog/>}/> */}
          {/* <Route path="magazineupload" element={<MagazineUpload/>}/> */}
        </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
