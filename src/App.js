import React from 'react'
import './App.css';
import './Compoents/Other.css'
import Footer from './Compoents/Footer';
import Navbar from './Compoents/Navbar';
import About from './Compoents/About';
import Contactus from './Compoents/Contactus';
import Other from './Compoents/Other';
import Wrap from './Compoents/Wrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page404 from './Compoents/Page404';

function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route  exact path="/" element={<Wrap />}/>
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/project" element={<Other/>} />
            <Route exact path="/contact" element={<Contactus/>} />  
            <Route path="*" element={<Page404/>} />  
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

