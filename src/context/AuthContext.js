import React, {createContext, useState} from "react";
import {useHistory} from "react-router-dom";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [auth, toggleAuth] = useState({
        isAuth: false,
        username: null,
    });
    const history = useHistory();

    function login(token, user) {
        console.log(token);
        localStorage.setItem('token', token);

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
        console.log("user uigelogd");
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
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider