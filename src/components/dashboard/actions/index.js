import { GET_MY_DETAILS, GET_PROJECT_LIST } from './types';
import api from '../../../api/api';

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

export const getMyDetails = () => {
    return (dispatch) => {
        return api.get('myData.json', config)
        .then((response) => {
            dispatch(getDetails(response.data));
        })
        .catch((err) => {
            console.log("error is", err);
        })
    }
};

export const getProjectData = () => {
    return (dispatch) => {
        return api.get('myData.json', config)
        .then((response) => {
            dispatch(getData(response.data))
        })
        .catch((err) => {
            console.log(err);
        })
    }
};

const getDetails = (actionDetailsData) => {
    return {
        type: GET_MY_DETAILS,
        payload: {
            actionDetailsData,
            error: null
        }
    }
};

const getData = (actionProjectList) => {
    return {
        type: GET_PROJECT_LIST,
        payload: {
            actionProjectList,
            error: null
        }
    }
};