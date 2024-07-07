import React, {useState, useRef } from 'react';
import Krishna from './Krishna';
import Rama from './Rama';
import Govinda from './Govinda';
import Narasimha from './Narasimha';
import Varaha from './Varaha';
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
        <Route path='/Krishna' element={<Krishna/>}></Route>
        <Route path='/Rama' element={<Rama/>}></Route>
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