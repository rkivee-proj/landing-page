'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import type { WaitlistFormData } from '@/types'
import { isValidEmail } from '@/lib/utils'

export default function WaitlistForm() {
  const [formData, setFormData] = useState<WaitlistFormData>({ email: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    // Validate email
    if (!formData.email) {
      setError('Please enter your email address')
      return
    }
    
    if (!isValidEmail(formData.email)) {
      setError('Please enter a valid email address')
      return
    }

    setIsLoading(true)
    
    try {
      // Send email to admin about new waitlist signup
      const adminEmailResponse = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'admin@yourdomain.com',
          subject: 'New Waitlist Signup',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333;">New Waitlist Signup</h2>
              <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Signup Date:</strong> ${new Date().toLocaleString()}</p>
              </div>
              <p style="color: #666; font-size: 12px;">
                This email was sent from your website's waitlist form.
              </p>
            </div>
          `,
          text: `New Waitlist Signup\n\nEmail: ${formData.email}\nSignup Date: ${new Date().toLocaleString()}\n\nThis email was sent from your website's waitlist form.`
        })
      })

      if (!adminEmailResponse.ok) {
        throw new Error('Failed to send admin notification')
      }

      // Send confirmation email to user
      const userEmailResponse = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: formData.email,
          subject: 'Welcome to the Waitlist!',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333;">Welcome to the Waitlist!</h2>
              <p>Hi there,</p>
              <p>Thank you for joining our waitlist! We're excited to have you on board.</p>
              <p>We'll keep you updated on our progress and notify you as soon as early access is available.</p>
              <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Your email:</strong> ${formData.email}</p>
                <p><strong>Signup date:</strong> ${new Date().toLocaleDateString()}</p>
              </div>
              <p>Stay tuned for updates!</p>
              <p>Best regards,<br>rKivee Team</p>
            </div>
          `,
          text: `Welcome to the Waitlist!\n\nHi there,\n\nThank you for joining our waitlist! We're excited to have you on board.\n\nWe'll keep you updated on our progress and notify you as soon as early access is available.\n\nYour email: ${formData.email}\nSignup date: ${new Date().toLocaleDateString()}\n\nStay tuned for updates!\n\nBest regards,\nYour Team`
        })
      })

      if (!userEmailResponse.ok) {
        throw new Error('Failed to send confirmation email')
      }
      
      console.log('Waitlist signup successful:', formData.email)
      setIsSubmitted(true)
    } catch (err) {
      console.error('Waitlist signup error:', err)
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
          You're in! Check your email for confirmation.
        </span>
      </motion.div>
    )
  }

  return (
    <div className="w-full max-w-md">
      <motion.form 
        onSubmit={handleSubmit} 
        className="flex gap-4 flex-wrap"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex-1 w-full min-w-48">
          <input
            type="email"
            value={formData.email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className={`w-full px-6 py-4 backdrop-blur-sm opacity-50 rounded-xl focus:outline-none transition-colors bg-dark-surface/40 text-dark-text ${
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
          className="relative px-8 py-4 rounded-full bg-white text-black font-semibold transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed min-w-[140px] justify-center overflow-hidden group"
          style={{
            // background: 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 50%, #EF4444 100%)',
            // boxShadow: '0 0 30px rgba(245, 158, 11, 0.6), 0 0 60px rgba(245, 158, 11, 0.3), 0 0 90px rgba(245, 158, 11, 0.1)'
          }}
          onMouseEnter={(e) => {
            if (!isLoading) {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'
              // e.currentTarget.style.boxShadow = '0 0 40px rgba(245, 158, 11, 0.8), 0 0 80px rgba(245, 158, 11, 0.5), 0 0 120px rgba(245, 158, 11, 0.2)'
            }
          }}
          onMouseLeave={(e) => {
            if (!isLoading) {
              e.currentTarget.style.transform = 'translateY(0px) scale(1)'
              // e.currentTarget.style.boxShadow = '0 0 30px rgba(245, 158, 11, 0.6), 0 0 60px rgba(245, 158, 11, 0.3), 0 0 90px rgba(245, 158, 11, 0.1)'
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
                Early Access <ArrowRight size={18} />
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