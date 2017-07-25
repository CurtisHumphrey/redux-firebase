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
      [meta.path]: meta.update_action,
    }
    case 'firebase/off': return {
      ...state,
      [meta.path]: null,
    }
  }
  return state
}
