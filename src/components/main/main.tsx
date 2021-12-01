import React, { FC, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/reducers/combineReducers";
import GridView from "../gridView/GridView";

const Main: FC = () => {
  const url: string = "https://randomuser.me/api/?results=15";
  const dispatch = useDispatch();
  const { isLoading, users } = useSelector(
    (state: RootState) => state.usersReducers
  );

  useEffect(() => {
    dispatch({ type: "FETCH_USERS", payload: { url } });
  }, []);
  console.log(users);
  return (
    <Fragment>  
        {isLoading? <h1>loading..</h1>:<GridView  users = {users} />}
    </Fragment>
  );
};

export default Main;
