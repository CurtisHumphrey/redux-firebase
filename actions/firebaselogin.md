# Login

```
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "properties": {
    "type": {
      "type": "enum",
      "enum": ["firebase/login"]
    },
    "payload": {
      "properties": {
        "email": {
          "description": "if password is provided will use firebase's authWithPassword",
          "type": "string"
        },
        "password": {
          "description": "if provided will use firebase's authWithPassword",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  "type": "object",
  "required": ["type", "payload"]
}
```

Action can also be create via

```js
import {firebase_actions} from 'redux-firebase'

// a_promise is a firebase Promise
const a_promise = dispatch(firebase_actions.login(
  {
    // payload
  }
))
```



