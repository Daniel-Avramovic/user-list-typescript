import React, { FC } from 'react';
import { useSelector } from "react-redux";
import { RootState } from '../../state/reducers/combineReducers'
 
const Main : FC = () => {
    const { isLoading } = useSelector((state: RootState)=>state.usersReducers);
    return (
        <h1>mn agepia</h1>
    )
};

export default Main;