import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import DeviceCard from '@/components/molecules/DeviceCard'
import ApperIcon from '@/components/ApperIcon'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'
import { deviceService } from '@/services/api/deviceService'

const NewDevices = () => {
  const [devices, setDevices] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  const loadDevices = async () => {
    setLoading(true)
    setError('')
    
    try {
      const newDevices = await deviceService.getNewDevices()
      setDevices(newDevices)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    loadDevices()
  }, [])
  
  const handleRetry = () => {
    setError('')
    loadDevices()
  }
  
  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={handleRetry} />
  if (devices.length === 0) return (
    <Empty 
      title="No New Devices"
      message="Check back later for newly added Samsung devices"
      actionLabel="Refresh"
      onAction={loadDevices}
    />
  )
  
  return (
    <section id="new-devices" className="py-20">
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
              Newly Added <span className="gradient-text">Samsung Devices</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Recently added Samsung devices with available firmware downloads
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {devices.map((device, index) => (
              <motion.div
                key={device.Id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <DeviceCard device={device} />
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
            <Button variant="gradient" size="lg">
              View All Devices
              <ApperIcon name="ArrowRight" className="h-5 w-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default NewDevices