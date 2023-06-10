import React from 'react'
import "./Lost.css";

const Lost = () => {
  return (
    <div className="form">
    <form class="form">
    <input class="input" type="text" placeholder="Name"/>
    <input class="input" type="number" placeholder="Age"/>
    <input class="input" type="text" placeholder="Gender"/>
    <input class="input" type="number" placeholder="Phone number"/>
    <input class="input" type="text" placeholder="E-Mail I.D."/>
    <textarea class="textarea" placeholder="Enter message"></textarea> 
    <center><button class="button">Submit</button></center>
</form>
</div>
  
    )
}

export default Lost