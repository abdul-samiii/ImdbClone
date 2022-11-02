import { combineReducers } from 'redux'

import { AuthReducer } from './AuthReducer'
import { CelebrityReducer } from './CelebrityReducer'
import { ChannelReducer } from './ChannelReducer'
import { EventReducer } from './EventReducer'
import { MovieReducer } from './MovieReducer'
import { UploadReducer } from './UploadReducer'
import { UserReducer } from './UserReducer'

const rootReducer = combineReducers({
  AuthReducer,
  UserReducer,
  ChannelReducer,
  UploadReducer,
  EventReducer,
  MovieReducer,
  CelebrityReducer,
})
export default rootReducer
