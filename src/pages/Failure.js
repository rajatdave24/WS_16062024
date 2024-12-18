import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';


const Failure = () => {

    useEffect(()=>{
        setTimeout(()=>location.href='https://iskconjuhu.in/',5000)
    },[]);

    return(
        <div style={{display:'block',position:'relative',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
             <h1>Hare Krishna!!!</h1>
             <div style={{color:'red'}}>There was some error in processing payment transaction...</div>
             <p>Please contact support contact available at the main page...</p>
             <Link to='/'>Return to home</Link>
             <p></p>
             <p>Redirecting to home page in 15 seconds...</p>
        </div>
    );
}

export default Failure;