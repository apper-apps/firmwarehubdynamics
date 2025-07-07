import React from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const Hero = () => {
  const scrollToFirmwareFinder = () => {
    const element = document.getElementById('firmware-finder')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 animate-gradient-shift bg-[length:400%_400%]" />
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-responsive-xl font-bold font-plus-jakarta mb-6">
              Download Samsung Firmware
              <span className="block gradient-text">
                Fast & Secure
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Access the latest Samsung firmware files for your device. Fast downloads, 
              verified files, and comprehensive support for all Samsung models.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="primary" 
                size="lg"
                onClick={scrollToFirmwareFinder}
                className="group"
              >
                <ApperIcon name="Download" className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                Find My Firmware
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('how-to').scrollIntoView({ behavior: 'smooth' })}
              >
                <ApperIcon name="PlayCircle" className="h-5 w-5 mr-2" />
                How It Works
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="glass p-6 rounded-xl text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <ApperIcon name="Zap" className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-400 text-sm">High-speed download servers worldwide</p>
            </div>
            
            <div className="glass p-6 rounded-xl text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <ApperIcon name="Shield" className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">100% Safe</h3>
              <p className="text-gray-400 text-sm">Verified and tested firmware files</p>
            </div>
            
            <div className="glass p-6 rounded-xl text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <ApperIcon name="Clock" className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Always Updated</h3>
              <p className="text-gray-400 text-sm">Latest firmware releases daily</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero