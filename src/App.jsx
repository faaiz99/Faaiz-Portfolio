import { Flex, Heading, IconButton, VStack, Spacer, useColorMode} from "@chakra-ui/react"
import { FaSun, FaMoon,FaGithub, FaLinkedin, FaStackOverflow, FaCode } from 'react-icons/fa';
import Header from "./components/header";
import Social from "./components/social";
import Profile from "./components/profile";
import Footer from "./components/footer";
function App() {
  const { colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading as='h4' size='md' fontWeight={'extrabold'}>{'<'}Faaiz{'/>'}</Heading>
        <Spacer></Spacer>
        <IconButton icon={<FaLinkedin />} isRound='true' onClick={()=>window.open('https://linkedin.com/in/faaiz-aslam-203407195')}></IconButton>
        <IconButton ml={2} icon={<FaGithub />} isRound='true' onClick={()=>window.open('https://github.com/faaiz99')}></IconButton>
        <IconButton ml={2} icon={<FaStackOverflow />} isRound='true' onClick={()=>window.open('https://stackoverflow.com/users/12505891/faaiz-aslam')}></IconButton>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
      <Profile></Profile>
      <Social></Social>
      <Footer></Footer>
    </VStack>
  )
}

export default App
