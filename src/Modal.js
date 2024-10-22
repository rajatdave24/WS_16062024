import React from 'react';
import './Modal.css';
import Button from '@mui/material/Button';

const Modal = ({setName, setEmail, setNum, setOpen, handlePay, submitForm,...rest}) => {

    var name = document.getElementById('name')?.value;
    var email = document.getElementById('email')?.value;
    var num = document.getElementById('num')?.value;

    const handleSubmit = (e) =>{
        setNum('num is: ',num);
        console.log('num1 is : ',num);
       if(num?.toString().split('').length<10){
        console.log('num2 is :',num);
        alert('check!!!')
       }
       else{
        setName(name);
        setEmail(email);
        setNum(num);
        setOpen(false);
       }
       submitForm();
    }

    return(
        <>
        <div className='overlay'>Test</div>
        <form className='modal'>
        <div className='modal'>
             <button className='btn' onClick={()=>setOpen(false)}>X</button>
             <label>Name</label>
             <input type="text" required id='name'/>
             <label>E-mail</label>
             <input type="email" required id='email'/>
             <label>Contact</label>
             <input type="number" required id='num' onChange={(e)=>setNum(e.target.value)}/><br/>
             <div style={{display:'flex',position:'relative',justifyContent:'center'}}>
                <input type='submit' className='submitBtn' onClick={handleSubmit}/>
             </div>
            
        </div>
        </form> 
        </>
    );
}

export default Modal;