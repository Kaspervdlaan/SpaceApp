import React, {useEffect, useState} from 'react';
import axios from "axios";
import styles from "./Rover.module.css"
import Article from "../../components/article-component/Article";
import RoverArticle from "../../components/rover-article-component/RoverArticle";


function Rover() {
    const [roverImage, setRoverImage] = useState([])
    const [form, setForm] = useState({
        rover: 'curiosity',
        camera: 'NAVCAM',
        sol: 1000
    })

    function handleChange(e) {
        const {value, name} = e.target;
        setForm((state) => ({
            ...state,
            [name]: value
        }));
    }

    useEffect(() => {
        fetchRover()
    }, [])

    async function fetchRover() {
        try {
            const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${form.rover}/photos?api_key=yYN7fKH547MMckYy51i7HqeQpuR6bAYBeZr85wu1&sol=${form.sol}&camera=${form.camera}`)
            const data = response.data.photos.map((photo) => ({
                image: photo.img_src
            }))
            setRoverImage(data)
        } catch (e) {
            console.log(e)
        }
    }


    function submitForm(e) {
        e.preventDefault()
        console.log('Form input: ', form)
        fetchRover()
    }

    return (
        <>
            <div className="inner-container">

                <form onSubmit={submitForm} className={styles["rover-form"]}>
                    <h3>Pick a Rover</h3>
                    <div className={styles["rover-container"]}>
                        <input onChange={handleChange} checked={form.rover === 'perseverance'} type="radio" name="rover"
                               value="perseverance"/>
                        <label htmlFor="perseverance">Perseverance</label>

                        <input onChange={handleChange} checked={form.rover === 'curiosity'} type="radio" name="rover"
                               value="curiosity"/>
                        <label htmlFor="curiosity">Curiosity</label>

                        <input onChange={handleChange} checked={form.rover === 'opportunity'} type="radio" name="rover"
                               value="opportunity"/>
                        <label htmlFor="opportunity">Opportunity</label>

                        <input onChange={handleChange} checked={form.rover === 'spirit'} type="radio" name="rover"
                               value="spirit"/>
                        <label htmlFor="spirit">Spirit</label>
                    </div>

                    <h3>Pick a Camera</h3>
                    <div className={styles["camera-container"]}>
                        <select onChange={handleChange} value={form.camera} name="camera">
                            <option value="FHAZ">Front Hazard Avoidance Camera</option>
                            <option value="RHAZ">Rear Hazard Avoidance Camera</option>
                            <option value="NAVCAM">Navigation Camera</option>
                        </select>
                    </div>
                    <h3>Choose a Sol</h3>
                    <div className={styles["sol-container"]}>
                        <input onChange={handleChange} name="sol" type="range" min="1" max="1000" value={form.sol}/>
                    </div>
                    <button type="submit">Search!</button>

                </form>
                <div className={styles["gallery-container"]}>
                {roverImage.map((article) => {
                    return (

                            <RoverArticle image={article.image}/>

                    )
                })}
                </div>
                {/*{console.log(roverImage)}*/}

                {/*<img src={roverImage[0]} alt=""/>*/}

            </div>
        </>
    );
}

export default Rover;