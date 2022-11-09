import { ChevronRight as ChevronRightIcon } from '@mui/icons-material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import ChevronRight from '@mui/icons-material/ChevronRight'
import { Link } from 'react-router-dom'

import { ActionCreators } from '../store'

const BornToday = () => {
  const dispatch = useDispatch()
  const { GetAllCelebritiesAction } = bindActionCreators(ActionCreators, dispatch)
  const celebritiesData = useSelector(item => item?.CelebrityReducer?.celebrities)
  useEffect(() => {
    GetAllCelebritiesAction()
  }, [])

  return (
    <div>
      <div>
        <div className='flex mt-8'>
          <h1 className='text-white text-2xl font-extrabold lg:ml-[17%] ml-2 border-l-4 pl-4 border-[#E0B416]'>Born today</h1>
          <ChevronRightIcon className='h-7 text-white mt-1' />
        </div>
        <Link to='/celebrities' className='text-xs text-blue-400 md:ml-[70%] ml-[50%] font-bold cursor-pointer'>Get more recommended...</Link>
        <ChevronRight className='text-blue-400 -mt-1 md:ml-0 cursor-pointer' />
      </div>
      <p className='text-gray-400 lg:ml-[17%] mt-2 ml-2'>People born today</p>
      <div className='flex lg:ml-[17%] mt-4 overflow-x-scroll lg:w-[75%] space-x-4 h-full scrollbar-hide '>
        {
          celebritiesData?.map((item) => (
            <div className='hover:opacity-90 group'>
              <img src={`http://localhost:5500/uploads/images/${item.img}`} alt='feature-img' className='h-[80%] w-[250px] max-w-none' />
              <p className=' cursor-pointer text-white z-50 mt-2 text-center'>{item.name}</p>
              <p className='text-center text-gray-500 cursor-pointer'>{item.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default BornToday
