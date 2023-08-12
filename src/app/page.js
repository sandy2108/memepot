import dynamic from 'next/dynamic';


const Hero = dynamic(() => import('./Components/Hero'));
const Welcome = dynamic(() => import('./Components/Welcome'));
const Memepots = dynamic(() => import('./Components/Memepots'));
const Insights = dynamic(() => import('./Components/Insights'));
const Tokenomics = dynamic(() => import('./Components/Tokenomics'));
const Audits = dynamic(()=> import('./Components/Audits'));

export default function Home() {
  return (
    <main>
      <Hero />
      <Welcome />
      <Memepots />
      <Insights />
      <Tokenomics />
      <Audits/>
    </main>
  );
}
