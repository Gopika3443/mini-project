import React, { useEffect, useState } from 'react';
import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import './MissingList.css';
import { Link } from 'react-router-dom';

function FoundList() {
  const [lost, setLost] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchLostData = async () => {
      try {
        const response = await axios.get('https://tracenet.onrender.com/getFoundData');
        if (response) {
          setLost(response.data.lostdata);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchLostData();
  }, []);

  const filteredLost = lost.filter((person) => {
    const name = person.name.toLowerCase();
    return name.includes(searchQuery.toLowerCase());
  });

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <Flex as="nav" p={4} className="bg" color="white" alignItems="center">
        <Image src="/tracelogo.jpg" boxSize="35px" mr={2} />
        <Heading as="h1" fontSize="xl" fontWeight="bold">
          Tracenet
        </Heading>
        <Flex ml="auto" alignItems="center">
          {/* Add your login, add case, and found list links here */}
          <Text mr={4} _hover={{ textDecoration: 'underline' }}>
          <Link to="/Home">Add Case</Link>
          </Text>
          <Text _hover={{ textDecoration: 'underline' }}>
          <Link to="/Cases">Missing List</Link>
            </Text>
        </Flex>
      </Flex>

      {/* Content */}
      <Box p={8}>
        {/* Search Bar */}
        <Flex mb={4}>
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={handleSearch}
            style={{
              padding: '8px',
              fontSize: '16px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              marginRight: '8px',
              width: '300px',
            }}
          />
          <button className="bg"
            style={{
              padding: '8px 16px',
              fontSize: '16px',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: '#007bff',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <FaSearch  style={{ marginRight: '4px' }} />
            Search
          </button>
        </Flex>

        {/* Missing People List */}
        <div className="newspaper-container">
          {filteredLost.map((person) => {
            const imageData = person.img.data.data;
            let base64String = '';

            for (let i = 0; i < imageData.length; i++) {
              base64String += String.fromCharCode(imageData[i]);
            }

            const encodedString = btoa(base64String);

            return (
              <Box key={person._id} className="newspaper-card">
                <Image
                  src={`data:image/png;base64,${encodedString}`}
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

export default FoundList;
