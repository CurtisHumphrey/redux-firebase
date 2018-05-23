import firebase_helpers from 'helpers/firebase_helpers'
import _ from 'lodash'

let set_count = 0
const push_obj = ({set, off, on, child}) => ({
  _key: '' + (++set_count),
  key: function () {
    return this._key
  },
  set,
  on,
  off,
  child,
})

function Make_Ref (sandbox) { // eslint-disable-line max-statements
  this.child = sandbox.spy(() => this)
  this.orderByChild = sandbox.spy(() => this)
  this.equalTo = sandbox.spy(() => this)
  this.startAt = sandbox.spy(() => this)
  this.endAt = sandbox.spy(() => this)

  this.once = sandbox.stub()
  this.on = sandbox.stub()
  this.off = sandbox.stub()

  this.onAuth = sandbox.stub()
  this.authWithPassword = sandbox.stub()
  this.unauth = sandbox.stub()

  this.set = sandbox.spy(() => ({
    then: () => null,
    catch: () => null,
  }))
  this.update = sandbox.stub()
  this.remove = sandbox.stub()
  this.push_obj = push_obj(this)
  this.push = sandbox.spy(() => this.push_obj)
}

function make_return (result) {
  return {
    val: () => result,
    key: () => (result == null) ? 'key' : result.id || result.key || 'key',
    forEach: (callback) => _.forEach(result, (r) => callback(make_return(r))),
    exists: () => result !== null,
  }
}

/**
 * Setup the mock on a sinon sandbox
 * @param  {sinon.sandbox} sandbox
 * @return {[type]}         [description]
 */
export default function firebase_mock_setup (sandbox) {
  const ref_obj = new Make_Ref(sandbox)
  const firebase_mock = {
    ...ref_obj,
    make_return,
    return: (result) => {
      const snap = make_return(result)
      ref_obj.once.callArgWith(1, snap)
      return snap
    },
    on_return: (result) => {
      const snap = make_return(result)
      ref_obj.on.callArgWith(1, snap)
      return snap
    },
    on_type_return: (type, result) => {
      const snap = make_return(result)
      ref_obj.on.withArgs(type).callArgWith(1, snap)
      return snap
    },
    last_push_key: () => '' + set_count,
    ref_obj,
  }

  sandbox.stub(firebase_helpers, 'get_base_ref', () => firebase_mock.ref_obj)

  return firebase_mock
}
