## Remove

```
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "properties": {
    "type": {
      "type": "enum",
      "enum": ["firebase/remove"]
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
const a_ref = dispatch(firebase_actions.on(
  {
    // meta
  }
))
```



