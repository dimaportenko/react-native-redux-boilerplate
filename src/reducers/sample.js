import {
    SAMPLE_ACTION_TYPE
} from "../actions/types";

const INITIAL_STATE = {
    test: 'test'
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SAMPLE_ACTION_TYPE:
            return { ...state, test: action.payload };
        default:
            return state;
    }
};
