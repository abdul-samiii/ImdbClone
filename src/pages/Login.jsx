import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import RedirectWithLogin from '../AuthRedirection/RedirectWithLogin'

import { Footer, Loader, Nav } from '../components'
import { ActionCreators } from '../store'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const data = useSelector(item => item?.AuthReducer)
  const { Signin } = bindActionCreators(ActionCreators, dispatch)

  const handleLogin = () => {
    if (email && password) {
      const obj = {
        email, password,
      }
      Signin(obj)
      navigate('/')
    } else {
      alert('Please Fill all fields!')
    }
  }
  return (
    <div className='lg:h-screen'>
      { data?.isLoading && <Loader /> }
      <RedirectWithLogin />
      <Nav />
      <h1 className='text-[#E0B416] text-3xl font-bold text-center pb-8 mt-28'>Sign into you IMDb account</h1>
      <div className='flex flex-col space-y-6 items-center'>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter email...'
          className='py-2 w-96 px-2 rounded-sm'
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter password...'
          className='py-2 w-96 px-2 rounded-sm'
          type='password'
        />
        <button
          type='button'
          onClick={handleLogin}
          className='py-2 w-96 px-2 rounded-sm bg-[#E0B416]'
        >
          Continue
        </button>
        <Link to='/signup' className='text-white text-center cursor-pointer hover:text-[#E0B416]'>Dont have an account?</Link>
      </div>
      <div className='lg:mt-52'>
        <Footer />
      </div>
    </div>
  )
}
export default Login
