import React, {useContext} from 'react';
import {useForm} from "react-hook-form";
import {AuthContext} from "../../context/AuthContext";
import {Link} from "react-router-dom";
import axios from "axios";
import TopNav from "../../components/topnav-component/TopNav";


function Login() {
    const {register, handleSubmit} = useForm();
    const {loginFunction} = useContext(AuthContext)
    const BASE_URI = `https://frontend-educational-backend.herokuapp.com/api/auth/signin`

    async function onFormSubmit(data) {
        try {
            const response = await axios.post(BASE_URI, {
                username: data.username,
                password: data.password,
            });
            loginFunction(response.data.accessToken, data.username)

        } catch (e) {
            console.error(e);
            if (e.response.status === 401) {
                alert("Credentials dont match, try again.")
            }

        }
    }

    return (
        <>

            <TopNav/>
            <form className="auth-form" onSubmit={handleSubmit(onFormSubmit)}>
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
                <div className="button-container">
                    <p>New user? Click <Link to="/signup"><span className="signup-link">here </span></Link>to sign up.</p>
                    <button className="auth-button" type="submit">Login</button>
                </div>
            </form>

        </>
    );
}

export default Login;