---
name: Update 
menu: Actions
---

# Update
```js
import {firebase_actions} from 'redux-firebase'

// a_promise is a firebase Promise
const a_promise = dispatch(firebase_actions.update(
  {
    // same values as below for payload
  },
  {
    // same values as below for meta
  }
))
```

## Generated Action
```JSON
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "properties": {
    "type": {
      "type": "enum",
      "enum": ["firebase/update"]
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
      "description": "key value pairs, with path to each value will be meta.path + key to store the value",
      "type": "object"
    },
  },
  "type": "object",
  "required": ["type", "meta", "payload"]
}
```