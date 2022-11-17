import { useState, useEffect, useRef } from "react";
import { getAllCards } from "../services/internalApiService";
import useSound from 'use-sound';
import mernching from "./mernchingband.png";
import cardz from "./cards.png";
import spriteSound from "../static/spriteSound.mp3"
import guitarGuy from "./mernchingcard.png"

export const MernchingBand = (props) => {
    const [cards, setCards] = useState([])
    const [clearedCards, setClearedCards] = useState({});
    const [moves, setMoves] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const timeout = useRef(null);
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
    const [cardImage, setCardImage] = useState({
        front: {guitarGuy},
        back: {guitarGuy}
    })
    const [clicked, setClicked] = useState(true)

    useEffect(() => {
        getAllCards()
            .then((data) => {
                setCards(data);
                setCardImage(guitarGuy)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const shuffleCards = (cards) => {
        for (var i = cards.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = cards[i];
            cards[i] = cards[j];
            cards[j] = temp;
        }
    }

    const ifClicked = () => {
        console.log(clicked)
        clicked && setCardImage(cardz)
        !clicked && setCardImage(guitarGuy)
    }

    const handleClick = (audio) => {
        play({ id: audio })
        if (clicked === false){
            setClicked(true)
        }
        if (clicked === true){
            setClicked(false)
        }
        console.log(clicked)
        ifClicked()
    }

    // const evaluate = () => {
    //     const [first, second] = openCards;
    //     if (cards[first].type === cards[second].type) {
    //         setClearedCards((prev) => ({ ...prev, [cards[first].type]: true }));
    //         setOpenCards([]);
    //         return;
    //     }
    //     // Flip cards after a 500ms duration
    //     timeout.current = setTimeout(() => {
    //         setOpenCards([]);
    //     }, 500);
    // };


    return (
        <div className="mernMain">
            <nav className="mernNav">
                <img src={mernching} />
            </nav>
            <div className="mernTable">
                <div className="d-flex flex-wrap gap-5 justify-content-center">
                    {cards.sort(() => Math.random() - 0.5).map((card, i) => {
                        const { _id, song, name, image, audio, value } = card;
                        return (
                            <div key={i}>
                                <img
                                    className="cardImage"
                                    src={cardImage}
                                    // onClick={() => play({ id: audio })}
                                    onClick = {() => {handleClick(audio)}}
                                    name={name}
                                    />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}