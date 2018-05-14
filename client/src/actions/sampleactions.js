import articles from "../sample-articles";
import profiles from "../sample-profiles";

import { auth } from "../base";

export function updateArticles() {
    return {
        type: "UPDATE_ARTICLES",
        payload: {
            newArticles: articles
        }
    };
}

export function updateProfiles() {
    return {
        type: "UPDATE_PROFILES",
        payload: {
            newProfiles: profiles
        }
    };
}

//Firebase Actions

export function getProfiles() {
    return dispatch => {
        auth.onAuthStateChanged(user => {
            dispatch({
                type: "GET_USER",
                payload: user
            });
        });
    };
}

export function createAccount(email, password) {
    return dispatch => auth.createUserWithEmailAndPassword(email, password);
}

export function login(email, password) {
    return dispatch => auth.signInWithEmailAndPassword(email, password);
}
