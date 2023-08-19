import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./pages/Layout";
import Hostels from "./pages/Hostels";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="spacef">{/* just to keep thing intact */}</div>
      <intro />
      <Routes>
        <Route path="/" element={<Layout />}>
          {" "}
        </Route>
        <Route path="about" element={<AboutUs />} />
        <Route path="hostels" element={<Hostels />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

        {/* <Route path="blog" element={<Blog/>}/> */}
        {/* <Route path="magazineupload" element={<MagazineUpload/>}/> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
