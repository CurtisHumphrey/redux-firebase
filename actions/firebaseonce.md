# Once \(only value\)

```JSON
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "properties": {
    "type": {
      "type": "enum",
      "enum": ["firebase/once"]
    },
    "meta": {
      "properties": {
        "path": {
          "description": "firebase path",
          "type": "string"
        },
        "update_action": {
          "description": "the name of the redux action to generate when firebase returns the value",
          "type": "string"
        },
        "init_value": {
          "description": "if this path is null (i.e., mission) this object will be saved there and returned",
          "type": "object"
        }
      },
      "type": "object",
      "required": ["path", "update_action"]
    }
  },
  "type": "object",
  "required": ["type", "meta"]
}
```

Action can also be create via

```js
import {firebase_actions} from 'redux-firebase'

// a_ref is a firebase reference
const a_ref = dispatch(firebase_actions.once(
  {
    // meta
  }
))
```



