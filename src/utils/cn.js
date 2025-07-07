import { clsx } from 'clsx'

export function cn(...classes) {
  return clsx(classes.filter(Boolean).join(' '))
}