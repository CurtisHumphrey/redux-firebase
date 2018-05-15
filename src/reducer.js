// -------
// Initial State
// --------

const initial_state = {}

// -------
// Selectors
// --------
const BASE = 'firebase'

export const selectors = {
  listeners: (state) => state[BASE],
}

// ------------------------------------
// Reducer and Actions
// ------------------------------------
export default (state = initial_state, action = {}) => {
  const {type, meta} = action
  switch (type) {
    case 'firebase/on': return {
      ...state,
      [meta.path]: {
        action: meta.update_action,
        count: state[meta.path] ? state[meta.path].count + 1 : 1,
      },
    }
    case 'firebase/off': return {
      ...state,
      [meta.path]: null,
    }
    case 'firebase/switch':
      if (meta.path === meta.old_path) {
        return {
          ...state,
          [meta.path]: {
            action: meta.update_action,
            count: 1,
          },
        }
      }
      let response
      if (meta.old_path) {
        response = {
          ...state,
          [meta.old_path]: null,
        }
      }
      return {
        ...response,
        [meta.path]: {
          action: meta.update_action,
          count: 1,
        },
      }
      break
  }
  return state
}
