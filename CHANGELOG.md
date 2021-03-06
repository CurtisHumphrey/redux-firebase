# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.4.5"></a>
## [1.4.5](https://github.com/CurtisHumphrey/redux-firebase/compare/v1.4.4...v1.4.5) (2020-11-04)


### Bug Fixes

* order should be next then set so that redux lists the order correctly ([861ff3e](https://github.com/CurtisHumphrey/redux-firebase/commit/861ff3e))



<a name="1.4.4"></a>
## [1.4.4](https://github.com/CurtisHumphrey/redux-firebase/compare/v1.4.3...v1.4.4) (2020-10-27)


### Bug Fixes

* on happens after reducer so is blocked ([2f80749](https://github.com/CurtisHumphrey/redux-firebase/commit/2f80749))



<a name="1.4.3"></a>
## [1.4.3](https://github.com/CurtisHumphrey/redux-firebase/compare/v1.4.2...v1.4.3) (2020-10-23)


### Bug Fixes

* out of order action execution ([99e0cba](https://github.com/CurtisHumphrey/redux-firebase/commit/99e0cba))



<a name="1.4.2"></a>
## [1.4.2](https://github.com/CurtisHumphrey/redux-firebase/compare/v1.4.1...v1.4.2) (2020-10-23)


### Bug Fixes

* on could be subscribed more than once ([336bd41](https://github.com/CurtisHumphrey/redux-firebase/commit/336bd41))



<a name="1.4.1"></a>
## [1.4.1](https://github.com/CurtisHumphrey/redux-firebase/compare/v1.4.0...v1.4.1) (2020-07-22)


### Bug Fixes

* not meta just path ([51b8127](https://github.com/CurtisHumphrey/redux-firebase/commit/51b8127))



<a name="1.4.0"></a>
# [1.4.0](https://github.com/CurtisHumphrey/redux-firebase/compare/v1.3.3...v1.4.0) (2020-07-22)


### Features

* no longer storing a on count just the action type ([92c9644](https://github.com/CurtisHumphrey/redux-firebase/commit/92c9644))



<a name="1.3.3"></a>
## [1.3.3](https://github.com/CurtisHumphrey/redux-firebase/compare/v1.3.2...v1.3.3) (2020-07-07)


### Bug Fixes

* ensure ref is passed in converters ([545134b](https://github.com/CurtisHumphrey/redux-firebase/commit/545134b))



<a name="1.3.2"></a>
## [1.3.2](https://github.com/CurtisHumphrey/redux-firebase/compare/v1.3.1...v1.3.2) (2020-07-01)



<a name="1.3.1"></a>
## [1.3.1](https://github.com/CurtisHumphrey/redux-firebase/compare/v1.3.0...v1.3.1) (2020-07-01)


### Bug Fixes

* if not an object do not transform it into one by accident ([449b7b5](https://github.com/CurtisHumphrey/redux-firebase/commit/449b7b5))



<a name="1.3.0"></a>
# [1.3.0](https://github.com/CurtisHumphrey/redux-firebase/compare/v1.2.1...v1.3.0) (2020-06-18)


### Features

* added SPECIAL_VALUES.UID for replacing with user.uid ([f205ee3](https://github.com/CurtisHumphrey/redux-firebase/commit/f205ee3))



<a name="1.2.1"></a>
## [1.2.1](https://github.com/CurtisHumphrey/redux-firebase/compare/v1.2.0...v1.2.1) (2020-06-16)


### Bug Fixes

* wrong firebase case ([1f31921](https://github.com/CurtisHumphrey/redux-firebase/commit/1f31921))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/CurtisHumphrey/redux-firebase/compare/v1.1.1...v1.2.0) (2020-06-15)


### Features

* added $uid to path as a special replacement value ([6514b04](https://github.com/CurtisHumphrey/redux-firebase/commit/6514b04))
* added docz style docs into repo ([5f52dae](https://github.com/CurtisHumphrey/redux-firebase/commit/5f52dae))



<a name="1.1.1"></a>
## [1.1.1](https://github.com/CurtisHumphrey/redux-firebase/compare/v1.1.0...v1.1.1) (2020-03-11)


### Bug Fixes

* force on to be async ([4294300](https://github.com/CurtisHumphrey/redux-firebase/commit/4294300))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/CurtisHumphrey/redux-firebase/compare/v1.0.1...v1.1.0) (2020-02-28)


### Features

* added key as a meta field for once and on ([13485aa](https://github.com/CurtisHumphrey/redux-firebase/commit/13485aa))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/CurtisHumphrey/redux-firebase/compare/v1.0.0...v1.0.1) (2019-10-18)


### Bug Fixes

* missing variable ([baa6f8d](https://github.com/CurtisHumphrey/redux-firebase/commit/baa6f8d))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/CurtisHumphrey/redux-firebase/compare/v0.5.3...v1.0.0) (2019-10-03)


### Features

* returns path in the meta field and return payload in once.then ([bc7502a](https://github.com/CurtisHumphrey/redux-firebase/commit/bc7502a))


### BREAKING CHANGES

* update_action can no longer be a function



<a name="0.5.3"></a>
## [0.5.3](https://github.com/CurtisHumphrey/redux-firebase/compare/v0.5.2...v0.5.3) (2019-01-25)


### Bug Fixes

* moved firebase to peer to prevent different versions in use ([7425f41](https://github.com/CurtisHumphrey/redux-firebase/commit/7425f41))



<a name="0.5.2"></a>
## [0.5.2](https://github.com/CurtisHumphrey/redux-firebase/compare/v0.5.1...v0.5.2) (2019-01-11)


### Bug Fixes

* switches with old_path removed all other states ([8262fb0](https://github.com/CurtisHumphrey/redux-firebase/commit/8262fb0))



<a name="0.5.1"></a>
## [0.5.1](https://github.com/CurtisHumphrey/redux-firebase/compare/v0.5.0...v0.5.1) (2018-05-23)



<a name="0.5.0"></a>
# [0.5.0](https://github.com/CurtisHumphrey/redux-firebase/compare/v0.3.2...v0.5.0) (2018-05-23)


### Features

* added batching, and added action can be a function ([939ca40](https://github.com/CurtisHumphrey/redux-firebase/commit/939ca40))



<a name="0.4.1"></a>
## [0.4.1](https://github.com/CurtisHumphrey/redux-firebase/compare/v0.4.0...v0.4.1) (2018-05-21)



<a name="0.4.0"></a>
# [0.4.0](https://github.com/CurtisHumphrey/redux-firebase/compare/v0.2.1...v0.4.0) (2018-05-21)


### Bug Fixes

* if_type_dispatch not defined correctly ([f2195f3](https://github.com/CurtisHumphrey/redux-firebase/commit/f2195f3))
* issue with switch not resubscribing correctly ([8a99cea](https://github.com/CurtisHumphrey/redux-firebase/commit/8a99cea))


### Features

* added batching, and added action can be a function ([939ca40](https://github.com/CurtisHumphrey/redux-firebase/commit/939ca40))
* added conditional dispatching for when no action type is provided ([fcca52c](https://github.com/CurtisHumphrey/redux-firebase/commit/fcca52c))
* if not old_path is provide just do on (makes switch work on first pass) ([1823361](https://github.com/CurtisHumphrey/redux-firebase/commit/1823361))



<a name="0.3.2"></a>
## [0.3.2](https://github.com/CurtisHumphrey/redux-firebase/compare/v0.3.1...v0.3.2) (2018-05-15)


### Bug Fixes

* issue with switch not resubscribing correctly ([8a99cea](https://github.com/CurtisHumphrey/redux-firebase/commit/8a99cea))



<a name="0.3.1"></a>
## [0.3.1](https://github.com/CurtisHumphrey/redux-firebase/compare/v0.3.0...v0.3.1) (2018-05-11)


### Bug Fixes

* if_type_dispatch not defined correctly ([f2195f3](https://github.com/CurtisHumphrey/redux-firebase/commit/f2195f3))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/CurtisHumphrey/redux-firebase/compare/v0.2.1...v0.3.0) (2018-05-11)


### Features

* added conditional dispatching for when no action type is provided ([fcca52c](https://github.com/CurtisHumphrey/redux-firebase/commit/fcca52c))
* if not old_path is provide just do on (makes switch work on first pass) ([1823361](https://github.com/CurtisHumphrey/redux-firebase/commit/1823361))



<a name="0.2.1"></a>
## [0.2.1](https://github.com/CurtisHumphrey/redux-firebase/compare/v0.2.0...v0.2.1) (2018-04-25)


### Bug Fixes

* issue with firebase not wanting any pass value ([b4fda8e](https://github.com/CurtisHumphrey/redux-firebase/commit/b4fda8e))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/CurtisHumphrey/redux-firebase/compare/v0.1.0...v0.2.0) (2018-03-13)


### Features

* added sort and limit to on/once ([5a3f310](https://github.com/CurtisHumphrey/redux-firebase/commit/5a3f310))



<a name="0.1.0"></a>
# 0.1.0 (2018-01-19)
