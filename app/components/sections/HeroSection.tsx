'use client'

import { motion } from 'framer-motion'
import { Star, Users, ArrowDown } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'
import WaitlistForm from '@/components/ui/WaitlistForm'

export default function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden text-dark-text">
      {/* Background Video */}
      <div className="absolute inset-0">
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full"
        >
          <source src="/bg.mp4" type="video/mp4" />
          <source src="/bg.webm" type="video/webm" /> */}
        {/* Fallback image if video doesn't load */}
        <img
          src="/bg.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* </video> */}
      </div>

      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-dark-canvas/30" />

      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 lg:px-12 py-32 max-w-7xl mx-auto">
        <div className="max-w-4xl space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            <span
              className="px-6 py-3 backdrop-blur-sm rounded-full text-sm inline-block"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                // border: '1px solid rgba(245, 245, 240, 0.2)',
                color: '#F5F5F0'
              }}
            >
              <motion.span
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Alpha Release V2
              </motion.span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl lg:text-8xl mb-4 font-bold leading-[1] text-dark-text"
          >
            {COMPANY_INFO.tagline}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg lg:text-xl max-w-3xl leading-relaxed"
          >
            <div className="opacity-70">
              {COMPANY_INFO.description}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className=""
          >
            <WaitlistForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-start gap-8 text-sm text-dark-text-subtle"
          >
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <Star size={18} className="text-white" />
              <span className="text-dark-text">{COMPANY_INFO.earlyAccess}</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <Users size={18} className="text-white" />
              <span className="text-dark-text">{COMPANY_INFO.signupCount}</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator - Centered */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-dark-text"
          >
            <span className="text-xs">Scroll to explore</span>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 