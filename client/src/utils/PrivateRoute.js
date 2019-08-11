import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

const PrivateRoute = ({component: Component, isAuth, ...rest}) => (
  <Route 
    {...rest}
    render = {
      props => isAuth === true ? 
        ( <Component {...props} /> ) : ( <Redirect to='/sign-in' /> )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = ({ isAuth }) => ({
  isAuth
});

export default connect(mapStateToProps, null)(PrivateRoute);