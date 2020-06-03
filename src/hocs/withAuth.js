import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import sessionsAdapter from '../adapters/sessionAdapter';
import {setInitialState} from '../actions/sessionActions';

const withAuth = WrappedComponent => {
  class AuthedComponent extends React.Component {
    state = {
      authCompleted: this.props.loggedIn
    };

    componentDidMount() {
      if (localStorage.getItem('jwt')) {
        // debugger
        const token = window.localStorage.getItem('jwt')
        sessionsAdapter.reauth(token)
        .then((res) => {
          this.props.setInitialState(res.user)
        })
        // .then(res => console.log('hiiii', res))
        // this.props.fetchUser();
        // this.props.fetchUsers();
      }else{
        this.setState({ authCompleted: true });
      }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.loggedIn) {
        this.setState({ authCompleted: true });
      }
    }

    render() {
      if (this.state.authCompleted) {
        return this.props.loggedIn ? (
          <WrappedComponent {...this.props} />
        ) : (
          <Redirect to="/auth" />
        );
      } else {
        return null;
      }
    }
  }

  const mapStateToProps = state => ({
    loggedIn: !!state.user.id
  });

  return connect(mapStateToProps, {setInitialState})(AuthedComponent);
};

export default withAuth;