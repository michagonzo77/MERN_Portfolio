import { Link } from 'react-router-dom';
import michaellogo from "../static/images/MichaelLogo.png"
import React, {useEffect} from "react";



export const Nav = (props) => {

    return (
        <div class="mainNav">
            <div className="d-flex justify-content-between">
                <div className="logoNav">
                    <img class="logo" src={michaellogo}></img>
                </div>
                <div className="linksNav">
                    <ul class="d-flex list-unstyled gap-5">
                        <li><a href="/#aboutLink">About</a></li>
                        <li><a href="https://www.linkedin.com/in/michagonzo/" target="_blank">LinkedIn</a></li>
                        <li><a href="https://github.com/michagonzo77" target="_blank">GitHub</a></li>
                        <li><a href="/#projectsSection">Projects</a></li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}