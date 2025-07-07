import React from 'react'
import Header from '@/components/organisms/Header'
import Hero from '@/components/organisms/Hero'
import FirmwareFinder from '@/components/organisms/FirmwareFinder'
import HowToUse from '@/components/organisms/HowToUse'
import BlogSection from '@/components/organisms/BlogSection'
import NewDevices from '@/components/organisms/NewDevices'
import FAQ from '@/components/organisms/FAQ'
import Footer from '@/components/organisms/Footer'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FirmwareFinder />
        <HowToUse />
        <BlogSection />
        <NewDevices />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage