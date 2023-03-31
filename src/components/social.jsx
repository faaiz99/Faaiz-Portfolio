import Icon from '@chakra-ui/icon'
import { HStack } from '@chakra-ui/layout'
import React from 'react'
import { FaLinkedin, FaStackOverflow, FaGithub } from 'react-icons/fa'

function Social() {
  return (
    <HStack spacing="24">
      <Icon as={FaLinkedin} boxSize="50" onClick={() => window.open('https://linkedin.com/in/faaiz-aslam-203407195')} _hover={{ bgGradient: 'linear-gradient(90deg, rgba(150,83,185,1) 0%, rgba(252,70,107,1) 100%)', }}  padding='3px' borderRadius='5px' />
      <Icon as={FaGithub} boxSize="50" onClick={() => window.open('https://github.com/faaiz99')} _hover={{ bgGradient: 'linear-gradient(90deg, rgba(150,83,185,1) 0%, rgba(252,70,107,1) 100%)', }} borderRadius='5px' padding='3px'  />
      <Icon as={FaStackOverflow} boxSize="50" onClick={() => window.open('https://stackoverflow.com/users/12505891/faaiz-aslam')} _hover={{ bgGradient:'linear-gradient(90deg, rgba(150,83,185,1) 0%, rgba(252,70,107,1) 100%)', }} padding='3px' borderRadius='5px' />
    </HStack>
  )
}

export default Social