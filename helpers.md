# Helpers for Firebase

Members of `{helpers} from 'redux-firebase'`

* [clean\_undefineds](/helpers/cleanundefineds.md)

* Helpers

  * generate\_listener\_id\(\):string
  * snap\_to\_updater\({dispatch, updater:func}\):function\(snap\)
  * batch\_updater\({dispatch, updater:func, options}\):function\(\)\(dispatch, getState\)
    * wraps updater \(e.g. update/remove action maker\) in lodash's debounce to reduce redux updates
    * options default to {wait = 200, maxWait = 1000\) which is used in debouce
  * initialize\_if\_empty\({updater:func, initializer:func\)
    * wraps updater with logic
      * IF first call is with snap.exists\(\) === false
      * THEN call initializer\(state, key\) and setup the snap's location
      * Also do not call updater with null but with second pass which will be initializer data
      * Subsequently if snap becomes empty initializer is not recalled
  * join\_once\_maker\({data, id\_path, join\_path, join\_ref}\).then
    * returns mutated data with all joins merge on join\_path
  * join\_on\_maker\({data, id\_path, updater:func, join\_ref, dispatch}\):func
    * return a function to use to turn off the listeners
    * listeners use on\('value'\)
    * each join will dispatch updater\({key\(from data\), value}\)



