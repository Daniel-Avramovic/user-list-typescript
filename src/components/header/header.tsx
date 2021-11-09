import React, { FC } from "react";
import {
  UnorderedListOutlined,
  AppstoreOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import './header.css';

const Header: FC = () => {
  return (
    <header>
      <div className="container head">
        <div>Bit People</div>
        <div>
          <span>About us</span>
          <span>
            <ReloadOutlined />
          </span>
          <span>
            {false ? <UnorderedListOutlined /> : <AppstoreOutlined />}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
