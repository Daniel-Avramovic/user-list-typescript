import React, { FC } from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { actions } from '../../state/combineActions'
import { RootState } from '../../state/reducers/combineReducers'
import {
  UnorderedListOutlined,
  AppstoreOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import './header.css';

const Header: FC = () => {
  const { isListView } = useSelector((state: RootState)=>state.usersReducers);
  const dispatch = useDispatch();
  const { setView } = bindActionCreators(actions, dispatch);
  console.log(setView);
  return (
    <header>
      <div className="container head">
        <div>Bit People</div>
        <div>
          <span>About us</span>
          <span>
            <ReloadOutlined />
          </span>
          <span onClick={()=>setView(isListView)}>
            {isListView ? <AppstoreOutlined /> : <UnorderedListOutlined />}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
