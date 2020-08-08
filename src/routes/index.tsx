import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import HomeEn from '../pages/HomeEn';
import HomeBr from '../pages/HomeBr';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Redirect to="/en" />
      </Route>
      <Route exact path="/en" component={HomeEn} />
      <Route exact path="/pt-br" component={HomeBr} />
    </BrowserRouter>
  );
};

export default Routes;
