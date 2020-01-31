import React from "react";
import LandingContainer from "./landing/landing_container";
import Modal from "./modal/modal";
import GreetingContainer from "./greeting/greeting_container";
import LoginForm from './session/login_form_container';
import SignupForm from "./session/signup_form_container";
import  { Route } from 'react-router-dom';
import {AuthRoute} from '../util/route_util';
import TeamIndexContainer from "./teams/team_index_container";

const App = () => (
  <div>
    <Modal/>
    <LandingContainer />
    <div className="main-ui">
      {/* <header>
        <h1>Asana Clone</h1>
        <GreetingContainer />
      </header> */}
      {/* <AuthRoute path="/login" component={LoginForm} />
      <AuthRoute path="/signup" component={SignupForm} /> */}
      {/* <Route exact path="/" component={TeamIndexContainer} /> */}

    </div>

  </div>
);

export default App;