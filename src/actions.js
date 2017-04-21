import _ from 'lodash'
import firebase from 'firebase'

const actions_has_payload = {
  once: false,
  on: false,
  set: true,
  update: true,
  push: true,
  off: false,
  remove: false,
  switch: false,
}

export default _.mapValues(actions_has_payload, (has_payload, name) => {
  if (has_payload) {
    return (payload, meta) => ({
      type: `firebase/${name}`,
      payload,
      meta,
    })
  }
  return (meta) => ({
    type: `firebase/${name}`,
    meta,
  })
})

export const SPECIAL_VALUES = {
  KEY: '__KEY__',
  TIMESTAMP: firebase.database.ServerValue.TIMESTAMP,
}
