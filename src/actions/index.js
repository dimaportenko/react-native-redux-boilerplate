import {
    SAMPLE_ACTION_TYPE
} from "./types";

export const sampleAction = () => {
    return {
        type: SAMPLE_ACTION_TYPE,
        payload: 'sample_data'
    };
};