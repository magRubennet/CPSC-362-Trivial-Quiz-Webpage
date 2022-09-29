import React from 'react'
import { Link } from "react-router-dom"
import './Navbar.css';

export default function Navbar() {
    return (
    <><nav>
            {/* <Link to="/"></Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/game">Game</Link></li>
            </ul> */}

        </nav><div class="NavbarEx">

                <a href="Home" class="Leftbox">Home</a>
                <a href="#">Game</a>
                {/* <a href="#">Next</a>
                <a href="#" class="Rightbox">Tutorial</a> */}

            </div></>

    )
}