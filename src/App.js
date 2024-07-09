import React, {useState, useRef } from 'react';
import Krishna from './pages/About';
import AnnaDan from './pages/AnnaDan';
import Govinda from './pages/Govinda';
import Narasimha from './pages/Narasimha';
import Varaha from './pages/Varaha';
import About from './pages/About';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import NavBar from './NavBar';
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
        <Route path='/Govinda' element={<Govinda/>}></Route>
        <Route path='/Narasimha' element={<Narasimha/>}></Route>
        <Route path='/Varaha' element={<Varaha/>}></Route>
        <Route path='/' element={<FFC/>}></Route>
    </Routes>
<div>

</div>
</>
  );
}

export default App;