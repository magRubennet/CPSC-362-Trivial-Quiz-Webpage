import React from 'react'
import { useLocation } from 'react-router-dom';

export default function Game() {
    const { state: { score } = {} } = useLocation();

    return(
        <div>
            Congratulations. Your score is {score}
        </div>
    );
}