'use client'

import { motion } from 'framer-motion'
import { FEATURES } from '@/lib/constants'

export default function USPSection() {
  return (
    <section 
      className="min-h-screen relative overflow-hidden bg-light-canvas text-light-text"
    >
      <div className="relative z-10 py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-5xl lg:text-7xl font-bold mb-8 text-light-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Why Creative Teams
              <span className="block text-accent-primary">
                Choose rkivee
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl max-w-3xl mx-auto text-light-text-secondary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Transform your creative workflow with tools designed for modern collaboration
            </motion.p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="relative group bg-light-primary border border-light-border rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-accent-primary"
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.1)'
                  e.currentTarget.style.borderColor = '#D1D1D6'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = '#EAEAEB'
                }}
              >
                <div className="relative z-10">
                  <motion.div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-accent-primary"
                    whileHover={{ 
                      rotate: 5,
                      scale: 1.1 
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <feature.icon size={28} className="text-accent-text-on-primary" />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-2xl font-bold mb-4 text-light-text"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {feature.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="leading-relaxed text-light-text-secondary"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {feature.description}
                  </motion.p>
                </div>

                {/* Hover effect overlay */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl opacity-0 bg-accent-primary/5"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 rounded-2xl font-semibold text-lg transition-all shadow-lg bg-accent-primary text-accent-text-on-primary hover:bg-accent-primary-hover"
            >
              See All Features
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 