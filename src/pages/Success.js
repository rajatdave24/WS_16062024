import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../NavBar';
import { Nav } from 'react-bootstrap';


const Success = () => {

    useEffect(()=>{
        setTimeout(()=>location.href='https://iskconjuhu.in/',5000)
    },[]);

    return(
        <div style={{display:'block',position:'relative',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
             <h1>Hare Krishna!!!</h1>
             <div>Thank you for your valuable contribution towards reaching out Lord Krishna's causeless mercy in the form of Krishna's Prasadam</div>
             <img src="Prabhupada_with_children.jpg" alt="Prabhupada with children"/><p></p>
             <Link to='/'>Return to home</Link>
             <p></p>
             <p>Redirecting to home page in 15 seconds...</p>
        </div>
    );
}

export default Success;