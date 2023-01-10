import { Link } from 'react-router-dom';
import React, { Component, useState } from "react";
import { Nav } from '../components/nav';
import { Hero } from '../components/hero';
import { About } from '../components/about';
import salesPinnerCode from '../static/images/salesPinnerCode.png'
import easierApplyCode from '../static/images/easierApplyCode.png'
import mernchingBandCode from '../static/images/mernchingBandCode.png'
import constellation from '../static/images/Frame 4.png'
import github from '../static/images/github-mark-white.png'
import salesPinnerSS2 from '../static/images/salesPinnerSS2.png'
import easierApplySS from '../static/images/easierApplySS.png'
import mernchingBandSS from '../static/images/mernchingBandSS.png'
import mongoose from '../static/images/logos/mongoose.png'
import express from '../static/images/logos/express.png'
import reactjs from '../static/images/logos/react.png'
import nodejs from '../static/images/logos/nodejs.png'
import python from '../static/images/logos/python.png'
import flask from '../static/images/logos/flask.png'
import mysql from '../static/images/logos/mysql.png'
import html5 from '../static/images/logos/html5.png'
import css3 from '../static/images/logos/css.png'
import jsimg from '../static/images/logos/js.png'
import git from '../static/images/logos/git.png'
import MichaelLogo from '../static/images/logos/MichaelLogo.png'


