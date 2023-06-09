import React from "react";
import "./Land.css";

const Signup = () => {
  return (
    <div class="login-box">
  <p>Sign up</p>
  <form>
    <div class="user-box">
      <input required="" name="" type="text"/>
      <label>Email</label>
    </div>
    
    <div class="user-box">
      <input required="" name="" type="number"/>
      <label>Phone</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="password"/>
      <label>Password</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
  <p>Don't have an account? <a href="" class="a2">Sign up!</a></p>
</div>
    
  );
};

export default Signup;
