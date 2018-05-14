const initialState = {
    profiles: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_PROFILES": {
            return {
                ...state,
                profiles: action.payload
            };
        }
        case "GET_USER": {
            return {
                ...state,
                user: action.payload
            };
        }
        case "FETCH_PROFILES": {
            return action.payload;
        }
        case "ADD_PROFILE": {
            return console.log("added profile");
        }
        default:
            return state;
    }
}
