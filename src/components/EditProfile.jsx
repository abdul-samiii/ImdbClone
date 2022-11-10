import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ActionCreators } from '../store'

const EditAccount = ({ setEdit }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    city: '',
    dob: '',
    phone: '',
    cnic: '',
  })

  const dispatch = useDispatch()
  const data = useSelector(item => item?.UserReducer?.user)
  const { GetUser, UpdateUser } = bindActionCreators(ActionCreators, dispatch)

  const getUser = async () => {
    await GetUser(window.localStorage.getItem('uid'))
    setUserData({
      ...userData,
      name: data.name,
      email: data.email,
      city: data.city,
      dob: data.dob,
      phone: data.phone,
      cnic: data.cnic,
    })
  }

  useEffect(() => {
    getUser()
  }, data)

  const handleUpdateProfile = () => {
    if (userData.name && userData.cnic.length === 13 && userData.phone.length === 11) {
      const obj = {
        uid: window.localStorage.getItem('uid'),
        name: userData.name ?? data?.name,
        city: userData.city ?? data?.city,
        dob: userData.dob ?? data?.dob,
        phone: userData.phone ?? data?.phone,
        cnic: userData.cnic ?? data?.cnic,
      }
      setEdit(false)
      UpdateUser(obj)
    } else {
      alert('Enter valid data')
    }
  }

  return (
    <div className='lg:flex md:shadow-md m-auto md:w-fit md:pr-64 h-full md:h-1/2 w-fit pr-8 py-10 mt-10'>
      <div className=' flex flex-col space-y-12'>
        <input
          placeholder='Full Name'
          className='outline-none border-b-2 ml-32 lg:w-full text-sm pl-2 pb-2'
          value={userData.name}
          onChange={(item) => setUserData({ ...userData, name: item.target.value })}
        />
        <div className='border-b-2 ml-32 lg:w-full text-sm pl-2 pb-2 text-gray-500 flex'>
          <input
            placeholder='Email'
            value={userData.email}
            className='outline-none'
          />
          <p className='font-thin -ml-20'>(email cannot be edit)</p>
        </div>
        <input
          placeholder='Phone'
          className='outline-none border-b-2 ml-32 lg:w-full text-sm pl-2 pb-2'
          value={userData.phone}
          onChange={(item) => setUserData({ ...userData, phone: item.target.value })}
        />
        <h3
          className='font-bold text-[#427573] border-2 md:p-4 p-2
          hover:cursor-pointer rounded-2xl text-center ml-32 h-fit w-fit mt-20
          hover:bg-[#a6f0ed] hover:text-white hidden lg:inline-block'
          role='presentation'
          onClick={handleUpdateProfile}
        >
          Update
        </h3>
      </div>
      <div className='flex flex-col space-y-12 mt-12 lg:mt-0'>
        <input
          placeholder='CNIC'
          className='outline-none border-b-2 lg:ml-44 ml-32 lg:w-full text-sm pl-2 pb-2'
          value={userData.cnic}
          onChange={(item) => setUserData({ ...userData, cnic: item.target.value })}
        />
        <input
          placeholder='DOB'
          className='outline-none border-b-2 lg:ml-44 ml-32 lg:w-full text-sm pl-2 pb-2'
          value={userData.dob}
          onChange={(item) => setUserData({ ...userData, dob: item.target.value })}
        />
        <input
          placeholder='City'
          className='outline-none border-b-2 lg:ml-44 ml-32 lg:w-full text-sm pl-2 pb-2'
          value={userData.city}
          onChange={(item) => setUserData({ ...userData, city: item.target.value })}
        />
        <h3
          className='font-bold text-[#427573] border-2 md:p-4 p-2
          hover:cursor-pointer rounded-2xl text-center ml-32 h-fit w-fit mt-20
          hover:bg-[#a6f0ed] hover:text-white lg:hidden'
          role='presentation'
          onClick={handleUpdateProfile}
        >
          Update
        </h3>
      </div>
    </div>
  )
}
export default EditAccount
