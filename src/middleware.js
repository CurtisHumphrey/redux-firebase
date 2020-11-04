import Firebase from "firebase/app";

import { auth_listener } from "./app_listeners";
import action_handlers from "./action_handlers";

const firebase_exchanger = (store) => {
  auth_listener(store.dispatch, store.getState);

  return (next) => (action) => {
    if (action_handlers[action.type] != null) {
      switch (action.type) {
        case "firebase/on":
        case "firebase/switch":
          // setup handlers before saving their paths
          const response = action_handlers[action.type](action)(
            store.dispatch,
            store.getState
          );
          next(action);
          return response;
        default:
          next(action);
          return action_handlers[action.type](action)(
            store.dispatch,
            store.getState
          );
      }
    }
    return next(action);
  };
};

// middleware maker
export default (config) => {
  try {
    Firebase.initializeApp(config);
  } catch (err) {} // silence reinitialize warning (hot-reloading)

  if (config.enableLogging && __DEV__) {
    Firebase.database.enableLogging(config.enableLogging);
  }

  return firebase_exchanger;
};
