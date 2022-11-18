import { Link } from 'react-router-dom';
import michaelthedev from "./michaelthedev.png"
import googlecard from "./googlecard.png"
import mernchingcard from "./mernchingcard.png"
import camscavenge from "./camscavenge.png"

export const Home = (props) => {

    return (
        <div className="homeMain">
            <nav className="homeNav">
                <img className="homeLogo" src={michaelthedev} />
            </nav>
            <div className="homeTable d-flex justify-content-between">
                <div className="firstCol text-center">
                    <h4 className="text-light">MERNCHING BAND</h4>
                    <img className="homeLogo" src={mernchingcard} />
                    <p className="text-light">Players: 1</p>
                    <p className="text-light">DESCRIPTION OF GAME: Memory matching game using music. Create songs with the power of your memory.</p>
                    <button className="mernchBut"><Link className="text-light" to={"/mernchingband"}>START</Link></button>
                </div>
                <div className="secondCol text-center">
                    <h4 className="text-light">GOOGLE GUESS</h4>
                    <img className="homeLogo" src={googlecard} />
                    <p className="text-light">Players: 1-2</p>
                    <p className="text-light">DESCRIPTION OF GAME: Guess how long it takes to drive somewhere. Beat your friends and show them you know how to drive.</p>
                    <button className="googleBut text-light"><Link className="text-light" to={"/"}>START</Link></button>
                </div>
                <div className="thirdCol text-center">
                    <h4 className="text-light">CAM SCAVENGE</h4>
                    <img className="homeLogo" src={camscavenge} />
                    <p className="text-light">Players: 1</p>
                    <p className="text-light">DESCRIPTION OF GAME: Scavenger hunt right at home with things you have around you.</p>
                    <button className="camBut"><Link className="text-dark" to={"/"}>START</Link></button>
                </div>
            </div>
        </div>
    )
}