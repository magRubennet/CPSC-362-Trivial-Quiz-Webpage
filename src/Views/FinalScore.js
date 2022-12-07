import React from 'react'
import { useLocation } from 'react-router-dom';
import { Box, Center, Container, Heading, Button} from '@chakra-ui/react';
import { FaFacebook, FaTwitter } from 'react-icons/fa'

export default function Game() {
    const { state: { score } = {} } = useLocation();

    return(
        <div>

            <Container 
            bg="#70A3DE" 
            maxW="full" 
            mt={0} 
            centerContent 
            overflow="hidden">
                <Box
                  bg="#A4DE70"
                  color="black"
                  borderRadius="lg"
                  m={{ sm: 4, md: 16, lg: 61 }}
                  p={{ sm: 5, md: 5, lg: 250 }}>
                     <Heading ><Center> 
                    </Center></Heading>
                     Congratulations. Your score is {score}. You are amazing!
                     <br></br>
                     <br></br>
                     Share your score and let everyone know why this is the greatest trivia game of all time!
                     <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
                        Facebook
                    </Button>
                    <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
                        Twitter
                    </Button>
                </Box>
            </Container> 
        </div>
    );
}