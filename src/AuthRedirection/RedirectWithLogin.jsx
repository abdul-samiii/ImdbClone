import { Navigate } from 'react-router-dom'

const RedirectWithLogin = () => window.localStorage.getItem('token') && <Navigate to='/' replace />

export default RedirectWithLogin
