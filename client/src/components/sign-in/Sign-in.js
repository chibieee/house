import React from "react";
import { connect } from "react-redux";

import SignInButton from "./Sign-in-button";
import { createAccount } from "../../actions/sampleactions";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: "",
            email: "",
            password: ""
        };
    }

    closeSignIn() {
        const signIn = Array.from(
            document.getElementsByClassName("sign-up-container")
        );
        signIn[0].style.display = "none";
    }

    onSubmit(event) {
        event.preventDefault();
        this.props
            .createAccount(this.state.email, this.state.password)
            .catch(err => console.log(err));
        const confirm = Array.from(
            document.getElementsByClassName("confirmation-overlay")
        );
        confirm[0].style.display = "block";
    }

    render() {
        return (
            <div className="sign-up-container">
                <div className="sign-up-top-container">
                    <div onClick={this.closeSignIn} className="sign-up-hexagon">
                        <div className="cancel-container">
                            <span className="menu-line" id="menu-line-1" />
                            <span className="menu-line" id="menu-line-2" />
                        </div>
                    </div>
                </div>
                <h1>be.in</h1>
                <div className="sign-up-item-container">
                    <div className="sign-up-item zero">
                        <h2>introduction title</h2>
                        <h3>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Praesent rutrum arcu nisi, a molestie nisi
                            lobortis sed. Phasellus tortor ipsum, efficitur et
                            pharetra eget, aliquet id nisi. Praesent vitae
                            finibus quam, ut tempor ex. Sed ut perspiciatis unde
                            omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur
                            aut odit aut fugit, sed quia consequuntur magni
                            dolores eos qui ratione voluptatem sequi nesciunt.
                        </h3>
                        <div className="sign-up-button-container">
                            <SignInButton
                                class={"next"}
                                icon={"right"}
                                click={"next"}
                            />
                        </div>
                    </div>

                    <div className="sign-up-item one">
                        <h2>who are you?</h2>
                        <h3>[start by telling us your name]</h3>
                        <input
                            id="name"
                            type="text"
                            label="name"
                            onChange={event =>
                                this.setState({
                                    name: event.target.value
                                })
                            }
                        />
                        <div className="sign-up-button-container">
                            <SignInButton
                                class={"prev"}
                                icon={"left"}
                                click={"prev"}
                            />
                            <SignInButton
                                class={"next"}
                                icon={"right"}
                                click={"next"}
                            />
                        </div>
                    </div>
                    <div className="sign-up-item two">
                        <h2>where can we find you?</h2>
                        <h3>[what's your email address]</h3>
                        <input
                            id="email"
                            type="email"
                            label="email"
                            onChange={event =>
                                this.setState({
                                    email: event.target.value
                                })
                            }
                        />
                        <h3>[what password would you like to have?]</h3>
                        <input
                            id="password"
                            type="password"
                            label="password"
                            onChange={event =>
                                this.setState({
                                    password: event.target.value
                                })
                            }
                        />
                        <div className="sign-up-button-container">
                            <SignInButton
                                class={"prev"}
                                icon={"left"}
                                click={"prev"}
                            />
                            <SignInButton
                                class={"next"}
                                icon={"right"}
                                click={"next"}
                            />
                        </div>
                    </div>
                    {/*
                    <div className="sign-up-item three">
                        <h2>what do you care about?</h2>
                        <h3>[select the causes that you'd like to see here]</h3>
                        <div className="sign-up-button-container">
                            <div className="sign-up-button prev">
                                <i className="fas fa-angle-left" />
                            </div>
                            <div className="sign-up-button next">
                                <i className="fas fa-angle-right" />
                            </div>
                        </div>
                    </div>
                    */}
                    <div className="sign-up-item four">
                        <h2>care to elaborate?</h2>
                        <h3>[tell us why you identify with your causes]</h3>
                        <textarea rows="6" />
                        <div className="sign-up-button-container">
                            <SignInButton
                                class={"prev"}
                                icon={"left"}
                                click={"prev"}
                            />
                            <button
                                className="sign-up-button submit"
                                onClick={this.onSubmit}
                            >
                                <i className="fas fa-angle-check" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="confirmation-overlay">
                    <div className="confirmation-wrapper">
                        <div className="confirmation-content">
                            <h2>thanks!</h2>
                            <h3>
                                [look out for a confirmation email and spread
                                the word...]
                            </h3>
                        </div>
                        <div className="confirmation-close">
                            <i className="fas fa-times" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { createAccount })(SignIn);
