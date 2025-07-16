import { clsx, type ClassValue } from 'clsx'

// Utility function for combining class names (if you want to add clsx later)
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

// Email validation utility
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Async utility for simulating API calls
export function simulateAPICall(delay: number = 1000): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, delay))
}

// Performance optimization: Debounce function
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(null, args), delay)
  }
} 