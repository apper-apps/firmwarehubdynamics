import React from 'react'
import { cn } from '@/utils/cn'
import Label from '@/components/atoms/Label'
import Input from '@/components/atoms/Input'

const FormField = ({ 
  label, 
  error, 
  required = false,
  className,
  children,
  ...props 
}) => {
  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <Label required={required}>
          {label}
        </Label>
      )}
      {children || <Input error={error} {...props} />}
      {error && (
        <p className="text-error text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  )
}

export default FormField