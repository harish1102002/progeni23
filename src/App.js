import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/login";
import Navbar from "./Components/Navbar/navbar";
import About from "./Components/About/About";
import Footer from './Components/Footer/Footer';
import Events from './Components/Events/Events';
import EventDetails from './Components/Events/EventDetails';
import Register from './Components/Register/Register';
import Contact from './Components/Contact/contact';
import ScrollToTop from './Components/ScrollToTop';
import Ad from "./Components/admin"
function App() {
  const r="/phd/admin3";
  return (
      <Router>
        <Navbar/>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/events" element={<Events/>} />
          <Route path="/event/:id" element={<EventDetails/>} />
          <Route path="/register"  element={<Register/>}/>
          <Route path="/login" element={<Login/>} />     
          <Route path="/about-us" element={<About/>} />
          <Route path="/contact-us" element={<Contact/>} />
          <Route path={r} element={<Ad/>} />
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
