import React from 'react'
import { Link } from "react-router-dom"
import './Navbar.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function Navbar() {
    return (
      <>
        <div className="NavbarEx">
        
        <Tabs isFitted variant='unstyled'>
            <TabList mb='1em'>
              <Tab _selected={{ color: 'white', bg: 'blue.500' }}> <Link to="/">Home</Link> </Tab>
              <Tab _selected={{ color: 'white', bg: 'green.400' }}> <Link to="/GameSetup">Game</Link> </Tab>
              <Tab _selected={{ color: 'white', bg: 'green.400' }}> <Link to="*">Three</Link> </Tab>
            </TabList>
          
        </Tabs>

        </div>
      </>
    );
}