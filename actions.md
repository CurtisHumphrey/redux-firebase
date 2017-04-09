## FIREBASE\_PAYLOAD

1. Object with path as key.  Full path with therefore be meta.path + key
2. Special value `__ID__` will be replace with the "key" part of the path

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
          "description": "the name of the redux action to generate when firebase returns the value",
          "type": "string"
        },
        "init_value": {
          "description": "if this path is null (i.e., mission) this object will be saved there and returned",
          "type": "object"
        }
      },
      "type": "object",
      "required": ["path", "update_action"]
    }
  },
  "type": "object",
  "required": ["type", "meta"]
}
```

returns firebase\_ref

## On \(for value\)

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
          "description": "the name of the redux action to generate when firebase returns the value",
          "type": "string"
        },
        "init_value": {
          "description": "if this path is null (i.e., mission) this object will be saved there and returned",
          "type": "object"
        }
      },
      "type": "object",
      "required": ["path", "update_action"]
    }
  },
  "type": "object",
  "required": ["type", "meta"]
}
```

returns firebase\_ref

## Off

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

returns firebase\_ref

## Set

```JSON
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "properties": {
    "type": {
      "type": "enum",
      "enum": ["firebase/set"]
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
  },
  "type": "object",
  "required": ["type", "meta", "payload"]
}
```

returns firebase\_ref

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

## Push

```JSON
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "properties": {
    "type": {
      "type": "enum",
      "enum": ["firebase/push"]
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
      "description": "key value pairs, where the path to each value will be meta.path + push's id + key to store the value",
      "type": "object"
    },
    "required": ["type", "meta", "payload"]
  },
  "type": "object",
  "required": ["type", "meta", "payload"]
}
```

returns firebase\_ref

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

returns firebase\_ref

