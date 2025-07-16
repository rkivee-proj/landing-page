'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import type { WaitlistFormData } from '@/types'
import { isValidEmail, simulateAPICall } from '@/lib/utils'

export default function WaitlistForm() {
  const [formData, setFormData] = useState<WaitlistFormData>({ email: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    // Only validate email if one is provided
    if (formData.email && !isValidEmail(formData.email)) {
      setError('Please enter a valid email address')
      return
    }

    setIsLoading(true)
    
    try {
      // Simulate API call
      await simulateAPICall(1500)
      
      // Here you would typically send the email to your backend
      console.log('Waitlist signup:', formData.email || 'No email provided')
      
      setIsSubmitted(true)
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ email: e.target.value })
    if (error) setError('') // Clear error when user starts typing
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 p-6 rounded-xl max-w-md bg-success/20 border border-success/30"
      >
        <Check size={24} className="text-accent-primary" />
        <span className="text-lg text-dark-text">
          You're on the waitlist! We'll be in touch soon.
        </span>
      </motion.div>
    )
  }

  return (
    <div className="w-full max-w-md">
      <motion.form 
        onSubmit={handleSubmit} 
        className="flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex-1">
          <input
            type="email"
            value={formData.email}
            onChange={handleEmailChange}
            placeholder="Enter your email (optional)"
            className={`w-full px-6 py-4 backdrop-blur-sm rounded-xl focus:outline-none transition-colors bg-dark-surface/40 text-dark-text ${
              error ? 'border border-error' : 'border border-dark-border focus:border-accent-primary'
            }`}
            disabled={isLoading}
          />
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: isLoading ? 1 : 1.05 }}
          whileTap={{ scale: isLoading ? 1 : 0.95 }}
          disabled={isLoading}
          className="px-8 py-4 rounded-xl font-semibold transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed min-w-[140px] justify-center bg-accent-primary hover:bg-accent-primary-hover text-accent-text-on-primary"
        >
          {isLoading ? (
            <div 
              className="w-5 h-5 border-2 rounded-full animate-spin border-accent-text-on-primary border-t-transparent"
            />
          ) : (
            <>
              Join Waitlist <ArrowRight size={18} />
            </>
          )}
        </motion.button>
      </motion.form>
      
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm mt-2 text-error"
        >
          {error}
        </motion.p>
      )}
    </div>
  )
} 