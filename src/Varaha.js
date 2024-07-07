import React, {useState} from 'react';

const Varaha =()=> {

  const [menu, setMenu] = useState(false);

  return(
    <>
    <h1 style={{position:'relative'}}>Rama!!!...</h1>
    <h3>Hare Krishna!</h3>
    <div>
    <div className={(menu) ? 'menuContainerClicked' : 'menuContainer'}id="menuContainer">
      <a href='/'>
        <img src="https://iskconmumbai.com/images/logo-black.png" alt="Logo" className="logo"/>
        <h3 className="logoText">ISKCON Food For Child</h3>
      </a>  
    <ul className={(menu) ? 'menuListClicked' : 'menuList'} id="ul">

    {/* (window.innerWidth < 900) */}
        <li> <a href='/Krishna'>Krishna</a></li>
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

export default Varaha;