import React from 'react';
import { Heading, Text, Button } from "@chakra-ui/react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="container background">
      <div className="left-side">
        <div className="background-image"></div>
        <div className="content">
          <Heading as="h1" size="xl" className="heading">Welcome to Tracenet!</Heading>
        </div>
      </div>
      <div className="right-side">
        <Text fontSize="xl" className="text">Have you lost someone? Click the button below to report a lost person.</Text>
        <Button colorScheme="customGrey" size="lg" className="button">Report Lost</Button>
        <Text fontSize="xl" className="text">Have you found someone? Click the button below to report a found person.</Text>
        <Button colorScheme="customGrey" size="lg" className="button">Report Found</Button>
      </div>
    </div>
  );
};

export default HomePage;
