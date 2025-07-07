import React from 'react'
import { cn } from '@/utils/cn'

const Card = React.forwardRef(({ 
  className, 
  variant = 'default',
  children,
  ...props 
}, ref) => {
  const baseStyles = "rounded-xl transition-all duration-300"
  
  const variants = {
    default: "bg-surface border border-gray-700 shadow-lg hover:shadow-xl hover:scale-[1.02]",
    glass: "glass shadow-lg hover:shadow-xl hover:scale-[1.02]",
    gradient: "gradient-border shadow-lg hover:shadow-xl hover:scale-[1.02]",
    elevated: "bg-surface border border-gray-700 shadow-2xl hover:shadow-3xl hover:scale-[1.02]"
  }
  
  return (
    <div
      className={cn(baseStyles, variants[variant], className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
})

Card.displayName = "Card"

export default Card