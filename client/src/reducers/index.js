import { combineReducers } from "redux";
import postReducer from "./postreducer";
import profilesReducer from "./profilesreducer";

export default combineReducers({
    articles: postReducer,
    profiles: profilesReducer
});
