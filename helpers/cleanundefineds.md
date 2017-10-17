# clean\_undefineds

Will translated undefineds to null for use in Firebase

```js
import {helpers} from 'redux-firebase'

let payload = {
  removed: undefined,
  author: 'test',
}

payload = helpers.clean_undefineds(payload)

// now payload.removed is equal to null
```







