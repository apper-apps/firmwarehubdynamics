import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import Card from '@/components/atoms/Card'
import Button from '@/components/atoms/Button'
import FormField from '@/components/molecules/FormField'
import Input from '@/components/atoms/Input'
import Select from '@/components/atoms/Select'
import ApperIcon from '@/components/ApperIcon'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'
import { firmwareService } from '@/services/api/firmwareService'

const FirmwareFinder = () => {
  const [searchData, setSearchData] = useState({
    model: '',
    region: ''
  })
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [hasSearched, setHasSearched] = useState(false)
  
  const regions = [
    { value: 'DBT', label: 'Germany (DBT)' },
    { value: 'BTU', label: 'United Kingdom (BTU)' },
    { value: 'XEF', label: 'France (XEF)' },
    { value: 'ITV', label: 'Italy (ITV)' },
    { value: 'PHN', label: 'Netherlands (PHN)' },
    { value: 'ATO', label: 'Austria (ATO)' },
    { value: 'XEO', label: 'Poland (XEO)' },
    { value: 'TMZ', label: 'Czech Republic (TMZ)' },
    { value: 'ORX', label: 'Slovakia (ORX)' },
    { value: 'XEZ', label: 'Hungary (XEZ)' }
  ]
  
  const handleInputChange = (field, value) => {
    setSearchData(prev => ({
      ...prev,
      [field]: value
    }))
  }
  
  const handleSearch = async () => {
    if (!searchData.model.trim()) {
      toast.error('Please enter a device model')
      return
    }
    
    setLoading(true)
    setError('')
    setHasSearched(true)
    
    try {
      const firmwareResults = await firmwareService.searchFirmware(searchData.model, searchData.region)
      setResults(firmwareResults)
      
      if (firmwareResults.length === 0) {
        toast.info('No firmware found for the specified criteria')
      } else {
        toast.success(`Found ${firmwareResults.length} firmware file(s)`)
      }
    } catch (err) {
      setError(err.message)
      toast.error('Failed to search firmware')
    } finally {
      setLoading(false)
    }
  }
  
  const handleDownload = (firmware) => {
    toast.success(`Starting download for ${firmware.model} - ${firmware.version}`)
    // In a real app, this would trigger the actual download
    console.log('Downloading firmware:', firmware)
  }
  
  const handleRetry = () => {
    setError('')
    handleSearch()
  }
  
  return (
    <section id="firmware-finder" className="py-20 bg-gradient-to-br from-surface/50 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-responsive-lg font-bold font-plus-jakarta mb-4">
              <span className="gradient-text">Firmware Finder</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Enter your Samsung device model and region to find the latest firmware files
            </p>
          </div>
          
          <Card variant="glass" className="p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <FormField
                label="Device Model"
                required
              >
                <Input
                  placeholder="e.g., SM-G991B, SM-N981B"
                  value={searchData.model}
                  onChange={(e) => handleInputChange('model', e.target.value)}
                />
              </FormField>
              
              <FormField
                label="Region (Optional)"
              >
                <Select
                  placeholder="Select region"
                  options={regions}
                  value={searchData.region}
                  onChange={(e) => handleInputChange('region', e.target.value)}
                />
              </FormField>
            </div>
            
            <div className="text-center">
              <Button 
                variant="primary" 
                size="lg"
                onClick={handleSearch}
                disabled={loading}
                className="min-w-[200px]"
              >
                {loading ? (
                  <>
                    <ApperIcon name="Loader2" className="h-5 w-5 mr-2 animate-spin" />
                    Searching...
                  </>
                ) : (
                  <>
                    <ApperIcon name="Search" className="h-5 w-5 mr-2" />
                    Find Firmware
                  </>
                )}
              </Button>
            </div>
          </Card>
          
          {/* Results Section */}
          {loading && <Loading />}
          {error && <Error message={error} onRetry={handleRetry} />}
          {hasSearched && !loading && !error && results.length === 0 && (
            <Empty 
              title="No Firmware Found"
              message="Try adjusting your search criteria or check if the model number is correct"
              actionLabel="Search Again"
              onAction={handleSearch}
            />
          )}
          
          {results.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                Found {results.length} firmware file(s)
              </h3>
              
              <div className="space-y-4">
                {results.map((firmware, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="p-6 hover-lift">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                              <ApperIcon name="Smartphone" className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-white text-lg">
                                {firmware.model}
                              </h4>
                              <p className="text-gray-400 text-sm">
                                {firmware.region}
                              </p>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="text-gray-400">Version:</span>
                              <span className="text-white ml-2 font-medium">
                                {firmware.version}
                              </span>
                            </div>
                            <div>
                              <span className="text-gray-400">Build Date:</span>
                              <span className="text-white ml-2 font-medium">
                                {firmware.buildDate}
                              </span>
                            </div>
                            <div>
                              <span className="text-gray-400">Size:</span>
                              <span className="text-white ml-2 font-medium">
                                {firmware.size}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <Button
                            variant="primary"
                            onClick={() => handleDownload(firmware)}
                            className="group"
                          >
                            <ApperIcon name="Download" className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default FirmwareFinder