import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom"
import { getAllCards } from "../services/internalApiService";
import useSound from 'use-sound';
import mernching from "./mernchingband.png";
import cardz from "./cards.png";
import spriteSound from "../static/spriteSound.mp3"
import fullSong from "../static/full_song.mp3"
// import guitarGuy from "./mernchingcard.png"
import guitarGuy from "./mernchingcardsmall.png"
import lightOff from "./mernchinglightoff.png"

const fullCancion = new Audio(fullSong)
export const MernchingBand = (props) => {
    const [cards, setCards] = useState([])
    const [clearedCards, setClearedCards] = useState([]);
    const [showButton, setShowButton] = useState(true)
    const [showBg, setShowBg] = useState(true)
    const [showWin, setShowWin] = useState(false)
    const [openCards, setOpenCards] = useState({})
    const timeout = useRef(null);
    // const [cardCss, setCardCss] = useState('cardImage')
    const [play, { stop }] = useSound(spriteSound, {
        sprite: {
            bass: [0, 2100],
            chords: [7400, 2100],
            drums: [15120, 2100],
            synth: [22970, 2100],
            vocal: [32000, 2100]
        },
        interrupt: true
    })

    const [logoCss, setLogoCss] = useState('logoCss')
    const [logo, setLogo] = useState(lightOff)

    const [cardCss, setCardCss] = useState({
        0: 'cardImage',
        1: 'cardImage',
        2: 'cardImage',
        3: 'cardImage',
        4: 'cardImage',
        5: 'cardImage',
        6: 'cardImage',
        7: 'cardImage',
        8: 'cardImage',
        9: 'cardImage'
    })

    const [clickDisabled, setClickDisabled] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        getAllCards()
            .then((data) => {
                setCards(data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    // Runs after the handleClick, and manages changing the click status and the graphic on the card.
    const ifClicked = (idToFlip, index) => {
        // setCardCss({...cardCss, idToFlip: 'cardImage2'})
        if (cards[idToFlip].clicked === true) {
            // cardCss[idToFlip] = 'cardImage'
            const newState = cards.map(card => {
                if (card._id === index) {
                    return { ...card, image: cardz, clicked: false };
                }
                return card;
            });
            setCards(newState)
        }
        if (cards[idToFlip].clicked === false) {
            // cardCss[idToFlip] = 'cardImage2'
            const newState = cards.map(card => {
                if (card._id === index) {
                    return { ...card, image: cardz, clicked: true };
                }
                return card;
            });
            setCards(newState)
            // timeout.current = setTimeout(() => {
            //     setCards(newState);
            // }, 500);
        }
    }

    // Plays the audio and updates state to match new clicked status.
    const handleClick = (audio, idToFlip, index, value) => {
        console.table(clearedCards)
        cardCss[idToFlip] = 'cardImage2'
        play({ id: audio })
        if (cards[idToFlip].clicked === false) {
            const newState = cards.map(card => {
                if (card._id === index) {
                    return { ...card, clicked: true };
                }
                return card;
            });
            setCards(newState)
        }
        if (cards[idToFlip].clicked === true) {
            const newState = cards.map(card => {
                if (card._id === index) {
                    return { ...card, clicked: false };
                }
                return card;
            });
            setCards(newState)
        }
        ifClicked(idToFlip, index)
        console.table(openCards)
        if ("firstValue" in openCards) {
            setClickDisabled(true)
            if (openCards.firstValue === value) {
                console.log("It's a Match!")
                timeout.current = setTimeout(() => {
                    setClickDisabled(false)
                }, 1000);
                setOpenCards({});
                setClearedCards([
                    ...clearedCards,
                    openCards.firstValue,
                    value
                ])
                if (clearedCards.length === 8) {
                    fullCancion.play()
                    setShowWin(true)
                    setShowBg(true)
                    setClearedCards([])
                    console.log("You Win!")
                }
                return;
            } else {
                timeout.current = setTimeout(() => {
                    const newState = cards.map(card => {
                        if (card._id === openCards.indexOne || card._id === index) {
                            return { ...card, image: guitarGuy, clicked: false };
                        }
                        return card;
                    });
                    setOpenCards({});
                    setCards(newState)
                    setClickDisabled(false)
                    console.log("Not a Match!")
                }, 1500);
                // timeout.current = setTimeout(() => {
                //     evaluate()
                // }, 1500);
            }
        } else
            setOpenCards({
                ...openCards,
                firstValue: value,
                indexOne: index
            })
    }

    const startGame = (cards) => {
        setLogoCss('mernNav')
        setLogo(mernching)
        setCards(prevValue => [...cards].sort(() => Math.random() - 0.5))
        setShowButton(false)
        setShowBg(false)
    }

    const startGameAgain = (cards) => {
        fullCancion.pause()
        setCards(prevValue => [...cards].sort(() => Math.random() - 0.5))
        const newState = cards.map(card => {
            return { ...card, image: guitarGuy, clicked: false };
        });
        setCards(newState)
        setShowWin(false)
        setShowBg(false)
    }

    return (
        <div className="mernMain">
            <div className="navvy d-flex justify-content-between">
                <nav className={logoCss}>
                    <img src={logo} />
                </nav>
                <Link className="text-light homeBut" to={"/"}>HOME</Link>
            </div>
            <div className="mernTable">
                {showButton &&
                    <button
                        onClick={() => { startGame(cards) }}
                        className="startGameButton">Start Game
                    </button>
                }
                {showBg &&
                    <div className="startBg"></div>
                }
                {showWin &&
                    <div className="showWinModal">
                        <h1 className="youRock">You Rock!</h1>
                        <button
                            onClick={() => { startGameAgain(cards) }}
                            className="playAgain"
                        >Play Again
                        </button>
                    </div>
                }
                <div className="d-flex flex-wrap gap-5 justify-content-center">
                    {cards.map((card, i) => {
                        // {cards.sort(() => Math.random() - 0.5).map((card, i) => {
                        const { _id, song, name, image, audio, value } = card;
                        return (
                            <div key={i}>
                                <img
                                    className={cardCss.i}
                                    src={`${image}`}
                                    idtoflip={i}
                                    // onClick={() => play({ id: audio })}
                                    // onClick={() => { handleClick(audio, i, _id, value) }}
                                    onClick={() => clickDisabled ? () => { } : handleClick(audio, i, _id, value)}
                                    name={name}
                                    value={value}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}