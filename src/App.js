import React, {useContext} from "react";
import './App.css';
import {Switch, Route, Redirect} from "react-router-dom";

import News from "./pages/news-page/News";
import Launch from "./pages/launch-page/Launch";
import Iss from "./pages/iss-page/Iss";
import Gallery from "./pages/gallery-page/Gallery";
import Rover from "./pages/rover-page/Rover";
import Login from "./pages/login-page/Login";
import Item from "./pages/item-page/Item";
import Live from "./pages/live-page/Live";

import Footer from "./components/footer-component/Footer";
import Header from "./components/header-component/Header";
import Profile from "./pages/profile-page/Profile";
import Signup from "./pages/signup-page/Signup";
import {AuthContext} from "./context/AuthContext";

function App() {
    const { auth } = useContext(AuthContext);

    return (
        <>
            <div className="outer-container-header">
                <div className="inner-container-header">
                    <Header/>
                </div>
            </div>
            <div className="outer-container">
                <div className="inner-container">
                    <Switch>
                        <Route exact path="/">
                            <News/>
                        </Route>
                        <Route path="/launches">
                            <Launch/>
                        </Route>
                        <Route path="/gallery">
                            <Gallery/>
                        </Route>
                        <Route path="/item/:id">
                            <Item/>
                        </Route>
                        <Route path="/iss">
                            <Iss/>
                        </Route>
                        <Route path="/rover">
                            <Rover/>
                        </Route>
                        <Route path="/login">
                            <Login/>
                        </Route>

                        <Route path="/profile">
                            {console.log(auth)}
                            {/*{auth.isAuth ? */}
                                <Profile/>
                                {/*// : <Redirect to="/login" />}*/}
                        </Route>
                        <Route path="/signup">
                            <Signup/>
                        </Route>
                        <Route path="/live">
                            <Live/>
                        </Route>

                    </Switch>
                </div>
            </div>
            <div className="outer-container-footer">
                <div className="inner-container-footer">
                    <Footer/>
                </div>
            </div>
        </>
    );
}

export default App;
