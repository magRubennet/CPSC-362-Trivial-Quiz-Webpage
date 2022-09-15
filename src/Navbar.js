import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
    <nav>
        <Link to="/"></Link>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/game">Game</Link></li>
        </ul>
    </nav>
    )
}