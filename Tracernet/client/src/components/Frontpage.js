import React, { useState } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@chakra-ui/react';
import "./Frontpage.css";
import "./Land.css";

const SignupForm = () => {
  return (
    <div className="login-box">
      <form>
        <div className="user-box">
          <input required name="email" type="text"/>
          <label>Email</label>
        </div>
        <div className="user-box">
          <input required name="phone" type="number"/>
          <label>Phone</label>
        </div>
        <div className="user-box">
          <input required name="password" type="password"/>
          <label>Password</label>
        </div>
        <Button type="submit" colorScheme="teal" variant="solid" marginTop="40px">
          Submit
        </Button>
      </form>
      <p>Don't have an account? <a href="" className="a2">Sign up!</a></p>
    </div>
  );
};

const Frontpage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  return (
    <div className="landing-page">
<header>
        <div className="container">
          <a href="#" className="logo">Tracenet</a>
          <ul className="links">
            <li>Home</li>
            <li>About Us</li>
            <li>Work</li>
            <li>Info</li>
            <li>
              <Button onClick={handleOpenDialog}>Get Started</Button>
            </li>
          </ul>
        </div>
      </header>
      <div className="content">
        <div className="container">
          <div className="info">
            <h1>Looking For Inspiration</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit nihil ullam nesciunt quidem iste, Repellendus odit nihil</p>
            <Button onClick={handleOpenDialog}>Button name</Button>
          </div>
          <div className="image">
            <img src="https://i.postimg.cc/65QxYYzh/001234.png" alt="Inspiration" />
          </div>
        </div>
      </div>     
       <Modal isOpen={isOpen} onClose={handleCloseDialog}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign up</ModalHeader>
          <ModalBody>
            <SignupForm />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" variant="ghost" onClick={handleCloseDialog}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Frontpage;
