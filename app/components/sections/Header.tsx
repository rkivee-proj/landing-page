'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import AnimatedLogo from '@/components/ui/AnimatedLogo'

export default function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const { scrollY } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      // Get the hero section height (viewport height)
      const heroHeight = window.innerHeight
      const currentScrollY = window.scrollY
      
      // Show header when in hero section (with some buffer)
      // Hide when scrolled past hero section
      setIsVisible(currentScrollY < heroHeight - 100)
    }

    // Add scroll listener
    window.addEventListener('scroll', handleScroll)
    
    // Call once to set initial state
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ 
        duration: 0.3,
        ease: "easeInOut"
      }}
      className="flex justify-between items-center p-6 lg:px-12"
    >
      <AnimatedLogo />
      <div className="flex items-center gap-6">
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <motion.a 
            href="#features"
            className="text-white/80 transition-colors hover:text-accent-primary"
            whileHover={{ y: -2 }}
          >
            Features
          </motion.a>
          <motion.a 
            href="#demo"
            className="text-white/80 transition-colors hover:text-accent-primary"
            whileHover={{ y: -2 }}
          >
            Demo
          </motion.a>
          <motion.a 
            href="#pricing"
            className="text-white/80 transition-colors hover:text-accent-primary"
            whileHover={{ y: -2 }}
          >
            Pricing
          </motion.a>
        </nav>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 rounded-full transition-all text-white text-sm backdrop-blur-sm border border-accent-primary/40 bg-accent-primary/20 hover:bg-accent-primary/40 hover:border-accent-primary"
        >
          Sign In
        </motion.button>
      </div>
    </motion.header>
  )
} 