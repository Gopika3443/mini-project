import React, { useEffect, useState } from 'react';
import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';

function MissingPeoplePage() {
  const [lost, setLost] = useState([]);

  useEffect(() => {
    const fetchLostData = async () => {
      try {
        const response = await axios.get('https://tracenet.onrender.com/getLostData');
        setLost(response.data.message);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLostData();
  }, [lost]);

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
        <VStack spacing={4} align="start">
          {lost.map((person) => {
            const base64String = btoa(
              String.fromCharCode(...new Uint8Array(person.img.data.data))
            );

            return (
              <Flex
                key={person._id}
                bg="gray.100"
                p={4}
                borderRadius="md"
                alignItems="center"
                _hover={{ backgroundColor: 'gray.200' }}
              >
                <Image
                  src={`data:image/png;base64,${base64String}`}
                  alt={person.name}
                  boxSize="100px"
                  objectFit="cover"
                  mr={4}
                />
                <VStack align="start" spacing={2}>
                  <Text fontSize="xl" fontWeight="bold">
                    {person.name}
                  </Text>
                  <Text>
                    <strong>Age:</strong> {person.age}
                  </Text>
                  <Text>
                    <strong>Gender:</strong> {person.gender}
                  </Text>
                  <Text>
                    <strong>Location:</strong> {person.location}
                  </Text>
                  <Text>
                    <strong>Description:</strong> {person.description}
                  </Text>
                </VStack>
              </Flex>
            );
          })}
        </VStack>
      </Box>
    </div>
  );
}

export default MissingPeoplePage;
