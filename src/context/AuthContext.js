import React, {createContext, useState} from "react";
import {useHistory} from "react-router-dom";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [auth, toggleAuth] = useState({
        isAuth: false,
        user: null,

    })

    const history = useHistory();

    function login(token) {
        console.log(token);

        localStorage.setItem('token', token);




        toggleAuth({
            ...auth,
            isAuth: true,
        });
        console.log("user ingelogd");
        history.push("/profile")
    }

    function logout() {
        toggleAuth({
            ...auth,
            isAuth: false,
            user: null,
        });
        console.log("user uigelogd");
        history.push("/")
    }

    const contextData = {
        auth: auth,
        loginFunction: login,
        logoutFunction: logout,
    }

    return (
        <AuthContext.Provider value={contextData}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider