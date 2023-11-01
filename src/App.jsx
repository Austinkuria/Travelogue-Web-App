import './App.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import TopRating from "./pages/TopRating"
import Destinations from "./pages/Destinations"
import OurTeam from "./pages/OurTeam"
import Contact from "./pages/Contact"
import Testimonials from "./pages/Testimonials"

 

function App() {
    return (
      <BrowserRouter>
        <header className='bg-blue-500 p-6 justify-between flex flex-row'>
        <h2 className='text-white text-3xl font-bold tracking-wide leading-3'>Travelogue</h2>
          <nav >
            <ul>
              <li className='p-2'>
              <Link to="/" className='p-[12px] bg-slate-500 text-white hover:bg-white hover:text-black m-3 cursor-pointer font-bold text-lg rounded-lg'>Home</Link>
              <Link to="/about" className='p-[12px] bg-slate-500 text-white hover:bg-white hover:text-black m-3 cursor-pointer font-bold text-lg rounded-lg'>About</Link>
              <Link to="/top-rating" className='p-[12px] bg-slate-500 text-white hover:bg-white hover:text-black m-3 cursor-pointer font-bold text-lg rounded-lg'>Top rating</Link>
              <Link to ="/destinations"className='p-[12px] bg-slate-500 text-white hover:bg-white hover:text-black m-3 cursor-pointer font-bold text-lg rounded-lg' font-bold text-lg>Destinations</Link>
              <Link to="/our-team"className='p-[12px] bg-slate-500 text-white hover:bg-white hover:text-black m-3 cursor-pointer font-bold text-lg rounded-lg'>Our Team</Link>
              <Link to="/contact-us"className='p-[12px] bg-slate-500 text-white hover:bg-white hover:text-black m-3 cursor-pointer font-bold text-lg rounded-lg'>Contact Us</Link>
              <Link to="/testimonials"className='p-[12px] bg-slate-500 text-white  m-3 cursor-pointer hover:bg-white hover:text-black font-bold text-lg rounded-lg'>Testimonials</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/top-rating" element={<TopRating />}/>
          <Route path="/destinations" element={<Destinations />}/>
          <Route path="/our-team" element={<OurTeam />}/>
          <Route path="/contact-us" element={<Contact />}/>
          <Route path="/testimonials" element={<Testimonials />}/>
        </Routes>
      </BrowserRouter>
    )
  }

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

export default App
