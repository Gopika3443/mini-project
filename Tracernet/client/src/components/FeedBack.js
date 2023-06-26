import React from 'react';
import "./FeedBack.css";

const FeedBack = () => {
  return (
    <div className="page-container">
      <div className="feedback-container">
        <section className="content">
          <h1 className="title">Have any Questions?</h1>
          <p className="subtitle">Leave a message and we will help!</p>
          <form className="feedback-form">
            <input type="email" placeholder="Email" className="input-field" required />
            <textarea placeholder="Message" className="textarea-field" rows={5} required />
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </section>        
      </div>
    </div>
  );
}

export default FeedBack;
