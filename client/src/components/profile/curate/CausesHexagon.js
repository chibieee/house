import React from "react";

class CausesHexagon extends React.Component {
    render() {
        return (
            <div className="profile-causes">
                <h2>my causes</h2>
                <p>[add/edit your causes below as your interests evolve]</p>
                <div className="causes-grid">
                    <div
                        className="causes-item"
                        style={this.props.causes.cause1["style"]}
                    >
                        <div className="causes-item-overlay">
                            {this.props.causes.cause1["name"]}
                        </div>
                    </div>
                    <div
                        className="causes-item"
                        style={this.props.causes.cause2["style"]}
                    >
                        <div className="causes-item-overlay">
                            {this.props.causes.cause2["name"]}
                        </div>
                    </div>
                    <div className="nested-grid">
                        <div
                            className="causes-item"
                            style={this.props.causes.cause3["style"]}
                        >
                            <div className="causes-item-overlay">
                                {this.props.causes.cause3["name"]}
                            </div>
                        </div>
                        <div
                            className="causes-item"
                            style={this.props.causes.cause4["style"]}
                        >
                            <div className="causes-item-overlay">
                                {this.props.causes.cause4["name"]}
                            </div>
                        </div>
                    </div>
                    <div
                        className="causes-item"
                        style={this.props.causes.cause5["style"]}
                    >
                        <div className="causes-item-overlay">
                            {this.props.causes.cause5["name"]}
                        </div>
                    </div>
                    <div
                        className="causes-item"
                        style={this.props.causes.cause6["style"]}
                    >
                        <div className="causes-item-overlay">
                            {this.props.causes.cause6["name"]}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CausesHexagon;
