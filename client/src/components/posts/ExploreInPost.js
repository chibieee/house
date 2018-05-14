import React from "react";

class ExploreInPost extends React.Component {
    render() {
        return (
            <div className="post" style={this.props.post.style}>
                <div className="post-overlay">
                    <div className="post-overlay-content">
                        <div className="post-content-mobile" />
                        <div className="post-content-container">
                            <h2 className="post-title">
                                {this.props.post.name}
                            </h2>
                            <p>{this.props.post.desc}</p>
                        </div>
                    </div>
                    <div className="post-overlay-quote" />
                </div>
            </div>
        );
    }
}

export default ExploreInPost;
