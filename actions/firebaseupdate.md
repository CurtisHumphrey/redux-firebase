## Update

```
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
      "description": "key value pairs, wpath to each value will be meta.path + key to store the value",
      "type": "object"
    },
    "required": ["type", "meta", "payload"]
  },
  "type": "object",
  "required": ["type", "meta", "payload"]
}
```

returns firebase\_ref

