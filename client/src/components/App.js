import React, { Fragment, useEffect } from 'react';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Landing from './layout/Landing';
import Alert from './layout/Alert';
import Login from './auth/Login';
import Register from './auth/Register';
import Dashboard from './Dashboard/Dashboard';
import CreateProfile from './profile-forms/CreateProfile';
import EditProfile from './profile-forms/EditProfile';
import AddExperience from './profile-forms/AddExperience';
import AddEducation from './profile-forms/AddEducation';
import Profiles from './profiles/Profiles';
import Profile from './profile/Profile';
import Posts from './posts/Posts';
import Post from './post/Post';
import PrivateRoute from './routing/PrivateRoute';
import './App.css';
import setAuthToken from '../utils/setAuthToken';

// Redux
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';

if (localStorage.token) {
    setAuthToken(localStorage.token);
 }
    
    const App = () => {
        useEffect(() => {
            store.dispatch(loadUser());
        }, []);

        return(
        <Provider store={store}>
            <Router>
            <Fragment> 
                <Navbar/>
                <Route exact path='/' component={ Landing }/>
                <section className="container">
                <Alert/>   
                    <Switch>
                        <Route exact path='/register' component={ Register } />
                        <Route exact path='/login' component={ Login } />
                        <Route exact path='/profiles' component={ Profiles } />
                        <Route exact path='/profile/:id' component={ Profile } />
                        <PrivateRoute exact path='/dashboard' component={ Dashboard } />
                        <PrivateRoute exact path='/create-profile' component={ CreateProfile } />
                        <PrivateRoute exact path='/edit-profile' component={ EditProfile } />
                        <PrivateRoute exact path='/add-experience' component={ AddExperience } />
                        <PrivateRoute exact path='/add-education' component={ AddEducation } />
                        <PrivateRoute exact path='/posts' component={ Posts } />
                        <PrivateRoute exact path='/posts/:id' component={ Post } />
                    </Switch>
                </section>
            </Fragment>
            </Router>
        </Provider>
    )};

    export default App;