import React from 'react'
import { Box, Text, Center, Container, Flex } from '@chakra-ui/react';


export default function Home() {
    return (

        <div> 

            <Container  bg="#F9B872" maxW="full" mt={0}  centerContent overflow="hidden">
                <Flex>
                    <Box
                    bg="#B6E1E7"
            //   bg="#FFD117"   bg="#FB9C37"
            // bgGradient="linear(to-l, #F9B872, #FAE7A5)"
              color="black"
              borderRadius="lg"
              m={{ sm: 4, md: 16, lg: 100 }}
              p={{ sm: 5, md: 5, lg: 190.5 }}>
                        <Text as='b' fontSize='40' >
                            <Center>   The Greatest Trivia Game of All time </Center>
                        </Text> 
                            <Center> Click 'Game' tab to set up and begin the trivia game.</Center>
                    </Box>
                </Flex>
            </Container>

         {/* <Box
            color='black'
            bgGradient="linear(to-l, #FF9760, #FFE57A)"
            minWidth='max-content'
            minH={'665px'}
         >  

            <Text as='b' fontSize='40'>
             <Center>   The Greatest Trivia Game of All time </Center>
            </Text> 
            <h1> This is the home page
                Click Game to begin the trivia.</h1>

        </Box>  */}


        </div>  

    );
}