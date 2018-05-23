import Firebase from 'firebase/app'

export const auth_listener = (dispatch, getState) => {
  if (Firebase.auth == null) return
    
  Firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch({
        type: 'firebase/user_signed_in',
        payload: user.toJSON(),
      })
    } else {
      dispatch({
        type: 'firebase/user_signed_out',
      })
    }
  })
}
