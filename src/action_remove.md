---
name: Remove 
menu: Actions
---

# Remove

## Usage
```js
import {firebase_actions} from 'redux-firebase'

// a_promise is a firebase Promise
const a_promise = dispatch(firebase_actions.remove(
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