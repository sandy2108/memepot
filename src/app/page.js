
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Welcome from './Components/Welcome'
import Memepots from './Components/Memepots'
import GetStarted from './Components/GetStarted'
import Insights from './Components/Insights'
import Tokenomics from './Components/Tokenomics'
import Footer from './Components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Welcome/>
      <Memepots/>
      <GetStarted/>
      <Insights/>
      <Tokenomics/>
      <Footer/>
    </main>
  )
}
