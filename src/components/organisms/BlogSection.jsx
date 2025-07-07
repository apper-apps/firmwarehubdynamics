import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import BlogCard from '@/components/molecules/BlogCard'
import ApperIcon from '@/components/ApperIcon'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'
import { blogService } from '@/services/api/blogService'

const BlogSection = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  const loadPosts = async () => {
    setLoading(true)
    setError('')
    
    try {
      const blogPosts = await blogService.getRecentPosts()
      setPosts(blogPosts)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    loadPosts()
  }, [])
  
  const handleRetry = () => {
    setError('')
    loadPosts()
  }
  
  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={handleRetry} />
  if (posts.length === 0) return (
    <Empty 
      title="No Blog Posts"
      message="Check back later for the latest firmware news and updates"
      actionLabel="Refresh"
      onAction={loadPosts}
    />
  )
  
  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-background to-surface/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-responsive-lg font-bold font-plus-jakarta mb-4">
              Latest <span className="gradient-text">Blog Posts</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Stay updated with the latest Samsung firmware news, updates, and tutorials
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {posts.map((post, index) => (
              <motion.div
                key={post.Id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button variant="outline" size="lg">
              View All Posts
              <ApperIcon name="ArrowRight" className="h-5 w-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogSection