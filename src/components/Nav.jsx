import {
  Bars3Icon,
  MagnifyingGlassIcon,
  DocumentPlusIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'

const Nav = () => {
  console.log()
  return (
    <div className='bg-[#121212] h-16 flex items-center md:justify-center justify-evenly'>
      <Bars3Icon className='text-white h-8 md:hidden justify-start' />
      <h2 className='text-black bg-[#E0B416] px-2 font-extrabold text-2xl rounded-sm cursor-pointer'>IMDb</h2>
      <Bars3Icon className='text-white h-8 ml-4 hidden md:inline-block' />
      <select className='w-14 h-8 ml-4 font-bold rounded-l-sm bg-white border-r-2 hidden md:inline-block'>
        <option>All</option>
        <option>Titles</option>
        <option>TV Episodes</option>
        <option>Celebs</option>
        <option>Companies</option>
        <option>Keywords</option>
      </select>
      <input
        className='h-8 w-96 rounded-r-sm pl-2 outline-none text-md hidden md:inline-block'
        placeholder='Search IMDb'
      />
      <div className='md:bg-white h-8 rounded-r-sm -ml-2 '>
        <MagnifyingGlassIcon className='h-5 mt-1 px-2 text-gray-400' />
      </div>
      <h2 className='font-extrabold text-white ml-4 cursor-pointer hidden md:inline-block'>IMDB<span className='text-blue-300'>Pro</span></h2>
      <p className='border-r-2 opacity-25 h-6 ml-4 mr-4 hidden md:inline-block' />
      <div className='cursor-pointer hover:text-white group hover:bg-[#252525] py-2 px-3 rounded-md hidden lg:flex'>
        <DocumentPlusIcon className='h-6 text-gray-500 group-hover:text-white' />
        <h4 className='text-white ml-2 font-semibold'>Watchlist</h4>
      </div>
      <div className='cursor-pointer hover:text-white flex group hover:bg-[#252525] py-2 px-3 rounded-md'>
        <UserCircleIcon className='h-8 text-gray-500 group-hover:text-white' />
        <select className='w-20 h-8 font-bold bg-[#121212] group-hover:bg-[#252525] text-white'>
          <option>Abdul</option>
          <option>Titles</option>
          <option>TV Episodes</option>
          <option>Celebs</option>
          <option>Companies</option>
          <option>Keywords</option>
        </select>
      </div>
      <div className='cursor-pointer hover:text-white flex group hover:bg-[#252525] py-2 px-3 rounded-md'>
        <select className='w-14 h-8 font-bold bg-[#121212] group-hover:bg-[#252525] text-white'>
          <option>EN</option>
          <option>Français</option>
          <option>Deutsch</option>
          <option>हिन्दी</option>
          <option>Italiano</option>
          <option>Português</option>
          <option>Español</option>
        </select>
      </div>
    </div>
  )
}
export default Nav
