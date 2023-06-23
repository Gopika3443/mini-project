import React from 'react';
import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';

// Sample data for missing people
const MissingList = [
  {
    id: 1,
    name: 'John Doe',
    age: 25,
    gender: 'Male',
    location: 'City A',
    description: 'Tall with brown hair',
    image: 'https://media.istockphoto.com/id/1319763895/photo/smiling-mixed-race-mature-man-on-grey-background.jpg?s=612x612&w=0&k=20&c=ZiuzNX9LhTMMcRFrYNfq_zFR7O_aH-q7x1L5elko5uU=',
  },
  {
    id: 2,
    name: 'Jeny Doe',
    age: 25,
    gender: 'Female',
    location: 'City b',
    description: 'Tall with brown hair',
    image: 'https://media.istockphoto.com/id/1289220545/photo/beautiful-woman-smiling-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=qmOTkGstKj1qN0zPVWj-n28oRA6_BHQN8uVLIXg0TF8=',
  },
  // Add more missing people data here
];

function MissingPeoplePage() {
  return (
    <div>
      {/* Navigation Bar */}
      <Flex as="nav" p={4} bg="blue.500" color="white" alignItems="center">
        <Image src="./public/tracelogo.jpg" boxSize="35px" mr={2} />
        <Heading as="h1" fontSize="xl" fontWeight="bold">
          Tracenet
        </Heading>
        <Flex ml="auto" alignItems="center">
          {/* Add your login, add case, and found list links here */}
          <Text mr={4} _hover={{ textDecoration: 'underline' }}>Add Case</Text>
          <Text _hover={{ textDecoration: 'underline' }}>Found List</Text>
        </Flex>
      </Flex>

      {/* Content */}
      <Box p={8}>
        <Heading as="h2" fontSize="2xl" mb={4}>
          Missing People
        </Heading>
        <VStack spacing={4} align="start">
          {MissingList.map((person) => (
            <Flex
              key={person.id}
              bg="gray.100"
              p={4}
              borderRadius="md"
              alignItems="center"
              _hover={{ backgroundColor: 'gray.200' }}
            >
              <Image src={person.image} alt={person.name} boxSize="100px" objectFit="cover" mr={4} />
              <VStack align="start" spacing={2}>
                <Text fontSize="xl" fontWeight="bold">{person.name}</Text>
                <Text><strong>Age:</strong> {person.age}</Text>
                <Text><strong>Gender:</strong> {person.gender}</Text>
                <Text><strong>Location:</strong> {person.location}</Text>
                <Text><strong>Description:</strong> {person.description}</Text>
              </VStack>
            </Flex>
          ))}
        </VStack>
      </Box>
    </div>
  );
}

export default MissingPeoplePage;
