import * as LoginActions from '../../actions'

const Login = (state = {
  logged: false
}, action) => {
  switch (action.type) {
    case LoginActions.LOGIN:
      return {
        ...state,
        logged: true
      }
      case LoginActions.LOGOUT:
        return {
          ...state,
          logged: false
        }
        default:
          return {
            ...state
          }


  }
}

export default Login;
