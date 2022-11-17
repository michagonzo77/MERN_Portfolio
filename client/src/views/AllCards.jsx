import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { getAllCards, deleteCard } from "../services/internalApiService";
import bass from "../static/bass.mp3";
import chords from "../static/chords.mp3";
import drums from "../static/drums.mp3";
import synth from "../static/synth.mp3";
import vocal from "../static/vocal.mp3";
import card from "./cards.png"

export const AllCards = (props) => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        getAllCards()
            .then((data) => {
                setCards(data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const handleDeleteClick = (idToDelete) => {
        // if (window.confirm('Are you sure you wish to delete this item?'))
        deleteCard(idToDelete)
            .then((data) => {
                console.log(data)
                const filteredCards = cards.filter((card) => {
                    return card._id !== idToDelete
                })
                setCards(filteredCards);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <hr />
            <h3>These cards are looking for a good home.</h3>
            <Link to={"/mernchingband/new"}>Create New Card</Link>
            <div className="mx-auto text-center">
                <table className="mt-3 table table-bordered table-striped">
                    <thead className="bg-light text-dark">
                        <tr>
                            <th>Song</th>
                            <th>Name</th>
                            <th>Audio</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cards.sort(() => Math.random() - 0.5).map((card, i) => {
                            const { _id, song, name, image, audio, value } = card;
                            console.table(card)
                            return (
                                <tr key={i} className="shadow mb-4 rounded border p-4">
                                    <td>
                                        {song}
                                    </td>
                                    <td>
                                        <Link to={`/mernchingband/${_id}`}>
                                            <h4>{name}</h4>
                                        </Link>
                                    </td>
                                    <td>
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
                                    </td>
                                    <td>
                                        {image}
                                    </td>
                                    <td>
                                        <Link
                                            className="btn btn-sm btn-outline-primary mx-1"
                                            to={`/mernchingband/${_id}`}>
                                            <h4>Details</h4>
                                        </Link>
                                        | |
                                        <Link
                                            className="btn btn-sm btn-outline-primary mx-1"
                                            to={`/mernchingband/${_id}/edit`}>
                                            <h4>Edit</h4>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}