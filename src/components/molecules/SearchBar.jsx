import React, { useState } from 'react'
import { cn } from '@/utils/cn'
import Input from '@/components/atoms/Input'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const SearchBar = ({ 
  placeholder = "Search...", 
  onSearch, 
  className,
  ...props 
}) => {
  const [searchTerm, setSearchTerm] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch?.(searchTerm)
  }
  
  return (
    <form onSubmit={handleSubmit} className={cn("flex gap-2", className)}>
      <div className="relative flex-1">
        <Input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pr-10"
          {...props}
        />
        <ApperIcon 
          name="Search" 
          className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
        />
      </div>
      <Button type="submit" variant="primary">
        Search
      </Button>
    </form>
  )
}

export default SearchBar