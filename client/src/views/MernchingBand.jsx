import { useState, useEffect, useRef } from "react";
import { getAllCards } from "../services/internalApiService";
import useSound from 'use-sound';
import mernching from "./mernchingband.png";
import cardz from "./cards.png";
import spriteSound from "../static/spriteSound.mp3"
// import guitarGuy from "./mernchingcard.png"
import guitarGuy from "./mernchingcardsmall.png"

export const MernchingBand = (props) => {
    const [cards, setCards] = useState([])
    const [clearedCards, setClearedCards] = useState({});
    const [moves, setMoves] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const timeout = useRef(null);
    const [showButton, setShowButton] = useState(true)
    const [openCards, setOpenCards] = useState({})
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
        if (cards[idToFlip].clicked === true) {
            const newState = cards.map(card => {
                if (card._id === index) {
                    return { ...card, image: cardz, clicked: false };
                }
                return card;
            });
            setCards(newState)
        }
        if (cards[idToFlip].clicked === false) {
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
        console.table(cards)
        //     setCards({
        //         ...cards,
        //         [idToFlip]: {
        //             clicked: false,
        //             graphic: cardz
        //         }
        //     })
        // }
        // if (cards[idToFlip].clicked === false) {
        //     setCards({
        //         ...cards,
        //         [idToFlip]: {
        //             clicked: true,
        //             graphic: guitarGuy
        //         }
        //     })
        // }
    }

    // Plays the audio and updates state to match new clicked status.
    const handleClick = (audio, idToFlip, index, value) => {
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
        if ("first" in openCards){
            setOpenCards({...openCards, second: value})
            evaluate()
        } else setOpenCards({...openCards, first: value})
        // if (cards[idToFlip].clicked === false) {
        //     setCards([
        //         [...cards].map(card => {
        //             console.log(card)
        //             if (card._id === index) {
        //                 return {
        //                     ...card,
        //                     clicked: true
        //                 }
        //             }
        //             else return card;
        //         })
        //     ])
        // }
        // if (cards[idToFlip].clicked === true) {
        //     setCards([
        //         [...cards].map(card => {
        //             console.log(card)
        //             if (card._id === index) {
        //                 return {
        //                     ...card,
        //                     clicked: false
        //                 }
        //             }
        //             else return card;
        //         })
        //     ])
        // }
        // if (cards[idToFlip].clicked === false) {
        //     setCards([
        //         ...cards,
        //         [idToFlip]: {
        //             ...cards[idToFlip],
        //             clicked: true
        //         }
        //     ])
        // }
        // if (cards[idToFlip].clicked === true) {
        //     setCards([
        //         ...cards,
        //         [idToFlip]: {
        //             ...cards[idToFlip],
        //             clicked: false
        //         }
        //     ])
        // }
    }

    const evaluate = () => {
        const {first, second} = openCards;
        console.log(first)
        if (first === second) {
            console.log("It's a Match!")
            setClearedCards((prev) => ({ ...prev, [cards[first].type]: true }));
            setOpenCards({});
            return;
        } else {
            console.log("Not a Match!")
            // Flip cards after a 500ms duration
            timeout.current = setTimeout(() => {
                setOpenCards([]);
            }, 500);
        }
    };

    const startGame = (cards) => {
        setCards(prevValue => [...cards].sort(() => Math.random() - 0.5))
        setShowButton(false)
    }

    return (
        <div className="mernMain">
            <nav className="mernNav">
                <img src={mernching} />
            </nav>
            <div className="mernTable">
                {showButton &&
                <button
                onClick={() => {startGame(cards)}}
                className="startGameButton">Start Game
                </button>
                }
                <div className="d-flex flex-wrap gap-5 justify-content-center">
                    {cards.map((card, i) => {
                    // {cards.sort(() => Math.random() - 0.5).map((card, i) => {
                        const { _id, song, name, image, audio, value } = card;
                        return (
                            <div key={i}>
                                <img
                                    className="cardImage"
                                    src={`${image}`}
                                    idtoflip={i}
                                    // onClick={() => play({ id: audio })}
                                    onClick={() => { handleClick(audio, i, _id, value) }}
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