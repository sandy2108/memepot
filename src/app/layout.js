import Head from 'next/head';
import './globals.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

export const metadata = {
  title: 'MEMEPOTS | $POT',
  description: 'MemePot gives away free ETH every day to pump your bags, build and grow the community, and to promote decentralized innovation.',
};

const URL = 'https://firebasestorage.googleapis.com/v0/b/wizard-4fa3a.appspot.com/o/photo_2023-07-31_20-41-01.jpg?alt=media&token=6571fb99-bb01-46e6-9fad-6301691764a8';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Open Graph metadata */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={URL} /> {/* Add OG image tag */}

        {/* Twitter Card metadata */}
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={URL} /> {/* Add Twitter image tag */}
      </Head>
      
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
     
    </html>
  );
}
