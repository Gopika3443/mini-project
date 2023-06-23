import React, { useEffect, useState } from 'react';
import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import './MissingList.css';

function MissingPeoplePage() {
  const [lost, setLost] = useState([]);

  useEffect(() => {
    const fetchLostData = async () => {
      try {
        const response = await axios.get('https://tracenet.onrender.com/getLostData');
        if (response) {
          setLost(response.data.lostdata);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchLostData();
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
      <Flex as="nav" p={4} bg="blue.500" color="white" alignItems="center">
        <Image src="/tracelogo.jpg" boxSize="35px" mr={2} />
        <Heading as="h1" fontSize="xl" fontWeight="bold">
          Tracenet
        </Heading>
        <Flex ml="auto" alignItems="center">
          {/* Add your login, add case, and found list links here */}
          <Text mr={4} _hover={{ textDecoration: 'underline' }}>
            Add Case
          </Text>
          <Text _hover={{ textDecoration: 'underline' }}>Found List</Text>
        </Flex>
      </Flex>

      {/* Content */}
      <Box p={8}>
      <Heading as="h2" fontSize="2xl" mb={4}>
        Missing People
      </Heading>
      <div className="newspaper-container">
        {lost &&
          lost.map((person) => {
            const base64String = btoa(
              String.fromCharCode(...new Uint8Array(person.img.data.data))
            );

            return (
              <Box key={person._id} className="newspaper-card">
                <Image
                  src={`data:image/png;base64,${base64String}`}
                  alt={person.name}
                />
                <div className="newspaper-card-content">
                  <Heading as="h3" fontSize="xl" fontWeight="bold" mb={2}>
                    {person.name}
                  </Heading>
                  <Text fontSize="lg">
                    <strong>Age:</strong> {person.age}
                  </Text>
                  <Text fontSize="lg">
                    <strong>Gender:</strong> {person.gender}
                  </Text>
                  <Text fontSize="lg">
                    <strong>Location:</strong> {person.location}
                  </Text>
                  <Text fontSize="lg">
                    <strong>Description:</strong> {person.description}
                  </Text>
                </div>
              </Box>
            );
          })}
      </div>
    </Box>
  </div>
  );
}

export default MissingPeoplePage;
