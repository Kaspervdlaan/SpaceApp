import React, {createContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [auth, toggleAuth] = useState({
        isAuth: false,
        username: null,
        status: 'pending',
    });

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            console.log('wel token')
            const decodedToken = jwtDecode(token)
            fetchUserData(token, decodedToken)
            console.log(decodedToken);

        } else {
            console.log("geen token")
            toggleAuth({
                ...auth,
                status: 'done',
            })
        }
}, []);

        async function fetchUserData(token, decodedToken) {
            try {
                const response = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                });

                console.log(response)

                toggleAuth({
                    ...auth,
                    isAuth: true,
                    username: decodedToken.sub,
                    status: 'done',
                })

            } catch (e) {
                console.error(e)
            }
        }




    const history = useHistory();

    function login(token, user) {
        localStorage.setItem('token', token);
        const decodedToken = jwtDecode(token)

        toggleAuth({
            ...auth,
            isAuth: true,
            username: user,
        });
        console.log("user ingelogd");
        history.push("/profile")
    }

    function logout() {
        toggleAuth({
            ...auth,
            isAuth: false,
            username: null,
        });
        localStorage.clear();
        console.log("user uitgelogd");
        history.push("/")
    }

    const contextData = {
        auth: auth,
        authFunction: toggleAuth,
        loginFunction: login,
        logoutFunction: logout,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {auth.status = 'done' ? children : <p>Loading...</p> }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider