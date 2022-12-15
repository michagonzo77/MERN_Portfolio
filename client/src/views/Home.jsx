// import { Link } from 'react-router-dom';
// import { useState } from "react";
// import michaelthedev from "./michaelthedev.png"
// import googlecard from "./googlecard.png"
// import mernchingcard from "./mernchingcard.png"
// import camscavenge from "./camscavenge.png"
// import bio from "./bio.png"

// export const Home = (props) => {
//     const [showBio, setShowBio] = useState(true)
//     const handleClick = () => {
//         setShowBio(false)
//     }

//     return (
//         <div className="homeMain">
//             <nav className="homeNav">
//                 <img className="homeLogo" src={michaelthedev} />
//             </nav>
//             {showBio &&
//                 <div className="bio" onClick={handleClick}>
//                     <img src={bio}></img>
//                 </div>
//             }
//             {!showBio &&
//             <div className="homeTable d-flex justify-content-between">
//                 <div className="firstCol text-center">
//                     <h4 className="text-light">MERNCHING BAND</h4>
//                     <img className="gameLogo" src={mernchingcard} />
//                     <p className="text-light">Players: 1</p>
//                     <p className="text-light">DESCRIPTION OF GAME: Memory matching game using music. Create songs with the power of your memory.</p>
//                     <Link className="text-light mernchBut" to={"/mernchingband"}>START</Link>
//                 </div>
//                 <div className="secondCol text-center">
//                     <h4 className="text-light">GOOGLE GUESS</h4>
//                     <img className="gameLogo" src={googlecard} />
//                     <p className="text-light">Players: 1-2</p>
//                     <p className="text-light">DESCRIPTION OF GAME: Guess how long it takes to drive somewhere. Beat your friends and show them you know how to drive.</p>
//                     <Link className="text-light googleBut" to={"/"}>COMING SOON</Link>
//                 </div>
//                 <div className="thirdCol text-center">
//                     <h4 className="text-light">CAM SCAVENGE</h4>
//                     <img className="gameLogo" src={camscavenge} />
//                     <p className="text-light">Players: 1</p>
//                     <p className="text-light">DESCRIPTION OF GAME: Scavenger hunt right at home with things you have around you.</p>
//                     <Link className="text-dark camBut" to={"/"}>COMING SOON</Link>
//                 </div>
//             </div>
//             }
//         </div>
//     )
// }
import { Link } from 'react-router-dom';
import { useState } from "react";
import michaelthedev from "./michaelthedev.png"
import googlecard from "./googlecard.png"
import mernchingcard from "./mernchingcard.png"
import camscavenge from "./camscavenge.png"
import bio from "./bio.png"
import biopic from "./biopic.jpg"
import coffee from "./coffee.png"
import githubLogo from "./github.png"
import linkedinLogo from "./linkedin.png"

