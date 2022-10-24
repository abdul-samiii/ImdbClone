import React from 'react'
import { Navigate } from 'react-router-dom'

const RedirectWithoutLogin = () => window.localStorage.getItem('token') == null && <Navigate to='/login' replace />

export default RedirectWithoutLogin
