import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Navbar from './components/layout/navbar/Navbar';
import Home from './components/home/Home';
import Register from './components/auth/register/Register';
import SignIn from './components/auth/sign_in/Sign_in';
import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/profile/Profile';
import NotFound from './components/not_found/Not_Found';
import Footer from './components/layout/footer/Footer';

// Utils
import PrivateRoute from './utils/PrivateRoute';
import store from './utils/store';
import { Provider } from 'react-redux';

const App = () => (
  <Provider store={store}>
    <div className='app-container'>
      <Router>
        <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/sign-in' component={SignIn} />

            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/profile' component={Profile} />
            
            <Route path='*' component={NotFound} />
          </Switch>
        <Footer />
      </Router>
    </div>
  </Provider>
);

export default App;