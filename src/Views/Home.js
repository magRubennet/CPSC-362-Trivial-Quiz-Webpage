import React from 'react'
import { Box, Text, Center } from '@chakra-ui/react';


export default function Home() {
    return (

        <div> 

         <Box
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

        </Box> 


        </div>  

    );
}