import React, {useState} from 'react';
import './Modal.css';
import Button from '@mui/material/Button';

const Modal = ({setName, setEmail, setNum, setOpen, handlePay, submitForm,...rest}) => {
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        contact: '',
    });

    var name = document.getElementById('name')?.value;
    var email = document.getElementById('email')?.value;
    var num = document.getElementById('num')?.value;

    const handleSubmit = (e) =>{
     
       e.preventDefault();
       let validationErrors = { name: '', email: '', contact: '' };

       const name = document.getElementById('name').value;
       const email = document.getElementById('email').value;
       const contact = num;

       // Validation checks
       if (!name) {
           validationErrors.name = 'Name is required.';
       }
       if (!email) {
           validationErrors.email = 'E-mail is required.';
       } else if (!/\S+@\S+\.\S+/.test(email)) {
           validationErrors.email = 'Please enter a valid email address.';
       }
       if (!contact) {
           validationErrors.contact = 'Contact number is required.';
       } else if (contact.length < 10) { // Assuming a minimum length for contact number
           validationErrors.contact = 'Contact number must be at least 10 digits long.';
       }

       // Set errors state
       setErrors(validationErrors);

       // If no errors, proceed with submission
       if (!validationErrors.name && !validationErrors.email && !validationErrors.contact) {
        setName(name);
        setEmail(email);
        setNum(num);
        setOpen(false); // Close the modal
        submitForm();
        }       
    }

    return(
        <>
        <div className='overlay'>Test</div>
        <form className='modal'>
        <div className='modal'>
            <button className='btn' onClick={() => setOpen(false)}>X</button>
            <label>Name</label>
            <input type="text" required id='name' />
            {errors.name && <div className='error'>{errors.name}</div>}
            
            <label>E-mail</label>
            <input type="email" required id='email' />
            {errors.email && <div className='error'>{errors.email}</div>}
            
            <label>Contact</label>
            <input type="number" required id='num' onChange={(e) => setNum(e.target.value)} />
            {errors.contact && <div className='error'>{errors.contact}</div>}
            
            <div style={{ display: 'flex', position: 'relative', justifyContent: 'center' }}>
                <input type='submit' className='submitBtn' onClick={handleSubmit} />
            </div>
        </div>
        </form> 
        </>
    );
}

export default Modal;