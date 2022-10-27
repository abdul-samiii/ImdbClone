import { combineReducers } from 'redux'

import { AuthReducer } from './AuthReducer'
import { ChannelReducer } from './ChannelReducer'
import { UploadReducer } from './UploadReducer'
import { UserReducer } from './UserReducer'

const rootReducer = combineReducers({
  AuthReducer,
  UserReducer,
  ChannelReducer,
  UploadReducer,

})
export default rootReducer
