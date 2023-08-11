import Head from 'next/head';
import './globals.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Fragment } from 'react'; 


export const metadata = {
  title: 'MEMEPOT | $POT',
  description: 'MemePot gives away free ETH every day to pump your bags, build and grow the community, and to promote decentralized innovation.',
  imageUrl:'https://firebasestorage.googleapis.com/v0/b/wizard-4fa3a.appspot.com/o/Memepot-logo-green.png?alt=media&token=1b410bc1-e032-46e9-8a24-dc485a06c2d0',
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Open Graph metadata */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.imageUrl} /> {/* Add OG image tag */}

        {/* Twitter Card metadata */}
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.imageUrl} /> {/* Add Twitter image tag */}
      </Head>
      
      <body>
        <Navbar/>
        <Fragment>{children}</Fragment>
        <Footer/>
      </body>
     
    </html>
  );
}
