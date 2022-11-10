import { Link } from 'react-router-dom'

const SettingOptions = () => {
  console.log()

  return (
    <div className='pb-12'>
      <h1 className='font-bold text-2xl ml-[25%] py-4'>Account Settings</h1>
      <div className='border-[1px] rounded-md md:w-1/2 p-6 mx-auto'>
        <h2 className='font-bold text-xl text-red-600'>Personal Information</h2>
        <ul className='text-blue-800 space-y-1 flex flex-col'>
          <Link to='/editprofile' className='cursor-pointer hover:underline text-sm font-light'>Edit Profile</Link>
          <Link to='/changepassword' className='cursor-pointer hover:underline text-sm font-light'>Login and security</Link>
        </ul>
        {/* <h2 className='font-bold text-xl text-red-600'>Preferences</h2>
        <ul className='text-blue-800 space-y-1'>
          <li className='cursor-pointer hover:underline text-sm font-light'>Content settings</li>
          <li className='cursor-pointer hover:underline text-sm font-light'>Privacy settings</li>
          <li className='cursor-pointer hover:underline text-sm font-light'>Email Preferences</li>
        </ul> */}
        <h2 className='font-bold text-xl text-red-600'>Channel</h2>
        <ul className='text-blue-800 space-y-1 flex flex-col'>
          <Link to='/createchannel' className='cursor-pointer hover:underline text-sm font-light'>Create Channel (Upgrade to Content Creator)</Link>
          <Link to='/deletechannel' className='cursor-pointer hover:underline text-sm font-light'>Delete Channel</Link>
          <Link to='/updatechannel' className='cursor-pointer hover:underline text-sm font-light'>Edit Channel details</Link>
        </ul>
      </div>
    </div>
  )
}
export default SettingOptions
