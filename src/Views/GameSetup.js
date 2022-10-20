import React, { useState } from 'react'
import Axios from "axios"
import { useNavigate } from 'react-router-dom'
import { Button, Stack, Select, Container } from '@chakra-ui/react'

export default function GameSetup() {
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        try {
            e.preventDefault();
            const response = await Axios.get("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple");
            console.log(response.data.results)
            navigate('/Game', {state:{ trivia:response.data.results }});

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <Container padding='6'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <Stack spacing={6} direction='column'>
                        <Select placeholder='Choose a topic...' size='lg' />
                        <Select placeholder='Choose difficulty...' size='lg' />
                        <Button type='submit'> Play </Button>
                    </Stack> 
                </form>
            </Container>
        </>
        
    );
}
