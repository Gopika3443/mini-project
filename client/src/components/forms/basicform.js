import './App.css';
import React from 'react'

const BasicForm = () => {
    return (
        <>
        <form action="">

            <div className="body">

            <div className="head">
                <div className="heading">
                <label>TRACENET</label>
                </div>
            
               
            <div className="email">
                <label for="email">Email</label>
                <input type="text" />
            </div>

            <div className="email">
                <label for="password">Password</label>
                <input type="password" />
                

            </div>

            <button className="buttonLog" type="submit">Login</button>
            <button className="noAccount" type="submit">Don't have an acoount? Register here.</button>
            </div>
        </div>
        </form>

           
        </>
    )
}

export default BasicForm