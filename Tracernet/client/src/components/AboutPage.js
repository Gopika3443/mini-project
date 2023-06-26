import React from 'react';
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div>
      <div className="Scrollabout" id="about">
      <h2 className="Abouth2">About Us</h2>
        <div className="FlexContainer">
          <div className="Text">
            <p>
              Tracenet is a website that aims to help people find lost people and reunite them with their loved ones.
              It provides a platform where users can post information about lost person, such as descriptions, photos, and contact details.
              This allows individuals who have found lost people to easily connect with their loved ones.
              The website features a user-friendly interface that allows users to search for lost people based on various criteria, such as location, identification mark, gender, age, etc.
              It also provides a feature for users to post details about people they have found, increasing the chances of successful reunions.
              Tracenet promotes community engagement and cooperation by enabling users to communicate and coordinate directly through the platform.
              It also offers additional functionalities such as user profiles, where individuals can manage their lost and found listings, and a notification system to receive updates on matched items.
              The goal of Tracenet is to simplify the process of finding and returning lost people, leveraging the power of technology and online connectivity to connect people who have lost people with those who have found them.
              By providing a centralized platform for lost and found listings, Tracenet aims to increase the efficiency and effectiveness of reuniting lost people, ultimately fostering a sense of trust and community among its users.
            </p>
          </div>
          <div className="ImageContainer">
          <a href="https://ibb.co/W2BMQLK"><img src="https://i.ibb.co/kSqwptc/79z-2203-w012-n001-51c-p6-51.jpg" alt="79z-2203-w012-n001-51c-p6-51" border="0"/></a>
          </div>
        </div>
        <h3 className="SubHeading">Our Mission</h3>
        <div className="Text">
          <p>
            At Tracenet, we are committed to:
            Assisting in the search and recovery of missing individuals.
            Providing a centralized database of information about missing persons to aid concerned parties, authorities, and the general public.
            Facilitating collaboration and information sharing to increase the chances of locating missing persons.
            Offering a user-friendly interface and advanced search algorithms to optimize the search process.
            <div className="Image1Container">
            <a href="https://imgbb.com/"><img src="https://i.ibb.co/WBnL7xY/bg7.png" alt="bg7" border="0"/></a>
            <a href="https://imgbb.com/"><img src="https://i.ibb.co/XSRdL6Z/bg5.png" alt="bg5" border="0"/></a>
            </div>
          </p>
        </div>

        <h3 className="SubHeading">Our Goals</h3>
        <div className="Text">
          <p>
            Enable individuals to report missing persons and provide essential details to aid in their search.
            Create a centralized database to gather and store information about missing individuals, making it easily accessible to concerned parties, authorities, and the public.
            Foster collaboration and information sharing between users to create a strong network of support.
            Leverage technology and advanced search algorithms to improve the efficiency of the search and recovery process.
            <div className="Image2Container">
            <a href="https://imgbb.com/"><img src="https://i.ibb.co/jZ45cPg/bg3.png" alt="bg3" border="0"/></a>          
            </div>
          </p>
        </div>

        <h3 className="SubHeading">How Tracenet Works?</h3>
        <div className="Text">
          <div className="Content">
            <p>
              Tracenet provides a user-friendly platform where individuals can report cases of missing persons and share relevant information.
              Users can create profiles, upload photos, and provide detailed descriptions of missing individuals.
              Our system employs advanced search algorithms and matching techniques to compare reported missing persons with any found individuals or potential matches.
              Tracenet aims to connect people and provide a platform for communication and coordination between users, law enforcement agencies, and relevant organizations.
            </p>
          </div>
          <div className="ImageContainer">
            <img src="locating.avif" alt="About Us Image" className="AboutImage" />
          </div>
        </div>

        <h3 className="SubHeading">Join Tracenet</h3>
        <div className="Text">
          <p>
            We invite you to join Tracenet and become part of a community dedicated to reuniting families and bringing hope to those in need.
            Together, we can make a difference and contribute to the search for missing individuals.
            Feel free to customize this text according to your specific project requirements, tone, and objectives.
          </p>
        </div>
      </div>

      <div id="feedback">
        <form>
          <h2 className="Abouth2">Feedback</h2>
          <div className="page-container">
            <div className="feedback-container">
              <section className="content">
                <h1 className="title">Have any Questions?</h1>
                <p className="subtitle">Leave a message and we will help!</p>
                <form className="feedback-form">
                  <input type="email" placeholder="Email" className="input-field" required />
                  <textarea placeholder="Message" className="textarea-field" rows={5} required />
                </form>
              </section>
              <button type="submit" className="submit-button">Submit</button>
            </div>
          </div>
        </form>
      </div>

      <h2 className="Abouth2">Contact Us</h2>
      <footer id="contact">
        <div className="bottom">
          <ul className="social-icons">
            <li>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-google"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
