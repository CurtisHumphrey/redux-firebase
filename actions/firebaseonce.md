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
          "description":
            "The name of the redux action to generate when firebase returns the value. 
             If none is provided no action is sent",
          "type": "string"
        },
        "init_value": {
          "description": "if this path is null (i.e., missing) this object will be saved there and returned",
          "type": "object"
        },
        "sort": {
          "type": "object",
          "properties": {    
            "orderBy": {
              "type": "object",
              "properties": {
                "type": {
                  "description": "The firebase order by type like Child. Will be merged with orderBy like orderByChild",
                  "type": "string",
                },
                "value": {
                  "description": "the value passed in like orderByChild("value")
                  "types": "string",
                },
              },
            },
            "endAt": {
              "types": ["string", "number"],
            },
            "startAt": {
              "types": ["string", "number"],
            },
            "endAt": {
              "types": ["string", "number"],
            },
         },
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

// a_promise is a firebase Promise
const a_promise = dispatch(firebase_actions.once(
  {
    // meta
  }
))
```



