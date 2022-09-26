import React, { useState } from 'react'
import Axios from "axios"
import './Game.css'

export default function Game() {
    const [trivia, setTrivia] = useState({correct_answer: "", incorrect_answers: ""})
    const [questions, setQuestions] = useState("")

    const getTrivia = async() => {
        try {
            const response = await Axios.get("https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple");
            setTrivia(response.data.results[0]);
            console.log(trivia)
        } catch (error) {
            console.log(error);
            setTrivia(null);
        }
    };
    
    // const shuffleQuestions = () => {
    //     const temp = [trivia.correct_answer, ...trivia.incorrect_answers];
    //     // TODO: implement shuffled questions array
    //     setQuestions(temp);
    // };

    const loadTrivia = () => {
        getTrivia();
        // shuffleQuestions();
    };

    return (
        <div>
            <button onClick={loadTrivia}> load </button>

            <h1 className="center">Trivia Game</h1>

            <h3 className="center">{trivia.question}</h3>
            <ul className="answer-buttons">
                <li> <button>{trivia.correct_answer}</button> </li>
                <li> <button>{trivia.incorrect_answers[0]}</button> </li>
                <li> <button>{trivia.incorrect_answers[1]}</button> </li>
                <li> <button>{trivia.incorrect_answers[2]}</button> </li>
            </ul>
        </div>
    );
}
