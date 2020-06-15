---
name: Path 
menu: Special Values
---

# Special Path Values

## `$uid`

Special value `$uid` will be replace with the logged in user's uid in that part of the path.

Example:

```js
import {firebase_actions} from 'redux-firebase'

dispatch(firebase_actions.push(
  {
    name: 'curtis',
    status: 'new user'
  },
  {
    path: 'base/$uid',
  },
))
```
Given a user's uid of `absd-123`, the path will become `base/absd-123`