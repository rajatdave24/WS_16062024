import React, {useState } from 'react';
import Krishna from './Krishna';
import './style.css';
export const App = () => {
  const [menu, setMenu] = useState(true);

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900)
      setMenu(false);
  })
  // window.addEventListener('scroll', () => {
  //   var navbar = document.getElementById('menuContainer');
  //   var sticky =  navbar.offsetTop;
  //   console.log(sticky, window.pageYOffset);
  //   if (window.pageYOffset >= sticky) {
  //     navbar.classList.add('sticky');
  //   }
  //   else {
  //     navbar.classList.remove('sticky');
  //   }
  // });
  
  return (
    <>
      <div>
        <div className={(menu) ? 'menuContainerClicked' : 'menuContainer'}id="menuContainer">
        <img src="https://iskconmumbai.com/images/logo-black.png" alt="Logo" className="logo"/>
        <h3 className="logoText">ISKCON Food For Child</h3>
        <ul className={(menu && (window.innerWidth < 900)) ? 'menuListClicked' : 'menuList'} id="ul">
            <li> <a href="#Krishna">Krishna</a></li>
            <li><a href="#Rama">Rama</a></li>
            <li><a href="#Govinda">Govinda</a></li>
            <li><a href="#Narasimha">Narasimha</a></li>
            <li><a href="#Varaha">Varaha</a></li>
            <li><a href="#Varaha">Varaha</a></li>
       </ul>
          <div className={(menu) ? 'menuIconClicked' : 'menuIcon'} onClick = {() => { setMenu(prevState=> !prevState); console.log(menu, document.getElementById
            ('ul').className)}}>&#9776;</div >
        </div >
        <div  className='app'>
        <img src="FFC-Banner-WEB-1_JPEG.jpg" className={(menu) ? 'image1': 'image'} alt="lotus"/>
        </div>
    </div ><br/>

<p style={{display: 'flex',position: 'relative',paddingTop: '410px' }}>
// # E10000 Queues setup:
// If E10000 queue are not running for Cards follow below steps-</p>

</>
  );
}

export default App;