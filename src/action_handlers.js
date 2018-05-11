import Firebase from 'firebase'
import _ from 'lodash'

import {SPECIAL_VALUES} from './actions'
import {selectors} from './reducer'

const get_root_ref = () => Firebase.database().ref()

const handlers = {}

function ref_maker(path, sort = {}) {
  let this_ref = get_root_ref().child(path)

  if (sort.orderBy) {
    const value = _.get(sort, 'orderBy.value')
    if (value == null) {
      this_ref = this_ref[`orderBy${sort.orderBy.type}`]()
    } else {
      this_ref = this_ref[`orderBy${sort.orderBy.type}`](value)
    }
  }
  if (sort.startAt) {
    this_ref = this_ref.startAt(sort.startAt)
  }
  if (sort.equalTo) {
    this_ref = this_ref.equalTo(sort.equalTo)
  }
  if (sort.endAt) {
    this_ref = this_ref.endAt(sort.endAt)
  }
  if (sort.limitToFirst) {
    this_ref = this_ref.limitToFirst(sort.limitToFirst)
  }
  if (sort.limitToLast) {
    this_ref = this_ref.limitToLast(sort.limitToLast)
  }
  return this_ref
}

const if_type_dispatch = (dispatch, action) => {
  if (!action.type) return
  dispatch(action)
}

handlers.once = ({meta: {path, update_action, init_value, sort}}) => (dispatch, getState) => {
  const this_ref = ref_maker(path, sort)
  return this_ref.once('value').then((snap) => {
    let payload = snap.val()
    if (!snap.exists() && init_value) {
      this_ref.set(init_value)
      payload = init_value
    }

    if_type_dispatch(dispatch, {
      type: update_action,
      payload,
    })
  })
}
handlers.on = ({meta: {path, update_action, init_value, sort}}) => (dispatch, getState) => {
  const state = selectors.listeners(getState())[path]
  if (state && state.count > 1) return Promise.resolve()

  const this_ref = ref_maker(path, sort)
  let first_time = true
  return new Promise((resolve) => {
    this_ref.on('value', (snap) => {
      if (!snap.exists() && init_value) {
        this_ref.set(init_value)
      } else {
        if_type_dispatch(dispatch, {
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
  this_ref.off()
  return Promise.resolve()
}
handlers.remove = ({meta: {path}}) => (dispatch, getState) => {
  const this_ref = get_root_ref().child(path)
  this_ref.remove()
  return Promise.resolve()
}
handlers.switch = (action) => (dispatch, getState) => {
  if (!action.meta.old_path) return handlers.on(action)(dispatch, getState)

  return handlers.off({meta: {path: action.meta.old_path}})(dispatch, getState)
    .then(() => handlers.on(action)(dispatch, getState))
}

export default _.mapKeys(handlers, (value, key) => `firebase/${key}`)
