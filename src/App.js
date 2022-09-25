import React from "react";
import './App.css';
import {Switch, Route} from "react-router-dom";

import News from "./pages/news-page/News";
import Launch from "./pages/launch-page/Launch";
import Iss from "./pages/iss-page/Iss";
import Header from "./components/header-component/Header";
import Gallery from "./pages/gallery-page/Gallery";
import Rover from "./pages/rover-page/Rover";
import Footer from "./components/footer-component/Footer";

function App() {
    return (
        <>
            <Header/>
            <div className="outer-container">
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
                    <Route path="/iss">
                        <Iss/>
                    </Route>
                    <Route path="/rover">
                        <Rover/>
                    </Route>
                </Switch>
            </div>
            <Footer/>
        </>
    );
}

export default App;
