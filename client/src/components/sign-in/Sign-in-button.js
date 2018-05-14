import React from "react";
import ReactDOM from "react-dom";

class SignInButton extends React.Component {
    constructor(props) {
        super(props);

        this.prevSignUpContainer = this.prevSignUpContainer.bind(this);
        this.nextSignUpContainer = this.nextSignUpContainer.bind(this);
    }
    prevSignUpContainer() {
        let parent = ReactDOM.findDOMNode(this).parentElement.parentElement;
        parent.classList.remove("active");
        parent.previousSibling.classList.add("active");
    }

    nextSignUpContainer() {
        let parent = ReactDOM.findDOMNode(this).parentElement.parentElement;
        parent.classList.remove("active");
        parent.nextSibling.classList.add("active");
    }

    render() {
        return (
            <button
                className={`sign-up-button ${this.props.class}`}
                onClick={
                    this.props.click === "next"
                        ? this.nextSignUpContainer
                        : this.prevSignUpContainer
                }
            >
                <i className={`fas fa-angle-${this.props.icon}`} />
            </button>
        );
    }
}

export default SignInButton;
