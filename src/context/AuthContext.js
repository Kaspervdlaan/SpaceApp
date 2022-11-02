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
            const decodedToken = jwtDecode(token)
            fetchUserData(token, decodedToken)
            console.log(decodedToken);
        } else {
            toggleAuth({
                ...auth,
                status: 'done',
            });
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

                toggleAuth({
                    ...auth,
                    isAuth: true,
                    username: decodedToken.sub,
                    status: 'done',
                });
            } catch (e) {
                console.error(e)
                localStorage.clear();
                toggleAuth({
                    ...auth,
                    status: 'done',
                });
            }
        }

    const history = useHistory();

    function login(token) {
        localStorage.setItem('token', token);
        const decodedToken = jwtDecode(token)

        toggleAuth({
            ...auth,
            isAuth: true,
            username: decodedToken.sub,
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
            {auth.status === 'done' ? children : <p>Loading...</p> }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider