
import React from 'react'
import Announcement from '../components/Announcement'
import Link from 'next/link'
import Hero from '../components/Hero'
import About from '@/components/About'
import ServiceCard from '@/components/ServiceCard'
import Tagline from '@/components/Tagline'

const Home = () => {
  return (
    <div>
      <Announcement />
      <Hero />
       <ServiceCard />
      <About />
     
      
    </div>
  )
}
export default Home