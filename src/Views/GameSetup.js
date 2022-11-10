import React from 'react'
import Axios from "axios"
import { useNavigate } from 'react-router-dom'
import { Button, Stack, Select, Container, Box } from '@chakra-ui/react'

export default function GameSetup() {
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        try {
            e.preventDefault();
            const response = await Axios.get("https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple&encode=base64");
            console.log(response.data.results)
            navigate('/Game', {state:{ trivia:response.data.results }});

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {/* <br></br>
            <br></br>
            <br></br> */}
            <Box
                color='black'
                bgGradient="linear(to-l, #C1FFB7, #B7D8FF)"
                minWidth='max-content'
                minH={'665px'}
                textAlign='center'
            > 
            <Container padding='6'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <Stack spacing={6} direction='column'>
                        <Select  border='1px' borderColor='black' placeholder='Choose a topic...' size='lg' />
                        <Select  border='1px' borderColor='black' placeholder='Choose difficulty...' size='lg' />
                        <Button bg={'blue.400'}
                                _hover={{bg: 'gray.400',}}
                                border='1px' borderColor='black' type='submit'> Play </Button>
                    </Stack> 
                </form>
            </Container>
            </Box>
        </>
        
    );
}
