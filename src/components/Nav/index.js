import React from "react";
import NavMessage from "../NavMessage";
import "./style.css";

function Nav(props) {
    return (
        <nav className="navbar">
        <ul>
            <li className="brand">
            <a href="/">Clicky Game</a>
            </li>
         <NavMessage score={props.score} topScore={props.topScore} />
         <li>
             Score: {props.score} | topScore: {props.topScore}
        </li>   
        </ul>
        </nav>
    );
}

export default Nav;