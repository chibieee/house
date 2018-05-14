//a reducer takes in two things

//1. the action (info about what happened)
//2. copy of current state

const initialState = {
    articles: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_ARTICLES": {
            return {
                ...state,
                articles: action.payload
            };
        }
        default:
            return state;
    }
}
