import { combineReducers } from 'redux'

import { AuthReducer } from './AuthReducer'
import { CelebrityReducer } from './CelebrityReducer'
import { ChannelReducer } from './ChannelReducer'
import { EventReducer } from './EventReducer'
import { MovieReducer } from './MovieReducer'
import { ReviewReducer } from './ReviewsReducer'
import { UploadReducer } from './UploadReducer'
import { UserReducer } from './UserReducer'
import { WatchlistReducer } from './WatchlistReducer'

const rootReducer = combineReducers({
  AuthReducer,
  UserReducer,
  ChannelReducer,
  UploadReducer,
  EventReducer,
  MovieReducer,
  CelebrityReducer,
  ReviewReducer,
  WatchlistReducer,
})
export default rootReducer
