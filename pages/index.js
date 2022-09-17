import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Nav from '../components/Nav';
import tmdb from '../public/tmdb.svg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <div className="flex justify-center">
        <Image
          className="object-contain"
          height={100}
          width={100}
          src={tmdb}
          alt="tmdb"
        />
      </div>
    </div>
  )
}
