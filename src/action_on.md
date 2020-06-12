---
name: On 
menu: Actions
---

# On \(for value\)

## Usage
```js
import {firebase_actions} from 'redux-firebase'

// a_promise is a Promise that returns once the first data is loaded
const a_promise = dispatch(firebase_actions.on(
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
      "enum": ["firebase/on"]
    },
    "meta": {
      "properties": {
        "path": {
          "description": "firebase path",
          "type": "string"
        },
        "update_action": {
          "description": 
            "The name of the redux action to generate when firebase returns the value. If function provided it will call like dispatch(function(data)). Useful if function is a thunk. If none is provided no action is sent",
          "types": ["string", "function"],
        },
        "init_value": {
          "description": 
            "if this path is null (i.e., missing) this object will be saved there and returned. This is ingored if batch is used because batch assumed a list structure.",
          "type": "object"
        },
        "batch": {
          "type": "number",
          "description": 
            "If provided it will batch in these amounts e.g., if 1000 and have 1500 children, 2 update_action events will be called. Default is get them all"
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
                  "description": "the value passed in like orderByChild(\"value\")",
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
              "limitToFirst": {
                "type": "number",
              },
              "limitToLast": {
                "type": "number",
              }
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