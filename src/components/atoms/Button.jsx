import React from 'react'
import { cn } from '@/utils/cn'

const Button = React.forwardRef(({ 
  className, 
  variant = 'primary', 
  size = 'md',
  children,
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed"
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-accent text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl hover:scale-105 btn-gradient",
    secondary: "bg-surface text-white border border-gray-600 hover:bg-gray-700 hover:border-gray-500 hover:scale-105",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:scale-105",
    ghost: "text-gray-300 hover:text-white hover:bg-surface hover:scale-105",
    gradient: "bg-gradient-to-r from-secondary to-accent text-white hover:from-amber-600 hover:to-orange-600 shadow-lg hover:shadow-xl hover:scale-105"
  }
  
  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-xl",
    xl: "px-10 py-5 text-xl rounded-xl"
  }
  
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = "Button"

export default Button