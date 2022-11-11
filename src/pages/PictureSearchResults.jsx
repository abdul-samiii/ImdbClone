import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Footer, Nav } from '../components'
import { baseurl } from '../config'
import { ActionCreators } from '../store'

const PictureSearchResults = () => {
  const dispatch = useDispatch()
  const { GetAllFreeImages } = bindActionCreators(ActionCreators, dispatch)
  const ImagesData = useSelector(item => item?.SearchReducer?.searchData)

  useEffect(() => {
    GetAllFreeImages()
  }, [])

  return (
    <div>
      <Nav />
      <div className='h-fit pb-44'>
        <div className='mt-14 text-white lg:ml-16 text-center'>
          <h1 className='text-2xl tracking-widest mt-14 text-white lg:ml-16 text-center'>{ImagesData.length} Results Found</h1>
        </div>
        <div className='mt-14 grid justify-center lg:grid-cols-4 md:grid-cols-2 gap-y-12 h-full mx-2 md:ml-[5%] scrollbar-hide'>
          {
          ImagesData?.map((image) => (
            <div className='hover:opacity-90 group'>
              <img src={`${baseurl}uploads/images/${image.link}`} alt='feature-img' className='h-64 w-[300px]' />
              <div className='w-[300px] bg-[#1A1A1A] p-4 rounded-b-lg'>
                <div className='flex'>
                  <div>
                    <p className=' cursor-pointer text-white'>{image.title}</p>
                  </div>
                  <div className='flex ml-20 m-auto'>
                    <p className='text-gray-500 cursor-pointer text-xs font-thin'>{image.channel.channelName}</p>
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
export default PictureSearchResults
