import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Modal from '../components/Modal'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className=' bg-gray-50 overflow-y-scroll scrollbar-hide'>
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/**Header */}
      
      <Header />


      {/**Feed */}
      <div className='mt-16'> 
         <Feed />

         <Modal/>
       
      </div>
     


      {/**Modal */}



    </div>
  )
}
