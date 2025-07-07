import React from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  const quickLinks = [
    { label: 'Home', section: 'home' },
    { label: 'Firmware Finder', section: 'firmware-finder' },
    { label: 'How to Use', section: 'how-to' },
    { label: 'Blog', section: 'blog' },
    { label: 'FAQ', section: 'faq' }
  ]
  
  const socialLinks = [
    { icon: 'Facebook', url: '#' },
    { icon: 'Twitter', url: '#' },
    { icon: 'Instagram', url: '#' },
    { icon: 'Youtube', url: '#' }
  ]
  
  return (
    <footer className="bg-surface/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <ApperIcon name="Smartphone" className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold font-plus-jakarta gradient-text">
                  FirmwareHub
                </span>
              </div>
              
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Your trusted source for Samsung firmware downloads. Fast, secure, and always updated 
                with the latest firmware files for all Samsung devices.
              </p>
              
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.icon}
                    variant="ghost"
                    size="sm"
                    className="w-10 h-10 p-0 rounded-full hover:bg-primary/20"
                  >
                    <ApperIcon name={social.icon} className="h-5 w-5" />
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.section}>
                    <button
                      onClick={() => scrollToSection(link.section)}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Support
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Download Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Troubleshooting
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm">
                © 2024 FirmwareHub. All rights reserved.
              </p>
              
              <div className="flex items-center gap-6 text-sm">
                <span className="text-gray-400">
                  Made with <ApperIcon name="Heart" className="h-4 w-4 text-red-500 inline mx-1" /> for Samsung users
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer