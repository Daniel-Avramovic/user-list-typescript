import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/combineReducers';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas/saga'


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducers,{
    
},applyMiddleware(thunk, sagaMiddleware));

sagaMiddleware.run(mySaga);