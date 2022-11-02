import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AccountSettings from './pages/AccountSettings'
import store from './store/Store'
import Watchlist from './pages/Watchlist'
import YourRatings from './pages/YourRatings'
import ManageChannel from './pages/ManageChannel'
import { ManageEvents } from './components'

const App = () => {
  console.log()
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/settings' element={<AccountSettings />} />
            <Route path='/createchannel' element={<AccountSettings />} />
            <Route path='/deletechannel' element={<AccountSettings />} />
            <Route path='/updatechannel' element={<AccountSettings />} />
            <Route path='/watchlist' element={<Watchlist />} />
            <Route path='/yourratings' element={<YourRatings />} />
            <Route path='/managechannel' element={<ManageChannel />} />
            <Route path='/addevent' element={<ManageChannel />} />
            <Route path='/addtrailer' element={<ManageChannel />} />
            <Route path='/addcelebrity' element={<ManageChannel />} />
            <Route path='/addmovieimages' element={<ManageChannel />} />
            <Route path='/manageevents' element={<ManageEvents />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}
export default App
