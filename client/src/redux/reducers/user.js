import { USER } from '../actions/types';

const INITIAL_STATE = {
  isAuth: false,
  user: {}
};

const user = ( state=INITIAL_STATE, action ) => {
  switch(action.type) {
    default:
      return state;
  };
};

export default user;