import React,{useState} from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import AnnaDan from './pages/AnnaDan';
import App from './App';
import FFC from './FFC';
import Impact from './pages/Impact';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import About from './pages/About';
import './style.css';


const NavBar = () => {

    const [menu, setMenu] = useState(false);

    window.addEventListener('click',(e)=>{
        var menuIcon = document.getElementById('menuIcon');
        var menuList = document.getElementById('menuList');
        var menuContainer = document.getElementById('menuContainer');
            // console.log('e.target : ',e.target);
        if((e.target != menuIcon) && (e.target != menuContainer) && ((e.target != menuList))){
            // console.log('outside Click!!!');
            // menuList.className = 'menuList';
            // menuIcon.className = 'menuIcon';
            // menuContainer.className = 'menuContainer';
            console.log('setting menu to false!');
            setMenu(false);
        }

    });

    return(
        <>
        <div>
            <div className={(menu) ? 'menuContainerClicked' : 'menuContainer'} id="menuContainer">
                <Link to='/'>
                    <img src="ISKCON_logo.png" alt="Logo" className="logo"/>
                    <h3 className="logoText">ISKCON Juhu</h3>
                </Link>  
            <ul className={(menu) ? 'menuListClicked' : 'menuList'} id="menuList">

            {/* (window.innerWidth < 900) */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/AnnaDan">Anna Daan</Link></li>
                <li><Link to="/Impact">Impact</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                    <Link to="/#donateNow" className='donateButton' onClick={(e)=>{e.stopPropagation;e.preventDefault;scrollToSection(donateRef)}}>Donate</Link>
             </ul>
            <div className={(menu) ? 'menuIconClicked' : 'menuIcon'} id='menuIcon' onClick = {(e) => {e.stopPropagation;e.preventDefault;setMenu(prevState =>!prevState); console.log(menu, document.getElementById
                ('menuList').className)}}>&#9776;</div >
            </div >
    
</div >
        </>
    );
}

export default NavBar;