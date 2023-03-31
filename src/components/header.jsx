import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/react'
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'
import photo from '../assets/photo.jpeg'
const Header = () => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1"
                w="300px" h="300px" alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient='linear-gradient(90deg, rgba(150,83,185,1) 0%, rgba(252,70,107,1) 100%)' bgClip='text' >Faaiz Aslam</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}> A self-motivated programmer with a passion to <br /> learn new things by experimenting 🗣</Text>
                    <Button mt={8}  colorScheme='pink'
                    onClick={() => window.location = 'mailto:yourmail@domain.com'}>Contact</Button>

                </Box> 
                <Image
                borderRadius='full'
                    boxSize='300px'
                    objectFit='cover'
                    src={photo}
                    alt='logo'
                />
            </Flex>

        </Stack>
    )
}

export default Header