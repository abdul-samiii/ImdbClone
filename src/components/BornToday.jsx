import { ChevronRight } from '@mui/icons-material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../store'

const BornToday = () => {
  const dispatch = useDispatch()
  const { GetAllCelebritiesAction } = bindActionCreators(ActionCreators, dispatch)
  const celebritiesData = useSelector(item => item?.CelebrityReducer?.celebrities)
  useEffect(() => {
    GetAllCelebritiesAction()
  }, [])
  // const Data = [
  //   {
  //     id: 1,
  //     img: IMAGES.actor1,
  //     name: 'Glen Powel',
  //     age: 34,
  //   },
  //   {
  //     id: 2,
  //     img: IMAGES.actor2,
  //     name: 'Carrie Fisher',
  //     age: 56,
  //   },
  //   {
  //     id: 3,
  //     img: IMAGES.actor3,
  //     name: 'Charlotte Sullivan',
  //     age: 39,
  //   },
  //   {
  //     id: 4,
  //     img: IMAGES.actor4,
  //     name: 'Sasha Roiz',
  //     age: 49,
  //   },
  //   {
  //     id: 5,
  //     img: IMAGES.actor5,
  //     name: 'Melara Walters',
  //     ager: 62,
  //   },
  //   {
  //     id: 6,
  //     img: IMAGES.actor6,
  //     name: 'Andrew Scott',
  //     age: 46,
  //   },
  // ]
  return (
    <div>
      <div className='flex mt-8'>
        <h1 className='text-white text-2xl font-extrabold lg:ml-[17%] ml-2 border-l-4 pl-4 border-[#E0B416]'>Born today</h1>
        <ChevronRight className='h-7 text-white mt-1' />
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
