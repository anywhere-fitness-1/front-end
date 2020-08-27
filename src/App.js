import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute"


import ClientHome from "./components/client/ClientHome";
import ScheduledClasses from "./components/client/ScheduledClasses";

import Dashboard from "./components/instructor/Dashboard";
import CreateClass from "./components/instructor/CreateClass";
import ViewClass from './components/instructor/ViewClass';
import EditClass from './components/instructor/EditClass';

import LinksHome from "./components/LinksHome";
// import Login from "./components/Login";
import ClientLogin from "./components/client/ClientLogin";
import InstructorLogin from "./components/instructor/InstructorLogin";
import ClientSignup from "./components/client/ClientSignup";
import InstructorSignup from "./components/instructor/InstructorSignup";
// import Signup from "./components/Signup";
import ClientOnboarding from "./components/client/ClientOnboarding";
import InstructorOnboarding from "./components/instructor/InstructorOnboarding";
import Header from "./components/Header";
import MainHeader from "./components/MainHeader";

import "./App.css";
import CreatePass from "./components/instructor/CreatePass";


function App() {
  return (
    <div className="App">
      <MainHeader/>
      <Header />
      
      <Route exact path="/">
        <LinksHome />
      </Route>

      <Route exact path="/login/instructor">
        <InstructorLogin />
      </Route>
      <Route exact path="/login/client">
        <ClientLogin />
      </Route>

      <Route exact path="/signup/client">
        <ClientSignup role="client" />
       </Route>

      <Route exact path="/signup/instructor">
        <InstructorSignup role="instructor" />
      </Route>

      <PrivateRoute exact path="/client/onboarding">
        <ClientOnboarding />
      </PrivateRoute>

      <PrivateRoute exact path="/instructor/onboarding">
        <InstructorOnboarding />
      </PrivateRoute>

      <PrivateRoute exact path="/client" component={ClientHome} />
      <PrivateRoute exact path="/client/schedule" component={ScheduledClasses} />


      <PrivateRoute exact path='/instructor/classes/:classID' component={ViewClass} />
      <PrivateRoute path='/instructor/classes/edit/:classID' component={EditClass} />


      {/* <Route exact path='/logout' render={props => <LogOut {...props} />} /> */}

      <PrivateRoute exact path="/instructor" component={Dashboard} />
      <PrivateRoute exact path="/instructor/createclass" component={CreateClass} />
      <PrivateRoute exact path="/instructor/createpass" component={CreatePass} />


    </div>
  );
}

export default App;

