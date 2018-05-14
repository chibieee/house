import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import PostMain from "./posts/PostMain";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/post" component={PostMain} />
        </Switch>
    </BrowserRouter>
);

export default Router;
