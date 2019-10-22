import * as R from 'ramda'

const createObjFromItem = (item, key) => ({
  value: key,
  title: item,
})

const tranformingStatuses = R.compose(R.values, R.mapObjIndexed(createObjFromItem))

export default tranformingStatuses
