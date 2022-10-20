import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './Game.css'
import { Button, SimpleGrid, Center, Box } from '@chakra-ui/react'

export default function Game() {
    const { state: { trivia } = {} } = useLocation();
    const [count, setCount] = useState(0);
    const [questions, setQuestions] = useState();
    const [score, setScore] = useState(0);
    const navigate = useNavigate()

    const shuffleQuestions = (temp) => {
        // TODO: implement shuffled questions array
        return temp;
    };

    useEffect(() => {
        setQuestions(shuffleQuestions([trivia[count].correct_answer, ...trivia[count].incorrect_answers]))
    }, [count])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.value == trivia[count].correct_answer)
            setScore(score + 1)
        if (count == trivia.length-1) {
            navigate('/FinalScore', {state:{ score:score }});
        }
        else
            setCount(count + 1);
    }
    
    return (
        <div>
            <h1 className="center">Trivia Game</h1>
            <br></br>

            <Center> <h2>{trivia[count].question}</h2> </Center>
            <br></br>

            <Center> <h2>Score = {score}</h2>  </Center>
            <br></br>

            { questions ? (
                <Center>
                    <SimpleGrid columns={2} spacing={5}>
                        <Box height='50px'> <Button onClick={(e) => handleSubmit(e)} type="submit" value={questions[0]}>{questions[0]}</Button> </Box>
                        <Box height='50px'> <Button onClick={(e) => handleSubmit(e)} type="submit" value={questions[1]}>{questions[1]}</Button> </Box>
                        <Box height='50px'> <Button onClick={(e) => handleSubmit(e)} type="submit" value={questions[2]}>{questions[2]}</Button> </Box>
                        <Box height='50px'> <Button onClick={(e) => handleSubmit(e)} type="submit" value={questions[3]}>{questions[3]}</Button> </Box>
                    </SimpleGrid>
                </Center>
                ) : (
                <button></button>
            )}

        </div>
    );
}
