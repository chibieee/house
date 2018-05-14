import React from "react";

import NavigationHexagon from "./NavigationHexagon";

class Navigation extends React.Component {
    openSignIn() {
        const signIn = Array.from(
            document.getElementsByClassName("sign-up-container")
        );
        signIn[0].style.display = "block";
        const zero = Array.from(document.getElementsByClassName("zero"));
        zero[0].classList.add("active");
    }

    render() {
        return (
            <nav className="main-navigation-container">
                <div className="login-container">
                    <p onClick={this.openSignIn}>My Profile | Sign out</p>
                </div>
                <NavigationHexagon />
            </nav>
        );
    }
}

export default Navigation;
