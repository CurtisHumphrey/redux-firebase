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
  }
  return state
}
