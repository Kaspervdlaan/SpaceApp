import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";
import TopNav from "../../components/topnav-component/TopNav";

function Profile() {
    const { auth } = useContext(AuthContext)

    return (
        <>
            <TopNav/>
            <h1>profile page</h1>
            <h3>de user is: {auth.username}</h3>
            <h3>user is: {auth.isAuth ? 'authorised' : 'unauthorised'}</h3>
        </>
    );
}

export default Profile;