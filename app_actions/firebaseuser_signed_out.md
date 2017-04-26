# User Signed Out

This action is generated whenever firebase's onAuthStateChanged return a sign out.  There is no default reducer so it up to you to provide one in your redux.

```JSON
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "properties": {
    "type": {
      "type": "enum",
      "enum": ["firebase/user_signed_out"]
    }
  },
  "type": "object",
  "required": ["type"]
}
```





