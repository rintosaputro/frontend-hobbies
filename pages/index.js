import React, { useEffect, useState } from 'react'
import AfterLogin from '../components/home/AfterLogin'
import BeforeLogin from '../components/home/BeforeLogin'

export default function Home() {
  const [isLogin, setIsLogin] = useState()
  
  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      setIsLogin(true)
    }
  }, [])

  return (
    <>
      {isLogin
        ? <AfterLogin />
        : <BeforeLogin />
      }
    </>
  )
}
