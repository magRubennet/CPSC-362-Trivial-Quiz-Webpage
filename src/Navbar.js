import React from 'react'
import { Link } from "react-router-dom"
import './Navbar.css';
//import { Tabs, TabList, TabPanels, Tab, TabPanel, Text, IconButton,} from '@chakra-ui/react'
import { ButtonGroup, Spacer, Box, Flex, Button, useDisclosure,} from '@chakra-ui/react';

export default function Navbar() {

 // const { isOpen, onToggle } = useDisclosure();

    return (
      <>
        <div className="NavbarEx">

      <Box>
        <Flex 
        minWidth='max-content' 
        alignItems='center' 
        gap='2'
        bgGradient="linear(to-l, #FF5900, #FFD117)"
        minH={'40px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        >
    
          <ButtonGroup gap='2'>
            <Button 
            fontSize={'sm'}
            fontWeight={600}
            color={'black'}
            bg={'orange.400'}
            href={'#'}
            _hover={{bg: 'yellow.300',}}
            border='1px' borderColor='black'
            >

            <Link to="/">Home</Link>

            </Button>
            <Button 
            fontSize={'sm'}
            fontWeight={600}
            color={'black'}
            bg={'blue.400'}
            href={'#'}
            _hover={{bg: 'purple.300',}}
            border='1px' borderColor='black'
            >
              
              <Link to="/GameSetup">Game</Link>
            
            </Button>
          </ButtonGroup>

        <Spacer />
        
          <ButtonGroup gap='2'>
            <Button colorScheme='red' border='1px' borderColor='black'>Sign Up</Button>
            <Button colorScheme='red' border='1px' borderColor='black'>Log in</Button>
          </ButtonGroup>
        </Flex>

      </Box>

         {/* <Tabs isFitted variant='unstyled'>
            <TabList mb='1em'>
              <Tab _selected={{ color: 'white', bg: 'blue.500' }}> <Link to="/">Home</Link> </Tab>
              <Tab _selected={{ color: 'white', bg: 'green.400' }}> <Link to="/GameSetup">Game</Link> </Tab>
              <Tab _selected={{ color: 'white', bg: 'green.400' }}> <Link to="*">Temp</Link> </Tab>
            </TabList>
          </Tabs>   */}

        </div>
      </>
    );
}