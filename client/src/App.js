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
import MyStudents from './Pages/MyStudents/MyStudents';
import FindStudents from './Pages/FindStudents/FindStudents';
import AdjustSupport from './Pages/AdjustSupport/AdjustSupport';

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
                        <Route path="/my-students">
                            <Helmet>
                                <title> Aluminus | My Students </title>
                            </Helmet>
                            <MyStudents />
                        </Route>
                        <Route path="/find-students">
                            <Helmet>
                                <title> Aluminus | Find Students </title>
                            </Helmet>
                            <FindStudents />
                        </Route>
                        <Route path="/adjust-support">
                            <Helmet>
                                <title> Aluminus | Adjust Support </title>
                            </Helmet>
                            <AdjustSupport />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
