import { useState } from 'react'

const AddTrailer = () => {
  const [pro, setPro] = useState(false)
  const [free, setFree] = useState(true)
  const handleTrailerType = () => {
    setPro(!pro)
    setFree(!free)
  }

  return (
    <div className=' lg:ml-[40%] ml-8 md:ml-[35%]'>
      <h1 className='text-[#E0B416] w-[80%] text-3xl font-bold ml-8  pb-8 mt-28'>Add Trailer on Channel</h1>
      <div className=''>
        <input
          placeholder='Enter Movie Title'
          className='p-2 py-3 rounded-lg w-96'
        />
      </div>
      <div className='mt-4'>
        <div>
          <input
            type='radio'
            value={free}
            onChange={handleTrailerType}
            checked={free && true}
          />
          <label className='text-white ml-2'>For free members</label>
        </div>
        <div>
          <input
            type='radio'
            value={pro}
            onChange={handleTrailerType}
            checked={pro && true}
          />
          <label className='text-white ml-2'>For Pro members</label>
        </div>
      </div>
      <div className='flex items-center p-4'>
        <p className='text-white p-2'>Upload Trailer of Movie</p>
        <label htmlFor='files' className='text-white font-bold border-2 p-1 py-2 rounded-lg hover:bg-[#E0B416] hover:border-[#E0B416]'>Upload Video</label>
        <input
          type='file'
          id='files'
          placeholder='Upload Video'
          className='hidden'
        />
      </div>
      <button
        className='p-2 rounded-lg w-96 bg-[#E0B416]'
        type='button'
      >
        Add Trailer
      </button>
    </div>
  )
}
export default AddTrailer
