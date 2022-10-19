import React, { useState } from 'react'
import Axios from "axios"
import { useNavigate } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

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
        <form>
            <Button onClick={(e) => handleSubmit(e)}> Play </Button>
        </form>
    );
}
