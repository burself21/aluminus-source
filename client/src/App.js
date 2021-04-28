import React, { useState } from 'react';

import { Helmet } from 'react-helmet';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { Home } from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import FindSchool from './Pages/FindSchool/FindSchool';
import FindStudents from './Pages/FindStudents/FindStudents';


class App extends React.Component {

    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <div id='app-main'>
                    <Switch>
                        <Route exact path="/">
                            <Helmet>
                                <title> Aluminus </title>
                            </Helmet>
                            <Home />
                        </Route>
                        <Route path="/home">
                            <Redirect to="/" />
                        </Route>
                        <Route path="/login">
                            <Helmet>
                                <title> Aluminus | Log In </title>
                            </Helmet>
                            <Login />
                        </Route>
                        <Route path="/signup">
                            <Helmet>
                                <title> Aluminus | Sign Up </title>
                            </Helmet>
                            <Signup />
                        </Route>
                        <Route path="/new-user">
                            <Helmet>
                                <title> Aluminus | Find Your Alma Mater </title>
                            </Helmet>
                            <FindSchool />
                        </Route>
                        <Route path="/find-students">
                            <Helmet>
                                <title> Aluminus | Find Students </title>
                            </Helmet>
                            <FindStudents />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
