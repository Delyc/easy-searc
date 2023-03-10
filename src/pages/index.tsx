import Hero from '@/components/sections/Hero'
import Navbar from '@/components/layouts/Navbar'
import HowToSearch from '@/components/sections/HowToSearch'
import ItemsInfo from '@/components/sections/ItemsInfo'
import Team from '@/components/sections/Team'
import Footer from '@/components/layouts/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowToSearch />
      <ItemsInfo />
      <Team />
      <Footer />
    </>
  )
}
