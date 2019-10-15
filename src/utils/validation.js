import * as R from 'ramda'

export default (validations, state) => {
  const results = R.mapObjIndexed((rules, key) => {
    const value = R.prop(key, state)
    const result = R.map(rule => {
      const { failureMessage } = rule
      const isValid = !rule.fn(value)
      return {
        failureMessage,
        isValid
      }
    })(rules)
    return result
  })(validations)

  return results
}
