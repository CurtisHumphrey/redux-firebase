import _ from 'lodash'

function convert_null (value) {
  return value == null ? null : value
}
export const clean_undefineds = (payload) => _.mapValues(payload, convert_null)
