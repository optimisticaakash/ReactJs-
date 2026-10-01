import React from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from "./components/Footer.jsx";
import Home from './pages/Home.jsx';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About.jsx';
import Product from './pages/Product.jsx';
import Notfound from './pages/Notfound.jsx';
import Men from './pages/Men.jsx';
import Women from './pages/Women.jsx';
import Kids from './pages/Kids.jsx';
import Courses from './pages/Courses.jsx';
import CourseDetails from './pages/CourseDetails.jsx';
import Navbar2 from './components/Navbar2.jsx';

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path='/courses/:Courseid' element={<CourseDetails />}></Route>
        <Route path="*" element={<Notfound />} />

        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App