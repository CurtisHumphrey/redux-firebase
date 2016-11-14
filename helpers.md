# Notes

* Redux store for listener tracking
  * Action add_listener({topic, listener_id})
  * Action remove_listener({topic, listener_id})
  * Selector am_listening(state, {topic})
* Redux store Thunks
  * remove_listener_and_report({topic, listener_id})(dispatch, getState):bool
    * reports if it was last listener
  * add_listener_and_report({topic, listener_id})(dispatch, getState):bool
    * reports if it was the first listener
* Helpers
  * generate_listener_id():string
  * snap_to_updater({dispatch, updater:func}):function(snap)
  * batch_updater({dispatch, updater:func, options}):function()(dispatch, getState)
    * wraps updater (e.g. update/remove action maker) in lodash's debounce to reduce redux updates
    * options default to {wait = 200, maxWait = 1000) which is used in debouce
  * initialize_if_empty({updater:func, initializer:func)
    * wraps updater with logic
      * IF first call is with snap.exists() === false
      * THEN call initializer(state, key) and setup the snap's location
      * Also do not call updater with null but with second pass which will be initializer data
      * Subsequently if snap becomes empty initializer is not recalled
  * join_once_maker({data, id_path, join_path, join_ref}).then
    * returns mutated data with all joins merge on join_path
  * join_on_maker({data, id_path, updater:func, join_ref, dispatch}):func
    * return a function to use to turn off the listeners
    * listeners use on('value')
    * each join will dispatch updater({key(from data), value})

