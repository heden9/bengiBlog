/* eslint-disable */
import React from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from '../routes/home';
import Tags from '../routes/tagPage';
import Article from '../routes/article';
import ScrollToTop from '../components/scrollToTop';
import App from '../routes/app';

const Main = ({history}) => (
  <ScrollToTop>
    <App>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/tags" exact component={Tags}/>
        <Route path="/article/:id" exact component={Article}/>  
      </Switch>  
    </App>
  </ScrollToTop>
);

export default Main;
