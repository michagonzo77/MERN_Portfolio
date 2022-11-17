import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateCard, getCardById } from "../services/internalApiService";


export const EditCard = (props) => {

    const { id } = useParams();
    const [card, setCard] = useState(null);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        song: '',
        name: '',
        audio: '',
        image: '',
        value: 0
    })
    const [errors, setErrors] = useState(null)

    const [formDataErrors, setFormDataErrors] = useState({
        song: '',
        name: '',
        audio: '',
        image: '',
        value: 0
    })

    useEffect(() => {
        getCardById(id)
            .then((data) => {
                setFormData(data)
                setCard(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        const error = validateInput();
        // if (error === null) {
        updateCard(id, formData)
            .then((data) => {
                console.log('New Card Data:', data)
                navigate(`/mernchingband/${data._id}`)
            })
            .catch((error) => {
                console.log(error.response)
                setErrors(error.response?.data?.errors)
            })
        // }
    }

    const validateInput = () => {
        if (formData.name.length < 2) {
            return true;
        } else if (formData.name.length >= 2) {
            return null;
        }
    };


    const handleFormChanges = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    if (formData === null) {
        return null
    }

    if (card === null) {
        return null
    }

    const { name } = card

    return (
        <div className="mb-3 w-75 mx-auto">
            <Link to={"/mernchingband/all"}>View All Cards</Link>
            <h2>Make New Cards for Game</h2>
            <div className="p-4 rounded mx-auto mt-5 shadow">
                {/* {JSON.stringify(formData.over1mil)} */}
                <h3 className="text-center">New Card</h3>
                <form onSubmit={(e) => {
                    handleSubmit(e);
                }}>
                    <div className="mt-5 align-items-center">
                        <div className="form-group">
                            <label className="h6">Song</label>
                            <input
                                onChange={handleFormChanges}
                                type="text"
                                name="song"
                                value={formData.song}
                                className="form-control"
                            />
                            {
                                errors?.song && (
                                    <span className="text-danger">{errors.song?.message}</span>
                                )
                            }
                        </div>
                        <p className="text-danger">{formDataErrors.nameError}</p>
                        <div className="form-group">
                            <label className="h6">Name</label>
                            <input
                                onChange={handleFormChanges}
                                type="text"
                                name="name"
                                value={formData.name}
                                className="form-control"
                            />
                            {
                                errors?.name && (
                                    <span className="text-danger">{errors.name?.message}</span>
                                )
                            }
                        </div>
                        <p className="text-danger">{formDataErrors.nameError}</p>
                        <div className="form-group">
                            <label className="h6">Audio</label>
                            <input
                                onChange={handleFormChanges}
                                type="text"
                                name="audio"
                                value={formData.audio}
                                className="form-control"
                            />
                            {
                                errors?.audio && (
                                    <span className="text-danger">{errors.audio?.message}</span>
                                )
                            }
                        </div>
                        <p className="text-danger">{formDataErrors.audioError}</p>
                        <div className="form-group">
                            <label className="h6">Image</label>
                            <input
                                onChange={handleFormChanges}
                                type="text"
                                name="image"
                                value={formData.image}
                                className="form-control"
                            />
                            {
                                errors?.image && (
                                    <span className="text-danger">{errors.image?.message}</span>
                                )
                            }
                        </div>
                        <p className="text-danger">{formDataErrors.imageError}</p>
                        <div className="form-group">
                            <label className="h6">Value</label>
                            <input
                                onChange={handleFormChanges}
                                type="number"
                                name="value"
                                value={formData.value}
                                className="form-control"
                            />
                            {
                                errors?.value && (
                                    <span className="text-danger">{errors.value?.message}</span>
                                )
                            }
                        </div>
                        <p className="text-danger">{formDataErrors.valueError}</p>
                        <hr />
                    </div>
                    <button className="btn btn-sm btn-outline-success mt-3">Submit</button>
                </form>
            </div >
        </div>
    )
}