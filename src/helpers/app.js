import * as R from 'ramda'

import storage from 'utils/storage'

const types = {
  accessToken: 'accessToken',
  userId: 'id',
}

const getApiUrl = () => process.env.REACT_APP_API_URL

const setAccessToken = token => storage.set(types.accessToken, token)
const getAccessToken = () => `Bearer ${storage.get(types.accessToken)}`
const removeAccessToken = () => storage.remove(types.accessToken)
const hasAccessToken = () => storage.has(types.accessToken)

const setUserId = id => storage.set(types.userId, id)
const getUserId = () => storage.get(types.userId)
const removeUserId = () => storage.remove(types.userId)
const hasUserId = () => storage.has(types.userId)

const isAuthUser = () => R.all(R.equals(true))([hasAccessToken(), hasUserId()])

export {
  getApiUrl,
  setAccessToken,
  setUserId,
  getAccessToken,
  getUserId,
  removeAccessToken,
  removeUserId,
  isAuthUser,
}
