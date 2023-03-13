import Hero from '@/components/sections/Hero'
import Navbar from '@/components/layouts/Navbar'
import HowToSearch from '@/components/sections/HowToSearch'
import Team from '@/components/sections/Team'
import Footer from '@/components/layouts/Footer'
import Services from '@/components/sections/Services'
import Testimonies from '@/components/sections/Testimonies'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <HowToSearch />
      <Team />
      <Testimonies />
      <Footer />
    </>
  )
}
