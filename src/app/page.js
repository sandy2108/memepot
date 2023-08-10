import Image from 'next/image'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Welcome from './Components/Welcome'
import Memepots from './Components/Memepots'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Welcome/>
      <Memepots/>
    </main>
  )
}
