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
                <label htmlFor="email">Email</label>
                <input type="text" />
            </div>

            <div className="email">
                <label htmlFor="password">Password</label>
                <input type="password" />
                

            </div>

            <button className="buttonLog" type="submit">Login</button>
            </div>
        </div>
        </form>

           
        </>
    )
}

export default BasicForm