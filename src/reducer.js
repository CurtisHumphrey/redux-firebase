// -------
// Initial State
// --------

const initial_state = {};

// -------
// Selectors
// --------
const BASE = "firebase";

export const selectors = {
  listeners: (state) => state[BASE],
};

// ------------------------------------
// Reducer and Actions
// ------------------------------------
function to_on_state({ state, path, update_action }) {
  return state[path]
    ? state
    : {
        ...state,
        [path]: {
          action: update_action,
        },
      };
}
function to_off_state({ state, path }) {
  return !state[path]
    ? state
    : {
        ...state,
        [path]: null,
      };
}
export default (state = initial_state, action = {}) => {
  const { type, meta } = action;
  switch (type) {
    case "firebase/on":
      return to_on_state({ state, ...meta });
    case "firebase/off":
      return to_off_state({ state, ...meta });
    case "firebase/switch":
      state = to_on_state({ state, ...meta });
      state = to_off_state({ state, path: meta.old_path });
      return state;
  }
  return state;
};
