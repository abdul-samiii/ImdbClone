import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Footer, Nav } from '../components'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSignup = () => {
    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        alert('Signup Success!')
      } else {
        alert('Password donot match!')
      }
    } else {
      alert('Please Fill all fields!')
    }
  }
  return (
    <div className='lg:h-screen'>
      <Nav />
      <h1 className='text-[#E0B416] text-3xl font-bold text-center pb-8 mt-28'>Register you account here</h1>
      <div className='flex flex-col space-y-6 items-center'>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter name...'
          className='py-2 w-96 px-2 rounded-sm'
        />
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
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder='Confirm password...'
          className='py-2 w-96 px-2 rounded-sm'
          type='password'
        />
        <button
          type='button'
          onClick={handleSignup}
          className='py-2 w-96 px-2 rounded-sm bg-[#E0B416]'
        >
          Continue
        </button>
        <Link to='/login' className='text-white text-center cursor-pointer hover:text-[#E0B416]'>Already have an account?</Link>
      </div>
      <div className='mt-32'>
        <Footer />
      </div>
    </div>
  )
}
export default Signup
