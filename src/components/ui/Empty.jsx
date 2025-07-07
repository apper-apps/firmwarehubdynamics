import React from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import Card from '@/components/atoms/Card'
import ApperIcon from '@/components/ApperIcon'

const Empty = ({ 
  title = "No Data Found", 
  message = "There's nothing to show here yet.", 
  actionLabel = "Refresh",
  onAction,
  icon = "SearchX"
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <Card variant="glass" className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center">
              <ApperIcon name={icon} className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-4">
              {title}
            </h3>
            
            <p className="text-gray-300 mb-6">
              {message}
            </p>
            
            {onAction && (
              <Button variant="primary" onClick={onAction}>
                <ApperIcon name="RefreshCw" className="h-4 w-4 mr-2" />
                {actionLabel}
              </Button>
            )}
          </Card>
        </div>
      </div>
    </motion.div>
  )
}

export default Empty