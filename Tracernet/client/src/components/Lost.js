import React from 'react'
import "./Lost.css"
const Lost = () => {
  return (
  <div className="lost-container"> 
    <div className="title">
        <h2>Find The Lost</h2>
        <div>
            <form className="input" > 
    <input  type="text" placeholder="Name of lost"/>
    <input  type="number" placeholder="Age of lost"/>
    <input  type="text" placeholder="Gender of lost"/>
    <input  type="text" placeholder="Location where lost"/>
    <input  type="number" placeholder="Contact"/>

    <textarea  placeholder="Enter description of lost"></textarea> 
    <center><button class="button">Submit</button></center>
            </form>
        </div>
    </div> 
  </div> 
  );
};

export default Lost