import React from "react";
import { connect } from "react-redux";

import ExploreInPost from "./ExploreInPost";
import { updateArticles } from "../../actions/sampleactions";

class ExploreIn extends React.Component {
    componentWillMount() {
        this.props.updateArticles();
    }

    render() {
        const rendered = this.props.articles;
        if (!rendered) {
            return null;
        }
        return (
            <div className="explore-in-wrapper">
                <section className="explore-in-container">
                    {Object.keys(this.props.articles).map(key => (
                        <ExploreInPost
                            key={key}
                            index={key}
                            post={this.props.articles[key]}
                        />
                    ))}
                </section>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        articles: state.articles.articles.newArticles
    };
}

export default connect(mapStateToProps, { updateArticles })(ExploreIn);
