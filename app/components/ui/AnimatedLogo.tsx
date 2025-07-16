'use client'

import { motion } from 'framer-motion'
import Logo from './Logo'

interface AnimatedLogoProps {
  className?: string
}

export default function AnimatedLogo({ className }: AnimatedLogoProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Logo className={className} />
    </motion.div>
  )
} 