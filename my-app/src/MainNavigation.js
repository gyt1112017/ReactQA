// src/MainNavigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './MainNavigation.css';
import { useContext } from "react";
import { AppContext } from "./context";


function MainNavigation() {
    const { theme } = useContext(AppContext);

    return (
        <div>
            <div>Theme name is {theme}</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Blogs</Link> {/* Link to the Blogs page */}
                    </li>
                    <li>
                        <Link to="/new-blog">New Blog</Link> {/* Link to the New Blog page */}
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default MainNavigation;
