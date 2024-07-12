import React,{useState} from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import AnnaDan from './pages/AnnaDan';
import App from './App';
import FFC from './FFC';
import Impact from './pages/Impact';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import About from './pages/About';


const NavBar = () => {

    const [menu, setMenu] = useState(false);

    return(
        <>
        <div>
            <div className={(menu) ? 'menuContainerClicked' : 'menuContainer'}id="menuContainer">
                <Link to='/'>
                    <img src="https://iskconmumbai.com/images/logo-black.png" alt="Logo" className="logo"/>
                    <h3 className="logoText">ISKCON Food For Child</h3>
                </Link>  
            <ul className={(menu) ? 'menuListClicked' : 'menuList'} id="ul">

            {/* (window.innerWidth < 900) */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/AnnaDan">Anna Daan</Link></li>
                <li><Link to="/Impact">Impact</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/Donate">Donate</Link></li>
             </ul>
            <div className={(menu) ? 'menuIconClicked' : 'menuIcon'} onClick = {() => { setMenu(prevState=> !prevState); console.log(menu, document.getElementById
                ('ul').className)}}>&#9776;</div >
            </div >
    
</div >
        </>
    );
}

export default NavBar;