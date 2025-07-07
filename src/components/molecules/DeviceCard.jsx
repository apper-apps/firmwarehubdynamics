import React from 'react'
import { motion } from 'framer-motion'
import { format } from 'date-fns'
import Card from '@/components/atoms/Card'
import ApperIcon from '@/components/ApperIcon'

const DeviceCard = ({ device }) => {
  const formattedDate = format(new Date(device.addedDate), 'MMM dd, yyyy')
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-6 text-center group hover-lift">
        <div className="relative w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent p-0.5">
          <div className="w-full h-full rounded-full bg-surface flex items-center justify-center">
            <ApperIcon name="Smartphone" className="h-8 w-8 text-white" />
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
          {device.name}
        </h3>
        
        <p className="text-gray-400 text-sm mb-3">
          Model: {device.model}
        </p>
        
        <div className="flex items-center justify-center gap-2 text-success text-sm">
          <ApperIcon name="Plus" className="h-4 w-4" />
          <span>Added {formattedDate}</span>
        </div>
      </Card>
    </motion.div>
  )
}

export default DeviceCard