import * as R from 'ramda'

const storage = localStorage
const prefix = 'payments-app.'

const withPrefix = name => prefix + name

export default {
  set: (name, value) => storage.setItem(withPrefix(name), value),
  get: name => storage.getItem(withPrefix(name)),
  remove: name => storage.removeItem(withPrefix(name)),
  has: name => R.includes(withPrefix(name), R.keys(storage)),
}
