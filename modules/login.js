const LOGIN = 'login/LOGIN';
const LOGOUT = 'login/LOGOUT';

export const login = () => ({ type: LOGIN });
export const logout = () => ({ type: LOGOUT });

const initialState = {
  logged: false
}

export default function todos(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {...state, logged: true}
    case LOGOUT:
      return {...state, logged: false}
    default:
      return state;
  }
}