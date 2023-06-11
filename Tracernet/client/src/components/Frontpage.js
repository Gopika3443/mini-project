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
} from "@chakra-ui/react";


const Frontpage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSignup = () => {
      // Handle signup logic here
      console.log("Username:", username);
      console.log("Password:", password);
      handleCloseModal(); // Close the modal
    };
    const handleOpenModal = () => {
        setIsOpen(true);
      };
    
      const handleCloseModal = () => {
        setIsOpen(false);
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
              <Button onClick={handleOpenModal}>Get Started</Button>
            </li>
          </ul>
        </div>
      </header>
      <div className="content">
        <div className="container">
          <div className="info">
            <h1>TRACENET</h1>
            <p>The Elite Lost and Found - Lost Today, Found Tomorrow</p>
            <Button onClick={handleOpenDialog}>Sign In</Button>
          </div>
          <div className="image">
            <img src="https://i.postimg.cc/65QxYYzh/001234.png" alt="Inspiration" />
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sign Up</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSignup}>
            Sign Up
          </Button>
          <Button variant="ghost" onClick={handleCloseModal}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    </div>
  );
};

export default Frontpage;
