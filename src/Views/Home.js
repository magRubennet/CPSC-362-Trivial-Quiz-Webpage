import React from 'react'
import { Box, Text, Center, Container, Flex } from '@chakra-ui/react';


export default function Home() {
    return (

        <div> 

            <Container bg="#9DC4FB" maxW="full" mt={0} bg="#FB9C37" centerContent overflow="hidden">
                <Flex>
                    <Box
               bg="#FFD117"
            // bgGradient="linear(to-l, #FF9760, #FFE57A)"
              color="black"
              borderRadius="lg"
              m={{ sm: 4, md: 16, lg: 100 }}
              p={{ sm: 5, md: 5, lg: 190 }}>
                        <Text as='b' fontSize='40' >
                            <Center>   The Greatest Trivia Game of All time </Center>
                        </Text> 
                            <h1> This is the home page.
                                Click Game to begin the trivia.</h1>
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