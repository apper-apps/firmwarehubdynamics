import React from 'react'
import { motion } from 'framer-motion'
import Card from '@/components/atoms/Card'
import ApperIcon from '@/components/ApperIcon'

const HowToUse = () => {
  const steps = [
    {
      id: 1,
      icon: 'Search',
      title: 'Search Your Device',
      description: 'Enter your Samsung device model number (e.g., SM-G991B) in the firmware finder tool above.'
    },
    {
      id: 2,
      icon: 'MapPin',
      title: 'Select Region',
      description: 'Choose your device region to get the correct firmware version for your specific variant.'
    },
    {
      id: 3,
      icon: 'Download',
      title: 'Download Firmware',
      description: 'Click download to get the latest firmware file. All files are verified and safe to use.'
    },
    {
      id: 4,
      icon: 'Smartphone',
      title: 'Flash Your Device',
      description: 'Use Odin or Samsung Smart Switch to flash the firmware to your device safely.'
    }
  ]
  
  return (
    <section id="how-to" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-responsive-lg font-bold font-plus-jakarta mb-4">
              How to Use <span className="gradient-text">FirmwareHub</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Follow these simple steps to find and download firmware for your Samsung device
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card variant="glass" className="p-8 text-center h-full hover-lift">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-accent p-0.5">
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                        <ApperIcon name={step.icon} className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.id}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </Card>
                
                {/* Connecting line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-accent transform -translate-y-1/2 z-10" />
                )}
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Card variant="gradient" className="p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <ApperIcon name="AlertTriangle" className="h-8 w-8 text-secondary" />
                <h3 className="text-2xl font-bold text-white">
                  Important Notice
                </h3>
              </div>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                Always backup your device before flashing firmware. Flashing incorrect firmware can damage your device. 
                Make sure you download the correct firmware for your exact device model and region.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowToUse