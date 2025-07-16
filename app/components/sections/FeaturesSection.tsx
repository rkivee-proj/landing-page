'use client'

import { motion } from 'framer-motion'
import { FEATURES } from '@/lib/constants'
import { fadeInUp } from '@/lib/animations'
import AnimatedFeatureCard from '@/components/ui/AnimatedFeatureCard'

export default function FeaturesSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative z-10 py-20 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Built for Modern 
            <span className="gradient-text"> Creative Teams</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to streamline your media workflow, 
            from initial concept to final delivery and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <AnimatedFeatureCard 
              key={feature.title} 
              feature={feature} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
} 