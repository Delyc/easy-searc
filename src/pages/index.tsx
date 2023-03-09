import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from '@/components/sections/Hero'
import Navbar from '@/components/layouts/Navbar'
import HowToSearch from '@/components/sections/HowToSearch'
import ItemsInfo from '@/components/sections/ItemsInfo'
import Team from '@/components/sections/Team'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar />
      <Hero />
      <HowToSearch />
      <ItemsInfo />

      <Team />
      
    </>
  )
}
