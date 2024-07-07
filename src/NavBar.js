import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Rama from './Rama';
import App from './App';


const NavBar = () => {
    return(
        <>
            {/* <Routes>
                <Route path='/About' element={<About/>}></Route>
                <Route path='/Rama' element={<Rama/>}></Route>
                <Route path='/' element={<App/>}></Route>    
            </Routes>
            <Link to='/About'>Krishna</Link>
            <div>
                <Link to='/About'>Krishna</Link>
                
            </div> */}

            <div>
    <div className={(menu) ? 'menuContainerClicked' : 'menuContainer'}id="menuContainer">
      <a href='/'>
        <img src="https://iskconmumbai.com/images/logo-black.png" alt="Logo" className="logo"/>
        <h3 className="logoText">ISKCON Food For Child</h3>
      </a>  
    <ul className={(menu) ? 'menuListClicked' : 'menuList'} id="ul">

    {/* (window.innerWidth < 900) */}
        <li> <a href='/Krishna'>About</a></li>
        {/* <li><a href="/Rama">Rama</a></li> */}
        <li><a href="/Govinda">Govinda</a></li>
        <li><a href="/Narasimha">Narasimha</a></li>
        <li><a href="/Varaha">Varaha</a></li>
        <li><a href="/Varaha">Varaha</a></li>
        <a href='/Rama'>Rama</a>
   </ul>
      <div className={(menu) ? 'menuIconClicked' : 'menuIcon'} onClick = {() => { setMenu(prevState=> !prevState); console.log(menu, document.getElementById
        ('ul').className)}}>&#9776;</div >
    </div >
    
</div >
        </>
    );
}

export default NavBar;