import React, {useState, useRef } from 'react';
import Krishna from './pages/About';
import AnnaDan from './pages/AnnaDan';
import Impact from './pages/Impact';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import About from './pages/About';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import FFC from './FFC';
import Test from './pages/Test';
// import './bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Footer from './Footer';

export const App = () => {
return(
<>
    <Routes>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/AnnaDan' element={<AnnaDan/>}></Route>
        <Route path='/Impact' element={<Impact/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Donate' element={<Donate/>}></Route>
        <Route path='/' element={<FFC/>}></Route>
    </Routes>
<div>

</div>
</>
  );
}

export default App;