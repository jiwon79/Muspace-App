const LOGIN = 'userInfo/LOGIN';
const LOGOUT = 'userInfo/LOGOUT';

export const login = () => ({ type: LOGIN });
export const logout = () => ({ type: LOGOUT });

const initialState = {
  logged: true
}

export default function userInfo(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {...state, logged: true}
    case LOGOUT:
      return {...state, logged: false}
    default:
      return state;
  }
}