import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Footer, Nav } from '../components'
import { ActionCreators } from '../store'

const CelebritySearchResults = () => {
  const dispatch = useDispatch()
  const { GetAllCelebritiesAction } = bindActionCreators(ActionCreators, dispatch)
  const celebritiesData = useSelector(item => item?.SearchReducer?.searchData)
  useEffect(() => {
    GetAllCelebritiesAction()
  }, [])

  return (
    <div>
      <Nav />
      <div className='h-fit pb-44'>
        <div className='mt-14 text-white lg:ml-16 text-center'>
          <h1 className='text-2xl tracking-widest mt-14 text-white lg:ml-16 text-center'>{celebritiesData.length} Results Found</h1>
        </div>
        <div className='mt-14 grid justify-center lg:grid-cols-4 md:grid-cols-2 gap-y-12 h-full mx-2 md:ml-[5%] scrollbar-hide'>
          {
          celebritiesData?.map((celebrity) => (
            <div className='hover:opacity-90 group'>
              <img src={`http://localhost:5500/uploads/images/${celebrity.img}`} alt='feature-img' className='h-72 w-[300px]' />
              <div className='w-[300px] bg-[#1A1A1A] p-4 rounded-b-lg'>
                <div className='flex'>
                  <div>
                    <p className=' cursor-pointer text-white'>{celebrity.name}</p>
                  </div>
                  <div className='flex ml-20 m-auto'>
                    <p className='text-gray-500 cursor-pointer text-xs font-thin'>{celebrity.channel.channelName}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default CelebritySearchResults
