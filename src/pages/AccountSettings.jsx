import { useLocation } from 'react-router-dom'
import RedirectWithoutLogin from '../AuthRedirection/RedirectWithoutLogin'
import {
  CreateChannel,
  DeleteChannel,
  Profile,
  Footer,
  Nav,
  SettingOptions,
  UpdateChannel,
} from '../components'

const AccountSettings = () => {
  const location = useLocation()
  return (
    <>
      <div className='bg-white'>
        <RedirectWithoutLogin />
        <Nav />
        { location.pathname === '/settings' && <SettingOptions /> }
        { location.pathname === '/createchannel' && <CreateChannel /> }
        { location.pathname === '/deletechannel' && <DeleteChannel /> }
        { location.pathname === '/updatechannel' && <UpdateChannel /> }
        { location.pathname === '/editprofile' && <Profile /> }
      </div>
      <Footer />
    </>
  )
}
export default AccountSettings
