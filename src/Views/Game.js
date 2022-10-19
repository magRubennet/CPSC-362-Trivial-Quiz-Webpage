import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './Game.css'
import { Button, ButtonGroup } from '@chakra-ui/react'

export default function Game() {
    const { state: { trivia } = {} } = useLocation();
    const [count, setCount] = useState(0);
    const [questions, setQuestions] = useState()

    const shuffleQuestions = (temp) => {
        // TODO: implement shuffled questions array
        return temp;
    };

    useEffect(() => {
        setQuestions(shuffleQuestions([trivia[count].correct_answer, ...trivia[count].incorrect_answers]))
        console.log(questions);
    }, [count])

    const handleSubmit = (e) => {
        e.preventDefault();
        setCount(count + 1);
    }
    
    return (
        <div>
            <h1 className="center">Trivia Game</h1>

            <h2 className="center">{trivia[count].question}</h2>
            
            { questions ? (
                <form onSubmit={(e) => handleSubmit(e)}>
                    <ButtonGroup variant='outline' spacing='8'>
                        <Button type="submit">{questions[0]}</Button> <br></br>
                        <Button type="submit">{questions[1]}</Button> <br></br>
                        <Button type="submit">{questions[2]}</Button> <br></br>
                        <Button type="submit">{questions[3]}</Button> <br></br>
                    </ButtonGroup>
                </form>
                ) : (
                <button></button>
            )}

        </div>
    );
}
