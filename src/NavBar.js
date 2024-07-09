import React,{useState} from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import AnnaDan from './pages/AnnaDan';
import App from './App';
import FFC from './FFC';
import Govinda from './pages/Govinda';
import Narasimha from './pages/Narasimha';
import Varaha from './pages/Varaha';
import About from './pages/About';


const NavBar = () => {

    const [menu, setMenu] = useState(false);

    return(
        <>
        <div>
            <div className={(menu) ? 'menuContainerClicked' : 'menuContainer'}id="menuContainer">
                <a href='/'>
                    <img src="https://iskconmumbai.com/images/logo-black.png" alt="Logo" className="logo"/>
                    <h3 className="logoText">ISKCON Food For Child</h3>
                </a>  
            <ul className={(menu) ? 'menuListClicked' : 'menuList'} id="ul">

            {/* (window.innerWidth < 900) */}
                <li><a href='/'>Home</a></li>
                <li> <a href='/About'>About</a></li>
                <li><a href="/AnnaDan">Anna Daan</a></li>
                <li><a href="/Govinda">Govinda</a></li>
                <li><a href="/Narasimha">Narasimha</a></li>
                <li><a href="/Varaha">Varaha</a></li>
             </ul>
            <div className={(menu) ? 'menuIconClicked' : 'menuIcon'} onClick = {() => { setMenu(prevState=> !prevState); console.log(menu, document.getElementById
                ('ul').className)}}>&#9776;</div >
            </div >
    
</div >
        </>
    );
}

export default NavBar;