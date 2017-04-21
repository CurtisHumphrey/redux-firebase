import Firebase from 'firebase'

export const auth_listener = (dispatch, getState) => {
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
