import React from "react";
import "../styles/main.scss";
import { Link } from 'react-router-dom';

export function Button() {
    return(
        <Link to='contact'>
            <button className="btn">
                Contact
            </button>
        </Link>
    );
}