import React from "react";
import { connect } from "react-redux";

import SignIn from "../sign-in/Sign-in";
import { updateProfiles, getProfiles } from "../../actions/sampleactions";
import "../../assets/styles/testing.css";

class Profile extends React.Component {
    componentWillMount() {
        //this.props.updateProfiles();
        this.props.getProfiles();
    }

    render() {
        return (
            <div>
                <SignIn />
                <div className="profile-container">
                    <div className="profile-header">
                        <div className="profile-header-left">
                            <div className="profile-pic">
                                <img
                                    src="http://housestudios.wpengine.com/wp-content/uploads/2018/04/house-profile.jpg"
                                    alt="user profile pic"
                                />
                            </div>
                            <div className="profile-name">
                                <h2>First Name</h2>
                                <h2>Last Name</h2>
                                <h4>
                                    [<span>edit profile</span>]
                                </h4>
                            </div>
                        </div>
                        <div className="profile-header-right">
                            <h3>what i care about</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris.
                            </p>
                        </div>
                    </div>
                    <div className="help-row">
                        <h2>help us to grow the community</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. exercitation ullamco laboris.
                        </p>
                        <button>invite a friend</button>
                    </div>
                    <div className="profile-content">
                        <div className="profile-posts">
                            <h2>recently read/ bookmarked posts</h2>
                            <div className="recent-post">
                                <h4>article headline</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris.
                                </p>
                                <button>View Full Post</button>
                            </div>
                            <div className="recent-post">
                                <h4>article headline</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris.
                                </p>
                                <button>View Full Post</button>
                            </div>
                        </div>
                        {/* <Curate /> */}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        profiles: state.profiles
    };
}

export default connect(mapStateToProps, { updateProfiles, getProfiles })(
    Profile
);
