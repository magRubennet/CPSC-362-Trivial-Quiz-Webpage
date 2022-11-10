import React from 'react'
import { useLocation } from 'react-router-dom';
import { ButtonGroup, Spacer, Box, Text, Center, Flex, Button, Container, Heading} from '@chakra-ui/react';

export default function Game() {
    const { state: { score } = {} } = useLocation();

    return(
        <div>

            <Container 
            bg="#9DC4FB" 
            maxW="full" 
            mt={0} 
            centerContent 
            overflow="hidden">
                <Box
             //   bg="#02054B"
                  bgGradient="linear(to-l, #FF9760, #FFE57A)"
                  color="black"
                  borderRadius="lg"
                  m={{ sm: 4, md: 16, lg: 61 }}
                  p={{ sm: 5, md: 5, lg: 250 }}>
                     <Heading ><Center> 
                        
                        Congratulations. Your score is {score}
                        
                    </Center></Heading>
                </Box>
            </Container>
             

            {/* Congratulations. Your score is {score} */}
        </div>
    );
}