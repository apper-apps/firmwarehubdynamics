import React from 'react'
import { cn } from '@/utils/cn'
import ApperIcon from '@/components/ApperIcon'

const Select = React.forwardRef(({ 
  className, 
  options = [],
  placeholder = "Select an option",
  error,
  ...props 
}, ref) => {
  const baseStyles = "w-full px-4 py-3 rounded-lg bg-surface border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
  
  const errorStyles = error ? "border-error focus:ring-error" : ""
  
  return (
    <div className="relative">
      <select
        className={cn(baseStyles, errorStyles, className)}
        ref={ref}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ApperIcon 
        name="ChevronDown" 
        className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none"
      />
    </div>
  )
})

Select.displayName = "Select"

export default Select