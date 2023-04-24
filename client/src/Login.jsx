import React, { useState } from "react";
import logo from "./tracelogo.jpg";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="loginHead">
            <div className="header">
            <div className="logowrap">
                <img className="logo" src={logo} alt="Tracenet logo" />
            </div>
                <h1 className="title">TRACENET</h1>
        </div>

        <div className="bodyForm">
        
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="noAcct" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    </div>

    )
}