export const Home = (props) => {
    const [showBio, setShowBio] = useState(true)
    const handleClick = () => {
        setShowBio(false)
    }

    return (
        <div className="homeMain">
            <nav className="homeNav">
                {/* <img className="homeLogo" src={michaelthedev} /> */}
            </nav>
            {showBio &&
                <div className="bio">
                    {/* <img src={bio}></img> */}
                    <div className="bioFull d-flex justify-content-between">
                        <div className="bioLeft col-9">
                            <div className="bioLeftTop d-flex gap-3 align-items-center">
                                <div className="bioLeftTopLeft col-3">
                                    <img className="w-75 border border-solid" src={biopic}></img>
                                </div>
                                <div className="bioLeftTopRight text-light">
                                    <h1 className="nameHeader">MICHAEL THE DEV</h1>
                                    <p className="tagLine">Full Stack Developer & Software Engineer with a Background in Marketing & Sales</p>
                                    <div className="bioLeftTopRightBot d-flex gap-2">
                                        <a href="https://github.com/michagonzo77"><img className="socialLogo" src={githubLogo}></img></a>
                                        <a href="https://www.linkedin.com/in/michagonzo/"><img className="socialLogo" src={linkedinLogo}></img></a>
                                        {/* <button className="buyMeCoffee"><img src={coffee}></img>BUY ME A COFFEE</button> */}
                                    </div>
                                </div>
                            </div>
                            <div className="bioLeftBottom">
                                <p className="aboutTitle">About</p>
                                <p className="aboutMe">Software Developer with 5 years of experience in Marketing. I am passionate about building scalable applications in 2 full stacks (Python, MERN).<br></br>

                                    I've always orbited toward computers and tech in general, starting at age 6 as a Windows 95 expert :). When my childhood friends and I started a band, even though I played guitar, I wanted to be the producer. Learning new programs, and troubleshooting issues that would arise, are things I'd find fun.<br></br>

                                    My previous career in Marketing allowed me the opportunity to learn how to build genuine connections. It allowed me the opportunity to work in teams, even from afar. It allowed me the opportunities to follow and to lead, knowing the ins and outs of both aspects, all skills that are essential to software engineering as well.<br></br>

                                    Once I started my own marketing agency and learned how to manage my team and grow our client base, it was the opportunity to solve real-life problems involving technology that struck a chord. I felt the same way I did when I turned on my Windows 95 computer for the first time. I self-taught myself WordPress, CSS, and SEO. With these tools, I self-taught myself how to improve a business's online presence and boost its bottom line by generating more leads. Through business development and the lack of cohesive sales tracking software, I came up with my current project. I'm developing a sales tool using Python & Flask to provide territory visibility for outside sales reps using Google Maps API.
                                </p>
                                <p className="skillsTitle">Skills</p>
                                <p className="aboutMe">
                                    Empathy. Willingness to Learn. Problem-Solving. Teamwork/Collaboration. Adaptability. Effective Communicator. Creative. Self-Motivated. Resourceful.
                                </p>
                                <p className="aboutTitle">Technical Skills</p>
                                <p className="aboutMe">
                                    Languages: Python, JavaScript(ES6, Node.JS), HTML5, CSS, SQL
                                    Frameworks/Libraries: Flask, Jinja2, React, Express, React Native, Bootstrap, Mongoose
                                    Databases: MySQL, MongoDB
                                    Development Methodologies: Agile (SCRUM)
                                    Tools: AJAX, REST API, JSON, AWS(EC2), MySQL Workbench, Git, Github
                                    Currently Learning: C# | Socket IO
                                </p>
                            </div>
                        </div>
                        <div className="bioRight">
                            <div className="playAGame">
                                <h2 className="text-light">Want To Play a Game?</h2>
                                <button onClick={handleClick}>Flip To Games</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {!showBio &&
                <div className="homeTable d-flex justify-content-between">
                    <div className="firstCol text-center">
                        <h4 className="text-light">MERNCHING BAND</h4>
                        <img className="gameLogo" src={mernchingcard} />
                        <p className="text-light">Players: 1</p>
                        <p className="text-light">DESCRIPTION OF GAME: Memory matching game using music. Create songs with the power of your memory.</p>
                        <Link className="text-light mernchBut" to={"/mernchingband"}>START</Link>
                    </div>
                    <div className="secondCol text-center">
                        <h4 className="text-light">GOOGLE GUESS</h4>
                        <img className="gameLogo" src={googlecard} />
                        <p className="text-light">Players: 1-2</p>
                        <p className="text-light">DESCRIPTION OF GAME: Guess how long it takes to drive somewhere. Beat your friends and show them you know how to drive.</p>
                        <Link className="text-light googleBut" to={"/"}>COMING SOON</Link>
                    </div>
                    <div className="thirdCol text-center">
                        <h4 className="text-light">CAM SCAVENGE</h4>
                        <img className="gameLogo" src={camscavenge} />
                        <p className="text-light">Players: 1</p>
                        <p className="text-light">DESCRIPTION OF GAME: Scavenger hunt right at home with things you have around you.</p>
                        <Link className="text-dark camBut" to={"/"}>COMING SOON</Link>
                    </div>
                </div>
            }
        </div>
    )
}