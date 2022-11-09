import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './Game.css'
import { Button, SimpleGrid, Center, Box, Heading, useToast, position } from '@chakra-ui/react'

export default function Game() {
    const { state: { trivia } = {} } = useLocation();
    const [count, setCount] = useState(0);
    const [answers, setAnswers] = useState();
    const [score, setScore] = useState(0);
    const navigate = useNavigate()

    const correctToast = useToast({
        title: 'Correct Answer!',
        duration: 3000,
        isClosable: true,
        status: "success",
        position: "top"
    })

    const incorrectToast = useToast({
        title: 'Wrong Answer!',
        duration: 3000,
        isClosable: true,
        status: "error",
        position: "top"
    })

    // https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    const shuffleAnswers = (a) => {
        // for (let i = a.length - 1; i > 0; i--) {
        //     const j = Math.floor(Math.random() * (i + 1));
        //     [a[i], a[j]] = [a[j], a[i]];
        // }
        return a;
    };

    useEffect(() => {
        setAnswers(shuffleAnswers([trivia[count].correct_answer, ...trivia[count].incorrect_answers]))
    }, [count])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.value == trivia[count].correct_answer) {
            setScore(score + 1);
            correctToast();
        }
        else
            incorrectToast();

        if (count == trivia.length-1) {
            navigate('/FinalScore', {state:{ score:score }});
        }
        else
            setCount(count + 1);
    }
    
    return (
        <div>
            <Box
                color='black'
                bgGradient="linear(to-l, #FF9760, #FFE57A)"
                minWidth='max-content'
                minH={'665px'}
                textAlign='center'
            > 
                <br></br>

                <Heading size='2xl'>Trivia Game</Heading>

                <br></br>

                <Heading size='lg'>{window.atob(trivia[count].question)}</Heading>
                <br></br>

                <Heading size='md'>Score = {score}</Heading>
                <br></br>

                { answers ? (
                    <Center>
                        <SimpleGrid columns={2} spacing={5}>
                            <Box height='50px'> <Button size='lg' onClick={(e) => handleSubmit(e)} type="submit" value={answers[0]}>{window.atob(answers[0])}</Button> </Box>
                            <Box height='50px'> <Button size='lg' onClick={(e) => handleSubmit(e)} type="submit" value={answers[1]}>{window.atob(answers[1])}</Button> </Box>
                            <Box height='50px'> <Button size='lg' onClick={(e) => handleSubmit(e)} type="submit" value={answers[2]}>{window.atob(answers[2])}</Button> </Box>
                            <Box height='50px'> <Button size='lg' onClick={(e) => handleSubmit(e)} type="submit" value={answers[3]}>{window.atob(answers[3])}</Button> </Box>
                        </SimpleGrid>
                    </Center>
                    ) : (
                    <button></button>
                )}
            </Box>
        </div>
    );
}
