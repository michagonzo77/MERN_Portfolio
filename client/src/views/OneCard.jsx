import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getCardById, deleteCard } from '../services/internalApiService';
import cardImage from "./cards.png"
import bass from "../static/bass.mp3";
import chords from "../static/chords.mp3";
import drums from "../static/drums.mp3";
import synth from "../static/synth.mp3";
import vocal from "../static/vocal.mp3";

export const OneCard = (props) => {
    const { id } = useParams();
    const [card, setCard] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        getCardById(id)
            .then((data) => {
                setCard(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id])

    const handleDeleteClick = () => {
        deleteCard(id)
            .then((data) => {
                navigate('/mernchingband/all')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    if (card === null) {
        return null
    }

    const { _id, song, name, image, audio, value } = card;


    return (
        <div>
            <div className="d-flex justify-content-between">
                <h2>Details about: {name}</h2>
                <button className="btn btn-outline-danger mx-1"
                    onClick={handleDeleteClick}
                >
                    Delete {name}
                </button>
            </div>
            <div className="w-100 mt-3 mx-auto shadow mb-4 rounded border p-4">
                <p>Song: {song}</p>
                <p>Instrument: {name}</p>
                <p>
                    {
                        image === "card" ? <img src={cardImage} /> : "Missing Image"
                    }
                </p>
                <audio controls>
                    {
                        audio === "bass" && <source src={bass} type="audio/mp3"></source>
                    }
                    {
                        audio === "chords" && <source src={chords} type="audio/mp3"></source>
                    }
                    {
                        audio === "drums" && <source src={drums} type="audio/mp3"></source>
                    }
                    {
                        audio === "synth" && <source src={synth} type="audio/mp3"></source>
                    }
                    {
                        audio === "vocal" && <source src={vocal} type="audio/mp3"></source>
                    }
                </audio>
                <p>{value}</p>
            </div>
        </div>
    )
}
