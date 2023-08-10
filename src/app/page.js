import Image from 'next/image'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Welcome from './Components/Welcome'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Welcome/>
    </main>
  )
}
