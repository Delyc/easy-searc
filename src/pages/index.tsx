import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from '@/components/sections/Hero'
import Navbar from '@/components/layouts/Navbar'
import HowToSearch from '@/components/sections/HowToSearch'
import ItemsInfo from '@/components/sections/ItemsInfo'
import Team from '@/components/sections/Team'
import Footer from '@/components/layouts/Footer'
import { CloseIcon } from '@/components/svgs/Icons'
import Swal from 'sweetalert2'
import alerts from '@/components/utils/Alert'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const click = () => {
    alerts()
  }
  return (
    <>
      {/* <Navbar />
      <Hero />
      <HowToSearch />
      <ItemsInfo />

      <Team />

      <Footer /> */}
{/* 
      <section className='h-screen w-full bg-black/40 flex justify-center items-center'>
        <div className='rounded-xl bg-white grid place-content-center  px-10 w-1/2 h-1/2'>
          <div className='flex justify-end'>
            <CloseIcon />
          </div>

          <div className='py-20 flex flex-col items-center'>
            <h3>Your document was declared successfully </h3>
            <p>if it is found, you will be notified on your email with contact details and the location of where you can pick it from</p>
          </div>
        </div>

      </section> */}

      <button onClick={click}>clicke me</button>

    </>
  )
}
