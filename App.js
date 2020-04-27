import React, { Fragment } from 'react';
import Handler from '../src/containers/handler';
import {Route, Switch} from 'react-router-dom';
import Register from './containers/register';
import Login from './containers/login';
import MainPage from '../src/containers/mainPage';
import Shopping from '../src/containers/shopping';
import './App.css';

const App =()=>{
  return(
    <Fragment>
      <Switch>
        <Route path='/' exact component={Handler}/> 
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login}/>
        <Route path='/mainpage' component={MainPage}/>
        <Route path='/shopping' component={Shopping}/>
      </Switch>
    </Fragment>
  );
}

export default App;
