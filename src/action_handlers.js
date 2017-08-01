import Firebase from 'firebase'
import _ from 'lodash'

import {SPECIAL_VALUES} from './actions'
import {selectors} from './reducer'

const get_root_ref = () => Firebase.database().ref()

const handlers = {}

handlers.once = ({meta: {path, update_action, init_value}}) => (dispatch, getState) => {
  const this_ref = get_root_ref().child(path)
  return this_ref.once('value').then((snap) => {
    let payload = snap.val()
    if (!snap.exists() && init_value) {
      this_ref.set(init_value)
      payload = init_value
    }

    dispatch({
      type: update_action,
      payload,
    })
  })
}
handlers.on = ({meta: {path, update_action, init_value, query}}) => (dispatch, getState) => {
  const state = selectors.listeners(getState())[path]
  if (state && state.count > 1) return Promise.resolve()

  const this_ref = get_root_ref().child(path)
  let first_time = true
  return new Promise((resolve) => {
    this_ref.on('value', (snap) => {
      if (!snap.exists() && init_value) {
        this_ref.set(init_value)
      } else {
        dispatch({
          type: update_action,
          payload: snap.val(),
        })
        if (first_time) {
          first_time = false
          resolve(snap)
        }
      }
    })
  })
}
handlers.set = ({payload, meta: {path}}) => (dispatch, getState) => {
  const this_ref = get_root_ref().child(path)
  return this_ref.set(payload)
}
handlers.update = ({payload, meta: {path}}) => (dispatch, getState) => {
  const this_ref = get_root_ref().child(path)
  return this_ref.update(payload)
}
handlers.push = ({payload, meta: {path}}) => (dispatch, getState) => {
  const this_ref = get_root_ref().child(path).push()
  this_ref.then(() => {
    if (_.isEmpty(payload)) {
      return {}
    }
    const real_payload = _.mapValues(payload, (v) => (v === SPECIAL_VALUES.KEY) ? this_ref.key : v)
    return this_ref.set(real_payload)
  })
  return this_ref
}
handlers.off = ({meta: {path}}) => (dispatch, getState) => {
  const this_ref = get_root_ref().child(path)
  return this_ref.off()
}
handlers.remove = ({meta: {path}}) => (dispatch, getState) => {
  const this_ref = get_root_ref().child(path)
  this_ref.remove()
  return Promise.resolve()
}
handlers.switch = (action) => (dispatch, getState) => {
  return handlers.off({meta: {path: action.meta.path.old_path}})
  .then(() => handlers.on(action))
}

export default _.mapKeys(handlers, (value, key) => `firebase/${key}`)
