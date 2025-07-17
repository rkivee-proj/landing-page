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
          whileHover={{ scale: isLoading ? 1 : 1.05, y: isLoading ? 0 : -3 }}
          whileTap={{ scale: isLoading ? 1 : 0.95 }}
          disabled={isLoading}
          className="relative px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed min-w-[140px] justify-center text-white overflow-hidden group"
          style={{
            background: 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 50%, #EF4444 100%)',
            boxShadow: '0 0 30px rgba(245, 158, 11, 0.6), 0 0 60px rgba(245, 158, 11, 0.3), 0 0 90px rgba(245, 158, 11, 0.1)'
          }}
          onMouseEnter={(e) => {
            if (!isLoading) {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'
              e.currentTarget.style.boxShadow = '0 0 40px rgba(245, 158, 11, 0.8), 0 0 80px rgba(245, 158, 11, 0.5), 0 0 120px rgba(245, 158, 11, 0.2)'
            }
          }}
          onMouseLeave={(e) => {
            if (!isLoading) {
              e.currentTarget.style.transform = 'translateY(0px) scale(1)'
              e.currentTarget.style.boxShadow = '0 0 30px rgba(245, 158, 11, 0.6), 0 0 60px rgba(245, 158, 11, 0.3), 0 0 90px rgba(245, 158, 11, 0.1)'
            }
          }}
        >
          {/* Button background shimmer effect */}
          <div 
            className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
            style={{ 
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)',
              transform: 'translateX(-100%)', 
              animation: 'shimmer 3s infinite' 
            }}
          />
          
          <span className="relative z-10 flex items-center gap-2">
            {isLoading ? (
              <div 
                className="w-5 h-5 border-2 rounded-full animate-spin border-white border-t-transparent"
              />
            ) : (
              <>
                Join Waitlist <ArrowRight size={18} />
              </>
            )}
          </span>
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
      
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  )
} 