# Special Payload Values

Beyond the normal firebase special values like `ServerValue.TIMESTAMP`

## `__KEY__`

Special value `__KEY__` will be replace with the "key" part of the path.

Example:

```js
import {firebase_actions, ExtraValues} from 'redux-firebase'

dispatch(firebase_actions.push(
  {
    id: '__KEY__',
    key: ExtraValue.KEY,
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



