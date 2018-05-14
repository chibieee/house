import React from "react";
import PostHeader from "./PostHeader";
import ExploreIn from "./ExploreIn";
import ExploreInFilters from "./ExploreInFilters";

class PostMain extends React.Component {
    render() {
        return (
            <div>
                <ExploreInFilters />
                <div>
                    <PostHeader />

                    <ExploreIn />
                </div>
            </div>
        );
    }
}

export default PostMain;
