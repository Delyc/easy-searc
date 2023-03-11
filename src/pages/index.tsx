import Hero from '@/components/sections/Hero'
import Navbar from '@/components/layouts/Navbar'
import HowToSearch from '@/components/sections/HowToSearch'
import ItemsInfo from '@/components/sections/ItemsInfo'
import Team from '@/components/sections/Team'
import Footer from '@/components/layouts/Footer'
import RegisterAdmin from '../components/sections/admin/Register'
import { ThunkDispatch } from 'redux-thunk';


import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

export default function Home() {


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
