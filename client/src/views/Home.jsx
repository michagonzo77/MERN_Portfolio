import { Link } from 'react-router-dom';
import { useState } from "react";
import michaelthedev from "./michaelthedev.png"
import googlecard from "./googlecard.png"
import mernchingcard from "./mernchingcard.png"
import camscavenge from "./camscavenge.png"
import bio from "./bio.png"

export const Home = (props) => {
    const [showBio, setShowBio] = useState(true)
    const handleClick = () => {
        setShowBio(false)
    }

    return (
        <div className="homeMain">
            <nav className="homeNav">
                <img className="homeLogo" src={michaelthedev} />
            </nav>
            {showBio &&
                <div className="bio" onClick={handleClick}>
                    <img src={bio}></img>
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