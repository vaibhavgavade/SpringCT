import {combineReducers} from 'redux';
import updateSlice from './reducer/updateSlice';
const rootReducer = combineReducers({
  updateReducer: updateSlice,
});

export default rootReducer;
