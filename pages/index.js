import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import AfterLogin from '../components/home/AfterLogin'
import BeforeLogin from '../components/home/BeforeLogin'
import Layout from '../components/Layout'

export default function Home() {
  const [isLogin, setIsLogin] = useState()
  const {logout, login} = useSelector(state => state)

  // const dispatch = useDispatch()

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      setIsLogin(true)
    }
  }, [])

  useEffect(() => {
    if (login.isSuccess) {
      setIsLogin(true)
    }
  }, [login])

  useEffect(() => {
    if (logout.isSuccess) {
      setIsLogin(false)
    }
  }, [logout])

  return (
    <Layout title='Home'>
      {isLogin
        ? <AfterLogin />
        : <BeforeLogin />
      }
    </Layout>
  )
}
