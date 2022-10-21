import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Footer, Nav } from '../components'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (email && password) {
      alert('Login Success!')
    } else {
      alert('Please Fill all fields!')
    }
  }
  return (
    <div className='lg:h-screen'>
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
