# User Signed In

This action is generated whenever firebase's onAuthStateChanged return a sign in.  There is no default reducer so it up to you to provide one in your redux.

```JSON
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "properties": {
    "type": {
      "type": "enum",
      "enum": ["firebase/user_signed_in"]
    },
    "payload": {
      "description": "This will be the firebase.UserInfo object",
      "type": "object",
      "required": ["path", "update_action"]
    }
  },
  "type": "object",
  "required": ["type", "payload"]
}
```



