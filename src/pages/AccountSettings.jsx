import { Footer, Nav } from '../components'

const AccountSettings = () => {
  console.log()
  return (
    <>
      <div className='bg-white'>
        <Nav />
        <div className='pb-12'>
          <h1 className='font-bold text-2xl ml-[25%] py-4'>Account Settings</h1>
          <div className='border-[1px] rounded-md md:w-1/2 p-6 mx-auto'>
            <h2 className='font-bold text-xl text-red-600'>Personal Information</h2>
            <ul className='text-blue-800 space-y-1'>
              <li className='cursor-pointer hover:underline text-sm font-light'>Edit Profile</li>
              <li className='cursor-pointer hover:underline text-sm font-light'>Login and security</li>
              <li className='cursor-pointer hover:underline text-sm font-light'>Personal details</li>
              <li className='cursor-pointer hover:underline text-sm font-light'>Linked accounts</li>
            </ul>
            <h2 className='font-bold text-xl text-red-600'>Preferences</h2>
            <ul className='text-blue-800 space-y-1'>
              <li className='cursor-pointer hover:underline text-sm font-light'>Content settings</li>
              <li className='cursor-pointer hover:underline text-sm font-light'>Privacy settings</li>
              <li className='cursor-pointer hover:underline text-sm font-light'>Email Preferences</li>
            </ul>
            <h2 className='font-bold text-xl text-red-600'>Other</h2>
            <ul className='text-blue-800 space-y-1'>
              <li className='cursor-pointer hover:underline text-sm font-light'>View contributions</li>
              <li className='cursor-pointer hover:underline text-sm font-light'>Delete account</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default AccountSettings
