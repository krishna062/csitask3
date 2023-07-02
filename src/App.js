import React from 'react';
// import { Switch,Route} from 'react-router-dom';
import {  Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Starting from './components/Starting';
import Pricing from './components/Pricing';
import './App.css';




function App() {
  return (
  //  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route  path="/Whatyouget" element={<Services/>}/>
      <Route  path="/GetStarted" element={<Starting/>}/>
      <Route  path="/Pricing" element={<Pricing/>}/>
    </Routes>
    // </BrowserRouter> 
    
  );
}

export default App;
