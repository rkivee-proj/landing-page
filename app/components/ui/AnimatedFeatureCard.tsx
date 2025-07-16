'use client'

import { motion } from 'framer-motion'
import FeatureCard from './FeatureCard'
import type { Feature } from '@/types'

interface AnimatedFeatureCardProps {
  feature: Feature
  index: number
}

export default function AnimatedFeatureCard({ feature, index }: AnimatedFeatureCardProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
    >
      <FeatureCard feature={feature} index={index} />
    </motion.div>
  )
} 