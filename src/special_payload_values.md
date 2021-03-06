---
name: Payload 
menu: Special Values
---

# Special Payload Values

Beyond the normal firebase special values like `ServerValue.TIMESTAMP which is also located on SPECIAL_VALUES as TIMESTAMP`

## `__KEY__`

Special value `__KEY__` will be replace with the "key" part of the path.

Example:

```js
import {firebase_actions, SPECIAL_VALUES} from 'redux-firebase'

dispatch(firebase_actions.push(
  {
    id: '__KEY__', // this works
    key: SPECIAL_VALUES.KEY, // so does this
    name: 'curtis',
  },
  {
    path: 'something',
  },
))

// Or the above could be done as follows with two actions:
const a_ref = dispatch(firebase_actions.push(
  {
    name: 'curtis',
  },
  {
    path: 'something',
  },
))
dispatch(firebase_actions.update(
  {
    id: a_ref.key,
    key: a_ref.key,
  },
  {
    path: 'something/' + a_ref.key,
  },
))
```

## `__UID__`

Special value `__UID__` will be replace with the user id from firebase.

Example:

```js
import {firebase_actions, SPECIAL_VALUES} from 'redux-firebase'

dispatch(firebase_actions.push(
  {
    uid: '__UID__', // this works
    user_id: SPECIAL_VALUES.UID, // so does this
    name: 'curtis',
  },
  {
    path: 'something',
  },
))
```