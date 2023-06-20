import React, { useState } from 'react';
import { Box, Text, Collapse, IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box position="fixed" top={0} left={0} right={0} zIndex={999}>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p={4}
          bg="blue.500"
          color="white"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text>About Us</Text>
          <IconButton
            icon={<CloseIcon />}
            aria-label="Close"
            variant="ghost"
            onClick={handleToggle}
          />
        </Box>
        <Box p={4} bg="blue.300" color="white">
          <Text>
            Tracenet is a website designed to help people find their lost ones. We provide a platform for users to report missing persons and connect with others who may have information about their loved ones. Our mission is to reunite families and bring closure to those who are searching. Thank you for using Tracenet!
          </Text>
        </Box>
      </Collapse>
      <Box bg="blue.500" color="white" p={4} textAlign="center" onClick={handleToggle} cursor="pointer">
        <Text>About Us</Text>
      </Box>
    </Box>
  );
};

export default AboutUs;
