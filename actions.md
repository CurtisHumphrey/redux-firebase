## Push

```JSON
{
    type: 'firebase/push',
    payload: FIREBASE_PAYLOAD,
    meta: {
        path: ''
    }
}
```

returns firebase\_ref

## On Value

```JSON
{
    type: 'firebase/on_value',
    meta: {
        path: '',
        call_action: 'action/name'
    }
}
```

returns firebase\_ref

## Off

```JSON
{
    type: 'firebase/off',
    meta: {
        path: '',
    }
}
```

returns firebase\_ref

## Set

```JSON
{
    type: 'firebase/set',
    payload: FIREBASE_PAYLOAD,
    meta: {
        path: ''
    }
}
```

returns firebase\_ref

## Remove

```JSON
{
    type: 'firebase/remove',
    meta: {
        path: ''
    }
}
```

returns firebase\_ref



