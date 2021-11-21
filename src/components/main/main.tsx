import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from '../../services/getUsers';
import { RootState } from '../../state/reducers/combineReducers'

 
const Main : FC = () => {
    const url:string = "https://randomuser.me/api/?results=15";
    const dispatch = useDispatch()
    const { isLoading, users } = useSelector((state: RootState)=>state.usersReducers);

    useEffect(()=>{
        dispatch({type:"FETCH_USERS", payload:{url}})
    },[])
    console.log(users,isLoading);
    return (
        <h1>mn agepia</h1>
    )
};

export default Main;