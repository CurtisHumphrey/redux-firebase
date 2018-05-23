import actions, {SPECIAL_VALUES} from './actions'

describe('actions', () => {
  it('should have SPECIAL_VALUES.KEY', () => {
    expect(SPECIAL_VALUES.KEY).to.be.ok
  })
  it('should have SPECIAL_VALUES.TIMESTAMP equal firebase\'s', () => {
    const Firebase = require('firebase/app')
    require('firebase/database')
    expect(SPECIAL_VALUES.TIMESTAMP).to.be.eql(Firebase.database.ServerValue.TIMESTAMP)
  })
})