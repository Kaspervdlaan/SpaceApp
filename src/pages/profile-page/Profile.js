import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";

function Profile() {
    const { auth } = useContext(AuthContext)

    return (
        <>
            <h1>profile page</h1>
            <h3>de user is: {auth.username}</h3>
            <h3>user is: {auth.isAuth ? 'authorised' : 'unauthorised'}</h3>
        </>
    );
}

export default Profile;