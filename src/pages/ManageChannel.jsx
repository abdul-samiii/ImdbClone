import { useLocation } from 'react-router-dom'
import {
  AddCelebrity,
  AddEvent,
  AddMovieImages,
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
      { location.pathname === '/addmovieimages' && <AddMovieImages /> }
      <Footer />
    </div>
  )
}
export default ManageChannel
