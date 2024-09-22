import React, {useState} from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import '../style.css';

const Contact =()=> {

  const [menu, setMenu] = useState(false);

  return(
    <div style={{display:'block',position:'block'}}>
        <NavBar/>
        <div>Hare Krishna!</div>
        <p>Gauranga!</p>
    <div className='contact'>
                <h2 style={{ display:'block',color: '#60349e', left: '10%', position: 'relative', fontSize: '35px',top: '100px'}}>How to reach us</h2>
    </div>
    </div>
  );
}

export default Contact;