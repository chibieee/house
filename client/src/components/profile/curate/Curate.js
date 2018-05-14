import React from "react";
import CausesHexagon from "./CausesHexagon";
import Campaigns from "./Campaigns";
import Artists from "./Artists";
import Brands from "./Brands";

class Curate extends React.Component {
    render() {
        return (
            <div className="curate-container">
                <h2>curate my feed</h2>
                <div className="curate-content">
                    <CausesHexagon causes={this.props.causes} />
                    <Campaigns />
                    <Artists />
                    <Brands />
                </div>
            </div>
        );
    }
}

export default Curate;
