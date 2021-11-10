import { combineReducers } from 'redux';
import { usersReducers } from './usersReducer';

const reducers = combineReducers({
    usersReducers,
})

export default reducers;

export type RootState = ReturnType<typeof reducers>