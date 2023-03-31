import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text, Center, Square, Stack } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { DiReact, DiAndroid, DiNodejs  } from 'react-icons/di'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  
} from '@chakra-ui/react'


function Profile() {

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <>
   
    <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
      <Box alignSelf="center" px="32" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          7th
        </Heading>
        <Text fontSize="2xl" color="gray.400"> Semester</Text>
      </Box>
      <Box alignSelf="center" px="32" py="16">
        <Text fontWeight="bold" fontSize="2xl">Web and Mobile developer.</Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
          <Flex rounded="xl" direction="column" mt={6} bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bgGradient: 'linear-gradient(90deg, rgba(150,83,185,1) 0%, rgba(252,70,107,1) 100%)' }}>
            <Icon color=" black" p="4" as={DiAndroid} w="24" h="24" />
            <Text color="black" p="4" fontSize="xl" fontWeight="bold">
              React Native
            </Text>
          </Flex>
          <Flex rounded="xl" direction="column" mt={6} ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bgGradient: 'linear-gradient(90deg, rgba(150,83,185,1) 0%, rgba(252,70,107,1) 100%)', }}>
            <Icon color="black" p="4" as={DiReact} w="24" h="24" />
            <Text color="black" p="4" fontSize="xl" fontWeight="bold">
              ReactJS
            </Text>
          </Flex>
          <Flex rounded="xl" direction="column" mt={6} ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bgGradient: 'linear-gradient(90deg, rgba(150,83,185,1) 0%, rgba(252,70,107,1) 100%)' }}>
            <Icon color="black" p="4" as={DiNodejs} w="24" h="24" />
            <Text color="black" p="4" fontSize="xl" fontWeight="bold">
              NodeJS
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  </>
  )
}

export default Profile
