import Hero from '@/components/sections/Hero'
import Navbar from '@/components/layouts/Navbar'
import HowToSearch from '@/components/sections/HowToSearch'
import ItemsInfo from '@/components/sections/ItemsInfo'
import Team from '@/components/sections/Team'
import Footer from '@/components/layouts/Footer'
import RegisterAdmin from '../components/sections/admin/Register'


import { adminLogin } from '@/services/adminLoginThunk'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

export default function Home() {



  const { adminInfo, error, success} = useSelector((state) => state.adminLoginAuth)
const initialData = {
  email : '',
  password : ''
}

const dispatch = useDispatch()
const [loginData, setLoginData] = useState(initialData)
const inputHandler = (e) => {
  const name = e.target.name
  const value = e.target.value
  setLoginData({...loginData, [name] : value})
  e.preventDefault()
}

useEffect(() => {
  if(adminInfo){
    console.log("logged in")

  }
}, [adminInfo, success])

const handleSubmit = (e) => {
  e.preventDefault()
  dispatch(adminLogin(loginData))
}
  return (
    <>
      {/* <Navbar />
      <Hero />
      <HowToSearch />
      <ItemsInfo />
      <Team />
      <Footer /> */}
      {/* <form>
        <input placeholder='email' onChange={inputHandler} name="email"/>
        <input placeholder='password' onChange={inputHandler}  name="password"/>
        <button onClick={handleSubmit}>submit</button>
      </form> */}

      <RegisterAdmin />
    </>
  )
}
