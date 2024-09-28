import React, {useState} from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import '../style.css';

const Contact =()=> {

  const [menu, setMenu] = useState(false);

  return(
    <div style={{display:'block',position:'relative'}}>
        <NavBar/>
        <div>Hare Krishna!</div>
        <p>Gauranga!</p>
    <div className='contact'>
                <h2 style={{ display:'block',color: '#60349e', position: 'relative', fontSize: '35px',justifyContent:'centre'}}>Contact us:</h2>
                <div style={{display:'block',position:'relative',marginTop:'80px'}}>
                      <p><h3>Contact Info:</h3></p>
                      <p>Address</p>
                      <p>Bhisma Dept , ISKCON, Hare Krishna Land, Juhu, Mumbai, Maharashtra 400049</p>
                      <p>Phone</p>
                      <p>+91 7400056919</p>
                      <p>Email: pranav@iskcontrust.org</p>
                </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Contact;