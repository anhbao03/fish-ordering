import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Catalog from '../../components/catalog/Catalog'
import Footer from '../../components/footer/Footer'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home({fishes}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <Navbar />
      <Hero />
      <Catalog fishes = {fishes}/>
        <Footer />
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const { data } = await axios.get('https://dragon-aqua-next.onrender.com/api/fish')

  console.log(data)
  return {
    props: {
      fishes: data
    }
  }
}
