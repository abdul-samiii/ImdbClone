import { combineReducers } from 'redux'

import { AuthReducer } from './AuthReducer'
import { ChannelReducer } from './ChannelReducer'
import { UserReducer } from './UserReducer'

const rootReducer = combineReducers({
  AuthReducer,
  UserReducer,
  ChannelReducer,
})
export default rootReducer
