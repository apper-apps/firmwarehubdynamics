import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Card from '@/components/atoms/Card'
import FAQItem from '@/components/molecules/FAQItem'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'
import { faqService } from '@/services/api/faqService'

const FAQ = () => {
  const [faqs, setFaqs] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  const loadFAQs = async () => {
    setLoading(true)
    setError('')
    
    try {
      const faqData = await faqService.getAll()
      setFaqs(faqData)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    loadFAQs()
  }, [])
  
  const handleRetry = () => {
    setError('')
    loadFAQs()
  }
  
  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={handleRetry} />
  if (faqs.length === 0) return (
    <Empty 
      title="No FAQ Available"
      message="Check back later for frequently asked questions"
      actionLabel="Refresh"
      onAction={loadFAQs}
    />
  )
  
  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-surface/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-responsive-lg font-bold font-plus-jakarta mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Find answers to common questions about Samsung firmware downloads and installation
            </p>
          </div>
          
          <Card variant="glass" className="p-8">
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.Id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <FAQItem faq={faq} />
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