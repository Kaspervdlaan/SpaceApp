import React from 'react';
import axios from "axios";
import {useForm} from "react-hook-form";
import TopNav from "../../components/topnav-component/TopNav";

function Signup() {
    const {register, handleSubmit} = useForm();
    const BASE_URI = `https://frontend-educational-backend.herokuapp.com/api/auth/signup`

    async function onFormSubmit(data) {
        try {
            const response = await axios.post(BASE_URI, {
                username: data.username,
                email: data.email,
                password: data.password,
                role: ["user"]
            })


        } catch (e) {
            console.error(e)
        }


        console.log(data);
    }


    return (
        <>
            <TopNav/>
            <form className="auth-form" onSubmit={handleSubmit(onFormSubmit)}>
                <label htmlFor="user-email">
                    Email:
                    <input
                        type="email"
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