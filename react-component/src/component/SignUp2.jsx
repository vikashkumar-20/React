import React from 'react'
import { useState } from 'react';
import "../index.css";

export const SignUp2 = () => {
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        phonenumber: ''
    })

    const handleSubmitButton = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", user);

        setUser({
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            phonenumber: ''
        });

    }

    return (
        <div>
            <section className='displayContent'>
                <p>Hello, my name is {user.firstname} {user.lastname} My Email address is {user.email} and My Phone Number is {user.phonenumber}</p>
            </section>

            <section className='container'>
                <header>
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account</p>
                </header>
                <div className='form'>
                    <form action="">
                        <label htmlFor="firstname">First Name</label>
                        <br />
                        <input
                            type="text"
                            name="firstname"
                            placeholder='Enter Firstname'
                            value={user.firstname}
                            onChange={(e) => setUser({...user, firstname:e.target.value})} />
                        <br />
                        <label htmlFor="lastname">Last Name</label>
                        <br />
                        <input
                            type="text"
                            name="lastname"
                            placeholder='Enter Lastname'
                            value={user.lastname}
                            onChange={(e) =>  setUser({...user, lastname:e.target.value})}
                        />
                        <br />
                        <label htmlFor="email">Email</label>
                        <br />
                        <input
                            type="email"
                            name="" placeholder='Enter Email'
                            value={user.email}
                            onChange={(e) =>  setUser({...user, email:e.target.value})}
                        />
                        <br />
                        <label htmlFor="password">Password</label>
                        <br />
                        <input
                            type="password"
                            name="password"
                            placeholder='Enter Password'
                            value={user.password}
                            onChange={(e) =>  setUser({...user, password:e.target.value})}
                        />
                        <br />
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <br />
                        <input
                            type="phone"
                            name="phone"
                            placeholder='Enter Phone Number'
                            value={user.phonenumber}
                            onChange={(e) =>  setUser({...user, phonenumber:e.target.value})}
                        />

                    </form>
                    <p>By creating account you agree to our <span>Terms & Privacy</span></p>
                    <button onClick={handleSubmitButton} type='submit'>Sign Up</button>
                </div>
            </section>

        </div>
    )
}
