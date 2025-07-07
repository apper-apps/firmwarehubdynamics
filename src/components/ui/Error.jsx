import React from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import Card from '@/components/atoms/Card'
import ApperIcon from '@/components/ApperIcon'

const Error = ({ message, onRetry }) => {
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
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
              <ApperIcon name="AlertCircle" className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-4">
              Oops! Something went wrong
            </h3>
            
            <p className="text-gray-300 mb-6">
              {message || 'An unexpected error occurred. Please try again.'}
            </p>
            
            {onRetry && (
              <Button variant="primary" onClick={onRetry}>
                <ApperIcon name="RefreshCw" className="h-4 w-4 mr-2" />
                Try Again
              </Button>
            )}
          </Card>
        </div>
      </div>
    </motion.div>
  )
}

export default Error