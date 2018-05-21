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

const if_type_dispatch = ({dispatch, update_action, payload}) => {
  if (!update_action) return
  if (_.isFunction(update_action)) {
    dispatch(update_action(payload))
  } else { 
    dispatch({
      type: update_action,
      payload,
    })
  }
}

handlers.once = ({meta: {path, update_action, init_value, batch, sort}}) => (dispatch, getState) => {
  if (batch) return batch_get({is_on: false, path, update_action, init_value, batch, sort, dispatch, getState})

  const this_ref = ref_maker(path, sort)
  return this_ref.once('value').then((snap) => {
    let payload = snap.val()
    if (!snap.exists() && init_value) {
      this_ref.set(init_value)
      payload = init_value
    }

    if_type_dispatch({dispatch, update_action, payload})
  })
}
const batch_check = ({is_on, path, update_action, batch, sort, dispatch}) => (snap) => {
  let keys = []
  snap.forEach((child_snap) => {
    keys.push(child_snap.key)
  })
  if (keys.length > 1) {
    if_type_dispatch({dispatch, update_action, payload: snap.val()})
  }
  if (keys.length < batch) {
    // end
    if (is_on) {
      // continue listening
      sort.limitToFirst = undefined
      sort.startAt = keys[keys.length - 1]
      const ref = ref_maker(path, sort)
      ref.on('child_added', (snap) => {
        if_type_dispatch({dispatch, update_action, payload: {[snap.key]: snap.val()}})
      })
    }
    return Promise.resolve()
  }
  // need more
  sort.limitToFirst = batch
  sort.startAt = keys[keys.length - 1]
  const ref = ref_maker(path, sort)

  return ref.once('value').then(batch_check({is_on, path, update_action, batch, sort, dispatch}))
}
const batch_get = ({is_on, path, update_action, batch, sort = {}, dispatch}) => {
  sort.limitToFirst = batch
  sort.orderBy = sort.orderBy || {type: 'Key'}
  let ref = ref_maker(path, sort)
  return ref.once('value')
    .then(batch_check({is_on, path, update_action, batch, sort, dispatch}))
}

handlers.on = ({meta: {path, update_action, init_value, batch, sort}}) => (dispatch, getState) => {
  const state = selectors.listeners(getState())[path]
  if (state && state.count > 1) return Promise.resolve()

  if (batch) return batch_get({is_on: true, path, update_action, init_value, batch, sort, dispatch, getState})

  const this_ref = ref_maker(path, sort)
  let first_time = true
  return new Promise((resolve) => {
    this_ref.on('value', (snap) => {
      if (!snap.exists() && init_value) {
        this_ref.set(init_value)
      } else {
        if_type_dispatch({dispatch, update_action, payload: snap.val()})
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
