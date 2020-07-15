export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export function login() {
  localStorage.setItem('logged', true)
  return {
    type: LOGIN
  }

}

export function logout() {
  localStorage.removeItem('logged')
  return {
    type: LOGOUT
  }

}
