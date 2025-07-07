import React from 'react'
import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header skeleton */}
          <div className="text-center mb-12">
            <div className="h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg w-64 mx-auto mb-4 animate-pulse" />
            <div className="h-4 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg w-96 mx-auto animate-pulse" />
          </div>
          
          {/* Content skeleton */}
          <div className="space-y-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 rounded-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary/50 to-accent/50 rounded-full animate-pulse" />
                  <div className="flex-1">
                    <div className="h-5 bg-gradient-to-r from-gray-700 to-gray-600 rounded w-48 mb-2 animate-pulse" />
                    <div className="h-3 bg-gradient-to-r from-gray-700 to-gray-600 rounded w-32 animate-pulse" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="h-4 bg-gradient-to-r from-gray-700 to-gray-600 rounded animate-pulse" />
                  <div className="h-4 bg-gradient-to-r from-gray-700 to-gray-600 rounded animate-pulse" />
                  <div className="h-4 bg-gradient-to-r from-gray-700 to-gray-600 rounded animate-pulse" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading