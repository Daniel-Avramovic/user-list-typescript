import { put, takeEvery, call } from 'redux-saga/effects';
import { getUsers } from '../../services/getUsers';

function* FetchUser(action:any):object {
    try{
        yield put({type:'setLoading', payload:true})
        const users:any = yield call(getUsers, action.payload.url);
        console.log(users.results);
        yield put({type:'setUsers', payload: users.results})
        yield put({type:'setLoading', payload:false})
    } catch(err){
        console.log(err);
    }
};

function* mySaga(){
    yield takeEvery("FETCH_USERS", FetchUser);
}

export default mySaga;