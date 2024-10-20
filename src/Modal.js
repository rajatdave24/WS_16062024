import React from 'react';
import './Modal.css';
import Button from '@mui/material/Button';

const Modal = ({setName, setEmail, setNum, setOpen, handlePay, ...rest}) => {

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var num = document.getElementById('num');

    const handleSubmit = (e) =>{
       if(!(name || email || num)){
        alert('check!!!')
       }
       else
        setOpen(false);
    }

    return(
        <>
        <div className='overlay'>Test</div>
        <form className='modal'>
        <div className='modal'>
             <button className='btn' onClick={()=>setOpen(false)}>X</button>
             <label>Name</label>
             <input type="text" required id='name' onChange={(e)=>setName(e.target.value)}/>
             <label>E-mail</label>
             <input type="email" required id='email' onChange={(e)=>setEmail(e.target.value)}/>
             <label>Contact</label>
             <input type="number" required id='num' onChange={(e)=>setNum(e.target.value)}/><br/>
             <div style={{display:'flex',position:'relative',justifyContent:'center'}}>
                <input type='submit' onClick={handlePay} className='submitBtn'/>
             </div>
            
        </div>
        </form> 
        </>
    );
}

export default Modal;