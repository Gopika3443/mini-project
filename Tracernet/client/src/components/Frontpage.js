import React, { useState } from 'react';
import "./Frontpage.css";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  useStyleConfig, // Import useStyleConfig hook
} from "@chakra-ui/react";
import Login from './Login';
import SignUp from './SignUp';


const Frontpage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const [isSignUpFormVisible, setIsSignUpFormVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  const handleSignup = () => {
    // Handle signup logic here
    console.log("Username:", username);
    console.log("Password:", password);
    handleCloseDialog(); // Close the modal
  };

  const handleToggleLoginForm = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };

  const handleToggleSignUpForm = () => {
    setIsSignUpFormVisible(!isSignUpFormVisible);
  };

  const handleLogin = () => {
    // Handle login logic here
    console.log("Username:", username);
    console.log("Password:", password);
    handleCloseDialog(); // Close the modal
  };

  const dialogStyles = useStyleConfig("Modal", { variant: "neumorphism" });
  const customModalContentStyles = {
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };


  return (
    <div className="landing-page">
      <header>
        <div className="container">
          <div className="logo-container">
            <img src="tracenetlogo.jpg" className="logosize"/>
          <a href="#" className="logo">Tracenet</a>
          </div>
          <ul className="links">
            <li>Home</li>
            <li>About Us</li>
            <li>Add Case</li>
            <li>Feedback</li>
            <li>
              <Button onClick={handleOpenDialog}>Get Started</Button>
            </li>
          </ul>
        </div>
      </header>
      <div className="content">
        <div className="container">
          <div className="info">
            <h1>TRACENET</h1>
            <p>The Elite Lost and Found - Lost Today, Found Tomorrow</p>
            <Button onClick={handleOpenDialog}>Login</Button>
          </div>
          <div className="image">
            <img src="https://i.postimg.cc/65QxYYzh/001234.png" alt="Inspiration" />
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={handleCloseDialog}>
    <ModalOverlay />
    <ModalContent bg="transparent" boxShadow="none" borderRadius={0}>    
    <ModalBody p={0}>
      {isLoginFormVisible ? (
        <Login />
      ) : (
        <SignUp />
      )}
    </ModalBody>
    </ModalContent>
  </Modal>
    </div>
  );
};

export default Frontpage;
