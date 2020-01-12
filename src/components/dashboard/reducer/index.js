import { GET_MY_DETAILS, GET_PROJECT_LIST } from '../actions/types';

export function myDetails(state=[], actions) {
    switch(actions.type) {
        case GET_MY_DETAILS:
            return Object.assign({}, state, {reducerDetailsData: actions.payload});
        default:
            return state;
    }
}

export function myProjectsDataList(state=[], actions) {
    switch(actions.type) {
        case GET_PROJECT_LIST:
            return Object.assign({}, state, {reducerProjectsData: actions.payload});
        default:
            return state;
    }
}