import React from "react";
import { Link } from "react-router-dom";
import "./Land.css";

const Land = () => {
  return (
    <div class="main">
      <h1>TRACENET</h1>
    <div class="login-box">
  <p>Login</p>
  <form>
    <div class="user-box">
      <input required="" name="" type="text"/>
      <label>Email</label>
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
  <p>Don't have an account? <Link to="/signup">Signup</Link></p>
</div>
</div>
  );
};

export default Land;
