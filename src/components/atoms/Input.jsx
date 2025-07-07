import React from 'react'
import { cn } from '@/utils/cn'

const Input = React.forwardRef(({ 
  className, 
  type = 'text',
  error,
  ...props 
}, ref) => {
  const baseStyles = "w-full px-4 py-3 rounded-lg bg-surface border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
  
  const errorStyles = error ? "border-error focus:ring-error" : ""
  
  return (
    <input
      type={type}
      className={cn(baseStyles, errorStyles, className)}
      ref={ref}
      {...props}
    />
  )
})

Input.displayName = "Input"

export default Input