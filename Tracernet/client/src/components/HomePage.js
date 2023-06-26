import React from 'react';
import { Heading, Text, Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="container background">
      <div className='left'>
        <div className="left-side">
          <div className="background-image"></div>
          <div className="content">
            <Heading as="h1" size="xl" className="heading">Welcome to Tracenet!</Heading>
          </div>
        </div>
        <div className="right-side">
          <Text fontSize="xl" className="text">Have you lost someone? Click the button below to report a lost person.</Text>
          <Button as={Link} to="/Lost" className="button">Report Lost</Button>
          <Text fontSize="xl" className="text">Have you found someone? Click the button below to report a found person.</Text>
          <Button as={Link} to="/Lost" className="button">Report Found</Button>
        </div>
      </div>
      <div className='right'>
      <a href="https://imgbb.com/"><img src="https://i.ibb.co/w607Jrx/rag-dolls-one-red-removebg-preview.png" alt="rag-dolls-one-red-removebg-preview" border="0"/></a>
      </div>
    </div>
  );
};

export default HomePage;
