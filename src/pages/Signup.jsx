import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import RedirectWithLogin from '../AuthRedirection/RedirectWithLogin'

import { Footer, Nav } from '../components'
import { ActionCreators } from '../store'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const dispatch = useDispatch()
  const { Register } = bindActionCreators(ActionCreators, dispatch)
  const data = useSelector(item => item?.AuthReducer)
  console.log('yo ', data)
  const handleSignup = async () => {
    console.log('inside')
    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        const obj = { name, email, password }
        Register(obj)
      } else {
        alert('Password donot match!')
      }
    } else {
      alert('Please Fill all fields!')
    }
  }
  return (
    <div className='lg:h-screen'>
      <RedirectWithLogin />
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
