import React, { FC, Fragment } from 'react';
import Header from './components/header/header'
import './App.css';
import Main from './components/main/main';

const App:FC = () => {
return(
  <Fragment>
    <Header/>
    <Main />
  </Fragment>
)
}

export default App;
