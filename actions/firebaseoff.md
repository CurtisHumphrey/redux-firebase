# Off

```JSON
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "properties": {
    "type": {
      "type": "enum",
      "enum": ["firebase/off"]
    },
    "meta": {
      "properties": {
        "path": {
          "description": "firebase path",
          "type": "string"
        },
      },
      "type": "object",
      "required": ["path", "update_action"]
    }
  },
  "type": "object",
  "type": "object",
  "required": ["type", "meta"]
}
```

Action can also be create via

```js
import {firebase_actions} from 'redux-firebase'

// a_promise will resolve once off has happened
const a_promise = dispatch(firebase_actions.off(
  {
    // meta
  }
))
```


