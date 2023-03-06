import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { DiReact, DiAndroid, DiDjango } from 'react-icons/di'


function Profile() {

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
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
          <Flex rounded="xl" direction="column" mt={6} bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bgGradient: 'linear(to-r, cyan.400, blue.500, purple.600)', }}>
            <Icon color=" black" p="4" as={DiAndroid} w="24" h="24" />
            <Text color="black" p="4" fontSize="xl" fontWeight="bold">
              React Native
            </Text>
          </Flex>
          <Flex rounded="xl" direction="column" mt={6} ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bgGradient: 'linear(to-r, cyan.400, blue.500, purple.600)', }}>
            <Icon color="black" p="4" as={DiReact} w="24" h="24" />
            <Text color="black" p="4" fontSize="xl" fontWeight="bold">
              React
            </Text>
          </Flex>
          {/* <Flex rounded="xl" direction="column" mt={6} ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bgGradient: 'linear(to-r, cyan.400, blue.500, purple.600)', }}>
            <Icon color="black" p="4" as={DiDjango} w="24" h="24" />
            <Text color="black" p="4" fontSize="xl" fontWeight="bold">
              Django
            </Text>
          </Flex> */}

        </Flex>

      </Box>
    </Flex>
  )
}

export default Profile