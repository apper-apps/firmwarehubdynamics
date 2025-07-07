import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <ApperIcon name="Smartphone" className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold font-plus-jakarta gradient-text">
              FirmwareHub
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('firmware-finder')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Firmware Finder
            </button>
            <button
              onClick={() => scrollToSection('how-to')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              How To Use
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              FAQ
            </button>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => scrollToSection('firmware-finder')}
            >
              <ApperIcon name="Search" className="h-4 w-4" />
            </Button>
            <Button 
              variant="primary" 
              size="sm"
              onClick={() => scrollToSection('firmware-finder')}
            >
              Find Firmware
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header