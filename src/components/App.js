import React, { Fragment } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';

const PastTtrials = () => <h1>Past Trials</h1>;
const HowItWorks = () => <h1>HowItWorks</h1>;
const LogIn = () => <h1>Log In / Sing Up</h1>;

const App = () => (
  <div>
    <BrowserRouter>
        <Fragment>
          <Header />
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={PastTtrials} path="/past-trials" />
            <Route component={HowItWorks} path="/how-it-works" />
            <Route component={LogIn} path="/log-in" />
          </Switch>
        </Fragment>
      </BrowserRouter>
    <Footer />
  </div>
);

export default App;