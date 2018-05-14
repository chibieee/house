import React, { Component } from "react";
import "./style.css";

import Navigation from "./components/Navigation";
import Profile from "./components/profile/Profile";

class App extends Component {
    //Connecting to Express
    componentDidMount() {}

    //End Connecting to Express
    render() {
        return (
            <div className="house-react-main">
                <Navigation />
                <Profile />
            </div>
        );
    }
}

export default App;
