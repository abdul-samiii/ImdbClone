import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  AcademicCapIcon,
  IdentificationIcon,
  GiftIcon,
} from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ActionCreators } from '../store'
import EditAccount from './EditProfile'

const Profile = () => {
  const dispatch = useDispatch()
  const userData = useSelector(item => item?.UserReducer?.user)
  const { GetUser } = bindActionCreators(ActionCreators, dispatch)
  const [edit, setEdit] = useState(false)

  useEffect(() => {
    GetUser(window.localStorage.getItem('uid'))
  }, [])

  return (
    <div className='py-4'>
      <div className='md:flex lg:space-x-16 md:shadow-xl mx-auto m-auto lg:w-fit mt-14 md:pr-64 pb-20 lg:pb-0'>
        <img src='https://m.media-amazon.com/images/G/01/imdb/images/social/imdb_logo._CB410901634_.png' className='h-64 md:ml-auto mx-auto' alt='user_profile' />
        <div className='my-auto space-y-3 ml-24 mt-4'>
          <h2 className='text-2xl'>{userData?.displayName}</h2>
          <div className='flex space-x-2'>
            <AcademicCapIcon className='h-5 mt-1' />
            <p className=' text-[#427573] text-lg'>{userData?.name}</p>
          </div>
          <div className='flex space-x-2'>
            <EnvelopeIcon className='h-5 mt-1' />
            <p className=' text-[#427573] text-lg'>{userData?.email}</p>
          </div>
          <div className='flex space-x-2'>
            <PhoneIcon className='h-5 mt-1' />
            <p className=' text-[#427573] text-lg'>{userData?.phone}</p>
          </div>
          <h3
            className='font-bold text-[#427573] border-2 py-3 px-12
            hover:cursor-pointer rounded-2xl text-center ml-4 h-fit w-fit mt-20
          hover:bg-[#a6f0ed] hover:text-white hidden lg:inline-block'
            role='presentation'
            onClick={() => setEdit(true)}
          >
            Edit
          </h3>
        </div>
        <div className='mt-6 pl-[25%] space-y-4'>
          <div className='flex space-x-2'>
            <IdentificationIcon className='h-5 mt-1' />
            <p className=' text-[#427573] text-lg font-bold'>CNIC</p>
            <p className='text-[#427573] mt-[2px]'>{userData?.cnic}</p>
          </div>
          <div className='flex space-x-2'>
            <GiftIcon className='h-5 mt-1' />
            <p className=' text-[#427573] text-lg font-bold'>DOB</p>
            <p className='text-[#427573] mt-[2px]'>{userData?.dob}</p>
          </div>
          <div className='flex space-x-2'>
            <MapPinIcon className='h-5 mt-1' />
            <p className=' text-[#427573] text-lg'>{userData?.city}</p>
          </div>
          <h3
            className='font-bold text-[#427573] border-2 py-3 px-12
            hover:cursor-pointer rounded-2xl text-center ml-4 h-fit w-fit mt-20
          hover:bg-[#a6f0ed] hover:text-white lg:hidden'
            role='presentation'
            onClick={() => setEdit(true)}
          >
            Edit
          </h3>
        </div>
      </div>
      { edit && <EditAccount setEdit={setEdit} /> }
    </div>
  )
}

export default Profile
