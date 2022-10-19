import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import {AuthContext} from "../../context/AuthContext";
import {Link} from "react-router-dom";
import axios from "axios";


function Login() {
    const {register, handleSubmit} = useForm();
    const { auth, loginFunction, authFunction } = useContext(AuthContext)
    const BASE_URI = `https://frontend-educational-backend.herokuapp.com/api/auth/signin`

    async function onFormSubmit(data) {
        try {
            const response = await axios.post(BASE_URI, {
                username: data.username,
                password: data.password,
            });

            // authFunction.username = data.username
            console.log(response.data.accessToken)
            loginFunction( response.data.accessToken, data.username )
            // localStorage.setItem("user", data.username)

        } catch (e) {
            console.error(e);
            alert(e.response.status)
        }
    }

    return (
        <>
            <div className="inner-container">

                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <fieldset>
                        <legend>Fill in your credentials</legend>
                        <label htmlFor="username">
                            Username:
                            <input
                                type="text"
                                id="username"
                                {...register("username", {required: true, minLength: 6})}
                            />
                        </label>

                        <label htmlFor="password">
                            Password:
                            <input
                                type="password"
                                id="password"
                                {...register("password", {required: true, minLength: 6})}
                            />
                        </label>
                        <button type="submit">Login</button>

                    </fieldset>


                </form>
                <h4>New user? Sign up <Link to="/signup">here!</Link></h4>
            </div>
        </>
    );
}

export default Login;