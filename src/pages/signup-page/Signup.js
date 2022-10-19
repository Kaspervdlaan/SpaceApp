import React from 'react';
import axios from "axios";
import {useForm} from "react-hook-form";
import TopNav from "../../components/topnav-component/TopNav";
import styles from "../gallery-page/Gallery.module.css";
import {useHistory} from "react-router-dom";

function Signup() {
    const {register, handleSubmit} = useForm();
    const BASE_URI = `https://frontend-educational-backend.herokuapp.com/api/auth/signup`
    const history = useHistory()

    async function onFormSubmit(data) {
        try {
            const response = await axios.post(BASE_URI, {
                username: data.username,
                email: data.email,
                password: data.password,
                role: ["user"]
            })
            history.push("/login")

        } catch (e) {
            console.error(e)
            alert(e.response.status)
        }


        console.log(data);
    }


    return (
        <>
            <TopNav/>
            <div className={styles["title-container"]}>
                <h3>Enter your credentials</h3>
            </div>
            <form className="auth-form" onSubmit={handleSubmit(onFormSubmit)}>

                <label htmlFor="user-email">
                    Email:
                    <input
                        type="email"
                        placeholder="user@email.com"
                        id="user-email"
                        {...register("email", {
                            required: true,
                            minLength: {value: 6, message: "Minimum amount of characters is 6",},
                            validate: (value) => value.includes('@'),
                        })}
                    />
                </label>

                <label htmlFor="username">
                    Username:
                    <input
                        type="text"
                        placeholder="username"
                        id="username"
                        {...register("username", {
                            required: true,
                            minLength: {value: 6, message: "Minimum amount of characters is 6"}
                        })}
                    />
                </label>

                <label htmlFor="password">
                    Password:
                    <input
                        type="password"
                        placeholder="password"
                        id="password"
                        {...register("password", {
                            required: true,
                            minLength: {value: 6, message: "Minimum amount of characters is 6"}
                        })}
                    />
                </label>
                <div className="button-container-register">
                    <button type="submit" className="auth-button">Register</button>
                </div>
            </form>

        </>
    );
}

export default Signup;