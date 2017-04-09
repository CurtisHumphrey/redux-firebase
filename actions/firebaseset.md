## Set

```JSON
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "properties": {
    "type": {
      "type": "enum",
      "enum": ["firebase/set"]
    },
    "meta": {
      "properties": {
        "path": {
          "description": "firebase path",
          "type": "string"
        }
      },
      "type": "object",
      "required": ["path"]
    },
    "payload": {
      "description": "key value pairs, wpath to each value will be meta.path + key to store the value",
      "type": "object"
    },
  },
  "type": "object",
  "required": ["type", "meta", "payload"]
}
```

Action can also be create via

```js
import {firebase_actions} from 'redux-firebase'

// a_ref is a firebase reference
const a_ref = dispatch(firebase_actions.set(
  {
    // payload
  },
  {
    // meta
  }
))
```



