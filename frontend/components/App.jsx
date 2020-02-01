import React from 'react';
import SplashContainer from './splash/splash_container';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import MainSectionProjectIndex from './main_section/main_section_index_container';
import ProjectShowContainer from './projects/show_project/project_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import AsideSectionProjectIndex from '../components/aside_section/aside_section_index_container';


const App = () => {

  return (
    <div>
      <header>
        <h1 className="logo">BlueAsana</h1>
        {/* <img src="app/assets/images/favicon.ico"/> */}
      </header>
      <Modal />
      <SplashContainer />
      <div className="main-ui">
        <ProtectedRoute path="/teams/:teamId" component={AsideSectionProjectIndex} />
        <Switch>
          <ProtectedRoute exact path="/teams/:teamId" component={MainSectionProjectIndex}/>
          <ProtectedRoute exact path="/teams/:teamId/projects/:projectId" component={ProjectShowContainer}/>
        </Switch>
      </div>
    </div>
  );
};

export default App;
