import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";
import TopNav from "../../components/topnav-component/TopNav";
import Article from "../../components/article-component/Article";

function Profile() {
    const { auth } = useContext(AuthContext)

    return (
        <>
            <TopNav/>
            <Article
                date="User Profile"
                title= {auth.username}
                desc= {auth.isAuth ? "User is: Authorised" : "user is Unauthorised"}
            />
        </>
    );
}

export default Profile;