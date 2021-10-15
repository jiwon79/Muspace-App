const LOGIN = 'userInfo/LOGIN';
const LOGOUT = 'userInfo/LOGOUT';

export const login = () => ({ type: LOGIN });
export const logout = () => ({ type: LOGOUT });

type UserInfoAction =
  | ReturnType<typeof login>
  | ReturnType<typeof logout>;

type userInfoState = {
  logged: boolean
}

const initialState = {
  logged: true
}

function userInfo(
  state: userInfoState = initialState, 
  action: UserInfoAction
  ) {
  switch (action.type) {
    case LOGIN:
      return {...state, logged: true}
    case LOGOUT:
      return {...state, logged: false}
    default:
      return state;
  }
}

export default userInfo;