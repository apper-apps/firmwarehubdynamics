import React from 'react'
import { motion } from 'framer-motion'
import { format } from 'date-fns'
import Card from '@/components/atoms/Card'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const BlogCard = ({ post }) => {
  const formattedDate = format(new Date(post.date), 'MMM dd, yyyy')
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden group hover-lift">
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
            <ApperIcon name="Calendar" className="h-4 w-4" />
            <span>{formattedDate}</span>
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          
          <p className="text-gray-300 mb-4 line-clamp-3 flex-1">
            {post.excerpt}
          </p>
          
          <Button variant="ghost" size="sm" className="self-start">
            Read More
            <ApperIcon name="ArrowRight" className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}

export default BlogCard