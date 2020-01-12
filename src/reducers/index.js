import { combineReducers } from 'redux';
import { myDetails, myProjectsDataList } from '../components/dashboard/reducer';

export default combineReducers({
    myDetails,
    myProjectsDataList
});