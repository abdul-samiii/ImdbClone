import { useLocation } from 'react-router-dom'
import {
  AddCelebrity,
  AddEvent,
  AddTrailer,
  ChannelMenu,
  Footer,
} from '../components'
import Nav from '../components/Nav'

const ManageChannel = () => {
  const location = useLocation()

  return (
    <div>
      <Nav />
      { location.pathname === '/managechannel' && <ChannelMenu /> }
      { location.pathname === '/addevent' && <AddEvent /> }
      { location.pathname === '/addtrailer' && <AddTrailer /> }
      { location.pathname === '/addcelebrity' && <AddCelebrity /> }
      <Footer />
    </div>
  )
}
export default ManageChannel
