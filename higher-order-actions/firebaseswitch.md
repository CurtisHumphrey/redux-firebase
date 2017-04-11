# Switch

This higher order action switching the location of a on subscription from the "old\_path" to the new "path"

```JSON
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "properties": {
    "type": {
      "type": "enum",
      "enum": ["firebase/switch"]
    },
    "meta": {
      "properties": {
        "path": {
          "description": "firebase new path to attach the on",
          "type": "string"
        },
        "old_path": {
          "description": "firebase path that current on is attached",
          "type": "string"
        },
        "update_action": {
          "description": "the name of the redux action to generate when firebase returns the value, 
            if omited it will use the original value provided in the firebase/on",
          "type": "string"
        },
        "init_value": {
          "description": "if this path is null (i.e., missing) this object will be saved there and returned, 
            if omited it will use the original value provided in the firebase/on",
          "type": "object"
        }
      },
      "type": "object",
      "required": ["path", "old_path"]
    }
  },
  "type": "object",
  "required": ["type", "meta"]
}
```

Action can also be create via

```js
import {firebase_actions, ExtraValue} from 'redux-firebase'

// a_promise is a Promise that returns once the first data is loaded after the switch
const a_promise = dispatch(firebase_actions.switch(
  {
    // meta
  },
))

// this is equalivate to but as just one redux action:
import {firebase_actions, ExtraValue} from 'redux-firebase'

// the orginal subscription
const meta = {
  path: 'something',
  update_action: 'set_something',
  initial_value: 'great',
}
firebase_actions.on(meta)

// Now the switch
const a_promise = dispatch(firebase_actions.off(meta))
a_promise.then(() => {
  return dispatch(firebase_actions.on({
    ...meta,
    old_path: meta.path,
    path: 'something/new',
  }))
})
.then(() => /* new location data loaded */)
```



