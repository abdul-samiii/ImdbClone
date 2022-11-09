import {
  Bars3Icon,
  MagnifyingGlassIcon,
  DocumentPlusIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../store'
import { toastifyError } from './toastify'

const Nav = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [searchWords, setSearchWords] = useState('')
  const [searchType, setSearchType] = useState('Movies')
  const {
    GetUser,
    GetWatchlistTrailer,
    GetSearchResults,
  } = bindActionCreators(ActionCreators, dispatch)
  const FreeTrailerData = useSelector(item => item?.WatchlistReducer?.watchlist)

  const data = useSelector(item => item)
  const userData = data?.UserReducer?.user

  const handleSignout = () => {
    window.localStorage.removeItem('token')
    navigate('/login')
  }

  const handleGetUser = () => {
    GetUser(window.localStorage.getItem('uid'))
  }

  const handleSearch = () => {
    if (searchType && searchWords) {
      GetSearchResults(searchType, searchWords)
    } else {
      toastifyError('Fill all fields')
    }
    switch (searchType) {
      case 'Movies':
        navigate('/trailersearch')
        break
      case 'Events':
        navigate('/eventsearch')
        break
      case 'Pictures':
        navigate('/picturesearch')
        break
      case 'Celebrities':
        navigate('/celebritysearch')
        break
      default:
        toastifyError('Search type error')
    }
  }

  const handleUserDropdown = (event) => {
    switch (event.target.value) {
      case 'Account settings':
        navigate('/settings')
        break
      case 'Your ratings':
        navigate('/yourratings')
        break
      case 'Watchlist':
        navigate('/watchlist')
        break
      case 'Channel':
        navigate('/managechannel')
        break
      case 'Sign out':
        handleSignout()
        break
      default:
        // hi
    }
  }

  useEffect(() => {
    handleGetUser()
    GetWatchlistTrailer()
  }, [])

  return (
    <div className='bg-[#121212] h-16 flex items-center md:justify-center justify-evenly'>
      <Bars3Icon className='text-white h-8 md:hidden justify-start' />
      <Link to='/' className='text-black bg-[#E0B416] px-2 font-extrabold text-2xl rounded-sm cursor-pointer'>IMDb</Link>
      <Bars3Icon className='text-white h-8 ml-4 hidden md:inline-block' />
      <select
        className='w-14 h-8 ml-4 font-bold rounded-l-sm bg-white border-r-2 hidden md:inline-block'
        onChange={() => setSearchType(window.event.target.value)}
      >
        <option>Movies</option>
        <option>Pictures</option>
        <option>Celebrities</option>
        <option>Events</option>
      </select>
      <input
        className='h-8 w-[36rem] rounded-r-sm pl-2 outline-none text-md hidden md:inline-block'
        placeholder='Search IMDb'
        value={searchWords}
        onChange={(e) => setSearchWords(e.target.value)}
      />
      <div
        className='md:bg-white h-8 rounded-r-sm -ml-2 hidden md:inline-block cursor-pointer'
        onClick={handleSearch}
        role='presentation'
      >
        <MagnifyingGlassIcon className='h-5 mt-1 px-2 text-gray-400' />
      </div>
      <h2 className='font-extrabold text-white ml-4 cursor-pointer hidden md:inline-block'>IMDB<span className='text-blue-300'>Pro</span></h2>
      <p className='border-r-2 opacity-25 h-6 ml-4 mr-4 hidden md:inline-block' />
      {
      window.localStorage.getItem('token')
      && (
      <div
        className='cursor-pointer hover:text-white group hover:bg-[#252525] py-2 px-3 rounded-md hidden lg:flex'
        onClick={() => navigate('/watchlist')}
        role='presentation'
      >
        <DocumentPlusIcon className='h-6 text-gray-500 group-hover:text-white' />
        <h4 className='text-white ml-2 font-semibold'>Watchlist</h4>
        <p className='bg-[#E0B416] ml-1 rounded-full text-sm font-bold w-5 text-center'>{FreeTrailerData?.length ?? '0'}</p>
      </div>
      )
      }
      {
      window.localStorage.getItem('token')
      && (
      <div className='cursor-pointer hover:text-white flex group hover:bg-[#252525] py-2 px-3 rounded-md'>
        <UserCircleIcon className='h-8 text-gray-500 group-hover:text-white' />
        <select
          className='w-20 h-8 font-bold bg-[#121212] group-hover:bg-[#252525] text-white'
          onChange={() => handleUserDropdown(window.event)}
        >
          <option>{userData.name}</option>
          <option>Your ratings</option>
          <option>Watchlist</option>
          <option><Link to='/settings'>Account settings</Link></option>
          { userData?.content_creator
          && (
            <option>
              <NavLink to='/managechannel' className='text-white ml-2 font-semibold cursor-pointer hover:text-white group hover:bg-[#252525] py-2 px-3 rounded-md'>Channel</NavLink>
            </option>
          )}
          <option>Sign out</option>
        </select>
      </div>
      )
      }
      {
      window.localStorage.getItem('token') == null
      && (
        <>
          <NavLink to='/signup' className='text-white ml-2 font-semibold cursor-pointer hover:text-white group hover:bg-[#252525] py-2 px-3 rounded-md'>Signup</NavLink>
          <NavLink to='/login' className='text-white ml-2 font-semibold cursor-pointer hover:text-white group hover:bg-[#252525] py-2 px-3 rounded-md'>Login</NavLink>
        </>
      )
      }
      {
      window.localStorage.getItem('token')
      && (
      <p
        className='text-white ml-2 font-semibold cursor-pointer hover:text-white group hover:bg-[#252525] py-2 px-3 rounded-md'
        onClick={handleSignout}
        role='presentation'
      >
        Logout
      </p>
      )
      }
      <div className='cursor-pointer hover:text-white group hover:bg-[#252525] py-2 px-3 rounded-md hidden md:flex'>
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
