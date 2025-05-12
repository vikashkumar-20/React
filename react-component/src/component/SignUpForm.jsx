import React from 'react'
import { useState } from 'react';
import "../index.css";

export const SignUpForm = () => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const [phonenumber, setPhoneNumber] = useState("");

    const handleSubmitButton = (e) => 
    {
        e.preventDefault();
        console.log("Form Submitted:", { firstname, lastname, email, phonenumber, password });
        setFirstName('');
    }
    
    return (
        <div>
            <section className='displayContent'>
                <p>Hello, my name is {firstname} {lastname} My Email address is {email} and My Phone Number is {phonenumber}</p>
            </section>

            <section className='container'>
                <header>
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account</p>
                </header>
                <div className='form'>
                    <form action="">
                        <label htmlFor="firstname">First Name</label>
                        <br/>
                        <input 
                        type="text" 
                        name="firstname" 
                        placeholder='Enter Firstname'
                        value = {firstname}
                        onChange={(e) => setFirstName(e.target.value)}/>
                        <br/>
                        <label htmlFor="lastname">Last Name</label>
                        <br/>
                        <input 
                        type="text" 
                        name="lastname" 
                        placeholder='Enter Lastname'
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
                        />
                        <br/>
                        <label htmlFor="email">Email</label>
                        <br/>
                        <input 
                        type="email" 
                        name="" placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <br/>
                        <label htmlFor="password">Password</label>
                        <br/>
                        <input 
                        type="password" 
                        name="password" 
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <br/>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <br/>
                        <input 
                        type="phone" 
                        name="phone" 
                        placeholder='Enter Phone Number'
                        value = {phonenumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        
                    </form>
                    <p>By creating account you agree to our <span>Terms & Privacy</span></p>
                    <button onClick = {handleSubmitButton}type='submit'>Sign Up</button>
                </div>
            </section>
            
        </div>
    )
}
