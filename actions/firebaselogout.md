## Logout

```
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "properties": {
    "type": {
      "type": "enum",
      "enum": ["firebase/logout"]
    }
  },
  "type": "object",
  "required": ["type"]
}
```

Action can also be create via

```js
import {firebase_actions} from 'redux-firebase'

// a_promise is a firebase Promise
const a_promise = dispatch(firebase_actions.logout())
```



