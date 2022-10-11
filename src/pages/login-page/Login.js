import React, {useState} from 'react';
import {useForm} from "react-hook-form";


function Login() {
    const {register, handleSubmit} = useForm();

    function onFormSubmit(data) {
        console.log(data);
    }

    return (
        <>
            <div className="inner-container">

                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <fieldset>
                        <legend>Fill in your credentials</legend>
                        <label htmlFor="user-email">
                            Username:
                            <input
                                type="email"
                                id="user-email"
                                {...register("email", {required: true, minLength: {value: 6, message: "Minimum amount of characters is 6",}, validate: (value) => value.includes('@'),
                                })}
                            />
                        </label>

                        <label htmlFor="user-password">
                            Password:
                            <input
                                type="password"
                                id="user-password"
                                {...register("password", {required: true, minLength: 6})}
                            />
                        </label>
                        <button type="submit">Login</button>
                    </fieldset>


                </form>

            </div>
        </>
    );
}

export default Login;