export const Home = (props) => {

    return (
        <main>
            <Nav></Nav>
            <Hero></Hero>
            <About></About>
            <div className="tasteOfCode container-fluid">
                <h2 class="fs-l">A Little Taste of Code</h2>
                <div className="row projectCards">
                    <div className="projectCard">
                        <div className="d-flex justify-content-center">
                            <img className="boxTest" src={salesPinnerCode}></img>
                        </div>
                        <div className="d-flex justify-content-center gap-3 align-items-center">
                            <img class="gitLogo" src={github}></img>
                            <p class="fs-m"><a href="https://github.com/michagonzo77/sales_pinner/blob/main/flask_app/static/js/script.js" target="_blank">Sales Pinner</a></p>
                        </div>
                    </div>
                    <div className="projectCard">
                        <div className="d-flex justify-content-center">
                            <img className="boxTest" src={easierApplyCode}></img>
                        </div>
                        <div className="d-flex justify-content-center gap-3 align-items-center">
                            <img class="gitLogo" src={github}></img>
                            <p class="fs-m"><a href="https://github.com/michagonzo77/EasierApply/blob/main/flask_app/linkedin.py" target="_blank">Easier Apply</a></p>
                        </div>
                    </div>
                    <div className="projectCard">
                        <div className="d-flex justify-content-center">
                            <img className="boxTest" src={mernchingBandCode}></img>
                        </div>
                        <div className="d-flex justify-content-center gap-3 align-items-center">
                            <img class="gitLogo" src={github}></img>
                            <p class="fs-m"><a href="https://github.com/michagonzo77/MERN_Portfolio/blob/main/client/src/views/MernchingBand.jsx" target="_blank">Portfolio</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="projectsSection">
                <div className="projectsRow">
                    <div className="leftProjectRow">
                        <p class="fs-l projectsRowTitle">Sales Pinner</p>
                        <p class="fs-s projectsRowText">Mobile-first web app. Sales CRM focusing on providing territory visibility for outside sales reps using Google Maps API.</p>
                        <ul class="projectsRowText fs-xs">
                            <li>Enhanced user engagement by integrating 3rd party microservice Google Maps API to accurately deliver geolocation of target businesses.</li>
                            <li>Developed a scalable database with MySQL to efficiently store data, leveraged AJAX with Flask to serve users real-time data querying saved information from the database to display previously dropped markers on Google Map.</li>
                            <li>Increased user security and reliability of deployed application by leveraging AWS EC2 web service and integrated Bcrypt.</li>
                        </ul>
                    </div>
                    <div className="rightProjectRow">
                        <img className="projectRowLogo" src={salesPinnerSS2}></img>
                    </div>
                </div>
                <div className="projectsRow">
                    <div className="leftProjectRow">
                        <p class="fs-l projectsRowTitle">Easier Apply</p>
                        <p class="fs-s projectsRowText">
                            Python Selenium script with a C# ASP.NET MVC frontend and backend to automate one part of the job search.</p>
                        <ul class="projectsRowText fs-xs">
                            <li>Created functional automation script using Selenium WebDriver for the LinkedIn job search process, focusing on job postings with the Easy Apply feature.</li>
                            <li>Worked in an agile team environment while reporting to the daily standup scrum master in a one-week sprint.</li>
                            <li>Formatted a user-friendly and attractive website using Razor, Bootstrap, CSS Animations, and JavaScript to provide the user audience with a dashboard for the automation script.</li>
                        </ul>
                    </div>
                    <div className="rightProjectRow">
                        <img className="projectRowLogo" src={easierApplySS}></img>
                    </div>
                </div>
                <div className="projectsRow2">
                    <div className="leftProjectRow">
                        <p class="fs-l projectsRowTitle">MERNching Band</p>
                        <p class="fs-s projectsRowText">Mobile-first web app. Sales CRM focusing on providing territory visibility for outside sales reps using Google Maps API.</p>
                        <ul class="projectsRowText fs-xs">
                            <li>Enhanced user engagement by integrating 3rd party microservice Google Maps API to accurately deliver geolocation of target businesses.</li>
                            <li>Developed a scalable database with MySQL to efficiently store data, leveraged AJAX with Flask to serve users real-time data querying saved information from the database to display previously dropped markers on Google Map.</li>
                            <li>Increased user security and reliability of deployed application by leveraging AWS EC2 web service and integrated Bcrypt.</li>
                        </ul>
                    </div>
                    <div className="rightProjectRow">
                        <img className="projectRowLogo" src={mernchingBandSS}></img>
                    </div>
                </div>
            </div>
            {/* <div className="const">
                <img src={constellation}></img>
            </div> */}
            {/* <div className="const">
                <img src={constellation}></img>
            </div>
            <div className="constellation">
                <div className="techLogos">
                    <div className="LogosStars">
                        <div className="logoBg">
                            <div className="square">
                                <img class="mongoose" src={mongoose}></img>
                            </div>
                        </div>
                        <div className="logoBg">
                            <div className="square">
                                <img class="express" src={express}></img>
                            </div>
                        </div>
                        <img class="reactjs" src={reactjs}></img>
                        <img class="nodejs" src={nodejs}></img>
                    </div>
                    <div className="LogosStars">
                        <img class="python" src={python}></img>
                        <img class="flask" src={flask}></img>
                        <img class="mysql" src={mysql}></img>
                    </div>
                </div>
                <div className="michaelLogoConst">
                    <img class="michaelLogoStacks" src={MichaelLogo}></img>
                </div>
                <div className="techLogos">
                    <div className="LogosStars">
                        <img class="html5" src={html5}></img>
                        <img class="css3" src={css3}></img>
                        <img class="jsimg" src={jsimg}></img>
                        <img class="git" src={git}></img>
                    </div>
                    <div className="LogosStars">
                        <img class="python" src={python}></img>
                        <img class="flask" src={flask}></img>
                        <img class="mysql" src={mysql}></img>
                    </div>
                </div>
            </div> */}
            <h3 class="techTitle fs-l">Technologies I Work With</h3>
            <article class="wrapper">
                <div class="marquee">
                    <div class="marquee__group">
                        <svg>
                            <use xlinkHref="#html5" />
                        </svg>
                        <svg>
                            <use xlinkHref="#css3" />
                        </svg>
                        <svg>
                            <use xlinkHref="#jssvg" />
                        </svg>
                        <svg>
                            <use xlinkHref="#pythonsvg" />
                        </svg>
                        <svg>
                            <use xlinkHref="#csharpsvg" />
                        </svg>
                        <svg>
                            <use xlinkHref="#mysqlsvg" />
                        </svg>
                        <svg>
                            <use xlinkHref="#reactsvg" />
                        </svg>
                        <svg>
                            <use xlinkHref="#gitsvg" />
                        </svg>
                    </div>

                    <div aria-hidden="true" class="marquee__group">
                        <svg>
                            <use xlinkHref="#html5" />
                        </svg>
                        <svg>
                            <use xlinkHref="#css3" />
                        </svg>
                        <svg>
                            <use xlinkHref="#jssvg" />
                        </svg>
                        <svg>
                            <use xlinkHref="#pythonsvg" />
                        </svg>
                        <svg>
                            <use xlinkHref="#csharpsvg" />
                        </svg>
                        <svg>
                            <use xlinkHref="#mysqlsvg" />
                        </svg>
                        <svg>
                            <use xlinkHref="#reactsvg" />
                        </svg>
                        <svg>
                            <use xlinkHref="#gitsvg" />
                        </svg>
                    </div>
                </div>

                <div class="marquee marquee--reverse">
                    <div class="marquee__group">
                        <svg>
                            <use xlinkHref="#gitsvg" />
                        </svg>
                        <svg>
                            <use xlinkHref="#reactsvg" />
                        </svg>
                        <svg>
                            <use xlinkHref="#mysqlsvg" />
                        </svg>
                        <svg>
                            <use xlinkHref="#csharpsvg" />
                        </svg>
                        <svg>
                            <use xlinkHref="#pythonsvg" />
                        </svg>
                        <svg>
                            <use xlinkHref="#jssvg" />
                        </svg>
                        <svg>
                            <use xlinkHref="#css3" />
                        </svg>
                        <svg>
                            <use xlinkHref="#html5" />
                        </svg>
                    </div>

                    <div aria-hidden="true" class="marquee__group">
                        <svg>
                            <use xlinkHref="#gitsvg" />
                        </svg>
                        <svg>
                            <use xlinkHref="#reactsvg" />
                        </svg>
                        <svg>
                            <use xlinkHref="#mysqlsvg" />
                        </svg>
                        <svg>
                            <use xlinkHref="#csharpsvg" />
                        </svg>
                        <svg>
                            <use xlinkHref="#pythonsvg" />
                        </svg>
                        <svg>
                            <use xlinkHref="#jssvg" />
                        </svg>
                        <svg>
                            <use xlinkHref="#css3" />
                        </svg>
                        <svg>
                            <use xlinkHref="#html5" />
                        </svg>
                    </div>
                </div>
            </article>
            <svg class="d-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <symbol id="html5" viewBox="0 -40 124 181">
                        {/* <rect x="0" y="0" width="100" height="100" fill="red"></rect> */}
                        <text x="0" y="-15" font-family="Roboto" font-size="35" fill="white">HTML5</text>
                        <path d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z" fill="#e34f26" /><path d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" fill="#ef652a" /><path d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z" fill="#fff" />
                    </symbol>
                    <symbol id="css3" viewBox="0 -40 124 181">
                        <text x="20" y="-15" font-family="Roboto" font-size="35" fill="white">CSS3</text>
                        <path d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z" fill="#1b73ba" /><path d="M62.468 129.275V12.085l51.064.17-9.106 104.85z" fill="#1c88c7" /><path d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z" fill="#fff" />
                    </symbol>
                    <symbol id="jssvg" viewBox="0 -40 124 181">
                        <text x="-20" y="-15" font-family="Roboto" font-size="35" fill="white">JavaScript</text>
                        <path d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z" fill="#e9ca32" /><path d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" fill="#ffde25" /><g fill="#fff"><path d="M57 26H43.5v78L33 102V91.5l-12.5-2V113l36.5 9.5zM67.127 26H104.5L102 40.95H81.394v24.533H102L99.5 115l-32.373 7.5V107L89 99.5 90.263 79l-23.136 3.35z" /></g>
                    </symbol>
                    <symbol id="pythonsvg" viewBox="0 -65 256 325">
                        <text x="40" y="-15" font-family="Roboto" font-size="60" fill="white">Python</text>
                        <g>
                            <path d="M126.915866,0.0722755491 C62.0835831,0.0722801733 66.1321288,28.1874648 66.1321288,28.1874648 L66.2044043,57.3145115 L128.072276,57.3145115 L128.072276,66.0598532 L41.6307171,66.0598532 C41.6307171,66.0598532 0.144551098,61.3549438 0.144551098,126.771315 C0.144546474,192.187673 36.3546019,189.867871 36.3546019,189.867871 L57.9649915,189.867871 L57.9649915,159.51214 C57.9649915,159.51214 56.8001363,123.302089 93.5968379,123.302089 L154.95878,123.302089 C154.95878,123.302089 189.434218,123.859386 189.434218,89.9830604 L189.434218,33.9695088 C189.434218,33.9695041 194.668541,0.0722755491 126.915866,0.0722755491 L126.915866,0.0722755491 L126.915866,0.0722755491 Z M92.8018069,19.6589497 C98.9572068,19.6589452 103.932242,24.6339846 103.932242,30.7893845 C103.932246,36.9447844 98.9572068,41.9198193 92.8018069,41.9198193 C86.646407,41.9198239 81.6713721,36.9447844 81.6713721,30.7893845 C81.6713674,24.6339846 86.646407,19.6589497 92.8018069,19.6589497 L92.8018069,19.6589497 L92.8018069,19.6589497 Z" fill="#FFE052"></path>
                            <path d="M128.757101,254.126271 C193.589403,254.126271 189.540839,226.011081 189.540839,226.011081 L189.468564,196.884035 L127.600692,196.884035 L127.600692,188.138693 L214.042251,188.138693 C214.042251,188.138693 255.528417,192.843589 255.528417,127.427208 C255.52844,62.0108566 219.318366,64.3306589 219.318366,64.3306589 L197.707976,64.3306589 L197.707976,94.6863832 C197.707976,94.6863832 198.87285,130.896434 162.07613,130.896434 L100.714182,130.896434 C100.714182,130.896434 66.238745,130.339138 66.238745,164.215486 L66.238745,220.229038 C66.238745,220.229038 61.0044225,254.126271 128.757101,254.126271 L128.757101,254.126271 L128.757101,254.126271 Z M162.87116,234.539597 C156.715759,234.539597 151.740726,229.564564 151.740726,223.409162 C151.740726,217.253759 156.715759,212.278727 162.87116,212.278727 C169.026563,212.278727 174.001595,217.253759 174.001595,223.409162 C174.001618,229.564564 169.026563,234.539597 162.87116,234.539597 L162.87116,234.539597 L162.87116,234.539597 Z" fill="#387EB8"></path>
                        </g>
                    </symbol>
                    <symbol id="csharpsvg" viewBox="0 -70 255.582 350.108">
                        <text x="90" y="-15" font-family="Roboto" font-size="65" fill="white">C#</text>
                        <path d="m255.569 84.452c-.002-4.83-1.035-9.098-3.124-12.76-2.052-3.603-5.125-6.622-9.247-9.009-34.025-19.619-68.083-39.178-102.097-58.817-9.17-5.294-18.061-5.1-27.163.27-13.543 7.986-81.348 46.833-101.553 58.536-8.321 4.818-12.37 12.19-12.372 21.771-.013 39.455 0 78.91-.013 118.365 0 4.724.991 8.91 2.988 12.517 2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.27 34.015-19.64 68.075-39.199 102.105-58.818 4.217-2.44 7.333-5.544 9.386-9.252 1.994-3.608 2.987-7.793 2.987-12.518 0 0 0-78.889-.013-118.345" fill="#a179dc" /><path d="m128.182 143.241-125.194 72.084c2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.27 34.015-19.64 68.075-39.199 102.105-58.818 4.217-2.44 7.333-5.544 9.386-9.252z" fill="#280068" /><path d="m255.569 84.452c-.002-4.83-1.035-9.098-3.124-12.76l-124.263 71.55 124.413 72.073c1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345" fill="#390091" /><g fill="#fff"><path d="m201.892 116.294v13.474h13.474v-13.474h6.737v13.474h13.474v6.737h-13.474v13.473h13.474v6.737h-13.474v13.474h-6.737v-13.474h-13.474v13.474h-6.737v-13.474h-13.473v-6.737h13.473v-13.473h-13.473v-6.737h13.473v-13.474zm13.474 20.21h-13.474v13.474h13.474z" /><path d="m128.457 48.626c35.144 0 65.827 19.086 82.262 47.456l-.16-.273-41.35 23.808c-8.146-13.793-23.08-23.102-40.213-23.294l-.54-.003c-26.125 0-47.305 21.18-47.305 47.305a47.08 47.08 0 0 0 6.239 23.47c8.154 14.235 23.483 23.836 41.067 23.836 17.693 0 33.109-9.723 41.221-24.11l-.197.345 41.287 23.918c-16.255 28.13-46.518 47.157-81.253 47.536l-1.058.006c-35.255 0-66.025-19.204-82.419-47.724-8.003-13.923-12.582-30.064-12.582-47.277 0-52.466 42.532-95 95-95z" /></g>
                    </symbol>

                    <symbol id="mysqlsvg" viewBox="0 -65 256 325">
                        <text x="10" y="-15" font-family="Roboto" font-size="60" fill="white">MySQL</text>
                        <path d="M235.648 194.212c-13.918-.347-24.705 1.045-33.752 4.872-2.61 1.043-6.786 1.044-7.134 4.35 1.392 1.392 1.566 3.654 2.784 5.567 2.09 3.479 5.741 8.177 9.047 10.614 3.653 2.783 7.308 5.566 11.134 8.002 6.786 4.176 14.442 6.611 21.053 10.787 3.829 2.434 7.654 5.568 11.482 8.177 1.914 1.39 3.131 3.654 5.568 4.523v-.521c-1.219-1.567-1.567-3.828-2.784-5.568-1.738-1.74-3.48-3.306-5.22-5.046-5.045-6.784-11.308-12.7-18.093-17.571-5.567-3.828-17.747-9.047-20.008-15.485 0 0-.175-.173-.348-.347 3.827-.348 8.35-1.74 12.005-2.784 5.915-1.567 11.308-1.218 17.398-2.784 2.783-.696 5.567-1.566 8.35-2.436v-1.565c-3.13-3.132-5.392-7.307-8.698-10.265-8.873-7.657-18.617-15.137-28.707-21.4-5.394-3.48-12.354-5.742-18.095-8.699-2.086-1.045-5.567-1.566-6.784-3.306-3.133-3.827-4.873-8.872-7.134-13.396-5.044-9.57-9.917-20.182-14.267-30.272-3.13-6.786-5.044-13.572-8.872-19.834-17.92-29.577-37.406-47.497-67.33-65.07-6.438-3.653-14.093-5.219-22.27-7.132-4.348-.175-8.699-.522-13.048-.697-2.784-1.218-5.568-4.523-8.004-6.089C34.006 4.573 8.429-8.996 1.122 8.924c-4.698 11.308 6.96 22.442 10.96 28.185 2.96 4.001 6.786 8.524 8.874 13.048 1.218 2.956 1.565 6.09 2.783 9.221 2.785 7.653 5.393 16.18 9.048 23.314 1.914 3.653 4.001 7.48 6.437 10.786 1.392 1.913 3.827 2.784 4.35 5.915-2.435 3.48-2.61 8.7-4.003 13.049-6.263 19.66-3.826 44.017 5.046 58.457 2.783 4.348 9.395 13.92 18.268 10.265 7.83-3.131 6.09-13.048 8.35-21.747.524-2.09.176-3.48 1.219-4.872v.349c2.436 4.87 4.871 9.569 7.133 14.44 5.394 8.524 14.788 17.398 22.617 23.314 4.177 3.13 7.482 8.524 12.702 10.438v-.523h-.349c-1.044-1.566-2.61-2.261-4.001-3.48-3.131-3.13-6.612-6.958-9.047-10.438-7.306-9.744-13.745-20.53-19.486-31.665-2.783-5.392-5.22-11.308-7.481-16.701-1.045-2.09-1.045-5.22-2.784-6.263-2.61 3.827-6.437 7.133-8.351 11.83-3.304 7.481-3.653 16.702-4.871 26.27-.696.176-.349 0-.697.35-5.566-1.394-7.48-7.134-9.569-12.006-5.22-12.352-6.09-32.186-1.565-46.452 1.218-3.654 6.438-15.136 4.35-18.616-1.044-3.306-4.525-5.22-6.438-7.829-2.261-3.306-4.698-7.48-6.263-11.135-4.176-9.743-6.264-20.53-10.787-30.273-2.088-4.524-5.74-9.22-8.699-13.396-3.305-4.697-6.959-8.004-9.569-13.571-.869-1.913-2.088-5.045-.696-7.133.348-1.392 1.043-1.913 2.436-2.261 2.262-1.915 8.7.521 10.96 1.565 6.438 2.608 11.831 5.046 17.225 8.699 2.435 1.74 5.045 5.046 8.176 5.916h3.654c5.568 1.217 11.83.348 17.05 1.913 9.222 2.957 17.572 7.307 25.054 12.005 22.792 14.44 41.58 34.97 54.282 59.501 2.088 4 2.957 7.656 4.871 11.83 3.655 8.526 8.178 17.225 11.83 25.576 3.654 8.176 7.133 16.528 12.353 23.314 2.61 3.652 13.048 5.567 17.746 7.481 3.48 1.565 8.874 2.958 12.005 4.871 5.915 3.652 11.83 7.83 17.398 11.83 2.784 2.088 11.482 6.438 12.005 9.917z" fill="#00546B" /><path d="M58.186 43.022c-2.957 0-5.044.35-7.132.871v.348h.348c1.393 2.784 3.827 4.698 5.566 7.133 1.393 2.783 2.61 5.568 4.003 8.352.173-.175.347-.348.347-.348 2.437-1.741 3.654-4.524 3.654-8.7-1.044-1.217-1.218-2.435-2.088-3.653-1.043-1.741-3.306-2.61-4.698-4.003z" fill="#00546B" />
                    </symbol>
                    <symbol id="reactsvg" viewBox="175.7 -100 490.6 645">
                        <text x="280" y="-15" font-family="Roboto" font-size="115" fill="white">React</text>
                        <g fill="#61dafb"><path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" /><circle cx="420.9" cy="296.5" r="45.7" /></g>
                    </symbol>
                    <symbol id="gitsvg" viewBox="0 -65 256 325">
                        <text x="90" y="-15" font-family="Roboto" font-size="65" fill="white">Git</text>
                        <path d="M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21 29.443 29.443c6.842-2.312 14.688-.761 20.142 4.693 5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657 7.663 7.66 7.663 20.075 0 27.74-7.665 7.666-20.08 7.666-27.749 0-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462-.003 69.637a19.82 19.82 0 0 1 5.188 3.71c7.663 7.66 7.663 20.076 0 27.747-7.665 7.662-20.086 7.662-27.74 0-7.663-7.671-7.663-20.086 0-27.746a19.654 19.654 0 0 1 6.421-4.281V94.196a19.378 19.378 0 0 1-6.421-4.281c-5.806-5.798-7.202-14.317-4.227-21.446L81.47 39.442l-76.64 76.635c-6.44 6.443-6.44 16.884 0 23.322l111.774 111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324" fill="#DE4C36" />
                    </symbol>
                </defs>
            </svg>
        </main >
    )
}