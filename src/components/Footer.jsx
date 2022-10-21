import {
  Facebook,
  Instagram,
  LinkedIn,
  OpenInNew,
  Twitter,
  YouTube,
} from '@mui/icons-material'
import { IMAGES } from './constants'

const Footer = () => {
  console.log()
  return (
    <div className='mt-24'>
      <div className='text-center space-x-10'>
        <Instagram className='text-white cursor-pointer hover:text-gray-300' fontSize='large' />
        <Twitter className='text-white cursor-pointer hover:text-gray-300' fontSize='large' />
        <YouTube className='text-white cursor-pointer hover:text-gray-300' fontSize='large' />
        <Facebook className='text-white cursor-pointer hover:text-gray-300' fontSize='large' />
        <LinkedIn className='text-white cursor-pointer hover:text-gray-300' fontSize='large' />
      </div>
      <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 lg:w-[70%] ml-[20%]  mt-8'>
        <div className='flex py-1 cursor-pointer'>
          <p className='text-white text-md hover:text-gray-300'>Get the IMDb App</p>
          <OpenInNew className='text-white mt-1 ml-1' fontSize='inherit' />
        </div>
        <div className='flex py-1 cursor-pointer'>
          <p className='text-white text-md hover:text-gray-300'>Help</p>
          <OpenInNew className='text-white mt-1 ml-1' fontSize='inherit' />
        </div>
        <div className='flex py-1 cursor-pointer'>
          <p className='text-white text-md hover:text-gray-300'>Site Index</p>
          <OpenInNew className='text-white mt-1 ml-1' fontSize='inherit' />
        </div>
        <div className='flex py-1 cursor-pointer'>
          <p className='text-white text-md hover:text-gray-300'>IMDbPro</p>
          <OpenInNew className='text-white mt-1 ml-1' fontSize='inherit' />
        </div>
        <div className='flex py-1 cursor-pointer'>
          <p className='text-white text-md hover:text-gray-300'>Box Office Mojo</p>
          <OpenInNew className='text-white mt-1 ml-1' fontSize='inherit' />
        </div>
        <div className='flex py-1 cursor-pointer'>
          <p className='text-white text-md hover:text-gray-300'>IMDb Developer</p>
          <OpenInNew className='text-white mt-1 ml-1' fontSize='inherit' />
        </div>
        <p className='text-white text-md py-1 cursor-pointer hover:text-gray-300'>Press Room</p>
        <div className='flex py-1 cursor-pointer'>
          <p className='text-white text-md hover:text-gray-300'>Advertising</p>
          <OpenInNew className='text-white mt-1 ml-1' fontSize='inherit' />
        </div>
        <div className='flex py-1 cursor-pointer'>
          <p className='text-white text-md hover:text-gray-300'>Jobs</p>
          <OpenInNew className='text-white mt-1 ml-1' fontSize='inherit' />
        </div>
        <p className='text-white text-md py-1 cursor-pointer hover:text-gray-300'>Conditions of Use</p>
        <p className='text-white text-md py-1 cursor-pointer hover:text-gray-300'>Privacy Policy</p>
        <div className='flex py-1 cursor-pointer'>
          <p className='text-white text-md hover:text-gray-300'>Interest-Based Ads</p>
          <OpenInNew className='text-white mt-1 ml-1' fontSize='inherit' />
        </div>
      </div>
      <div className='flex justify-center mt-4'>
        <p className='text-white font-bold'>An</p>
        <img src={IMAGES.amazon} className='h-5 mt-2 mx-2' alt='amazon' />
        <p className='text-white font-bold'>Company</p>
      </div>
      <p className='text-gray-400 text-sm text-center mt-4'>&copy;1990-{new Date().getFullYear()} by IMDb.com,Inc.</p>
    </div>
  )
}
export default Footer
