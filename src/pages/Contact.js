import React, {useState} from 'react';
import NavBar from '../NavBar';

const Contact =()=> {

  const [menu, setMenu] = useState(false);

  return(
    <div className='contact'>
      <NavBar/>
      <h2 style={{ color: '#60349e', left: '10%', position: 'relative', fontSize: '35px', top:'100px'}}>How to reach us</h2>
    </div>
  );
}

export default Contact;