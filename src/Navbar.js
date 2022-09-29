import React from 'react'
import { Link } from "react-router-dom"
import './Navbar.css';

export default function Navbar() {
    return (
    <><nav>
            
        </nav>
        <div class="NavbarEx">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/game">Game</Link></li>
            </ul>

                {/* <a href="Home" class="Leftbox">Home</a>
                <a href="#">Game</a> */}
                {/* <a href="#">Next</a>
                <a href="#" class="Rightbox">Tutorial</a> */}

            </div></>

    )
}