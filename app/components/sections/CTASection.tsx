'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export default function CTASection() {
  return (
    <section 
      className="py-20 px-6 lg:px-12 bg-light-canvas text-light-text"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative p-12 rounded-3xl bg-gradient-to-br from-light-primary to-light-border border border-light-border-interactive"
        >
          {/* Animated background pattern */}
          <motion.div 
            className="absolute inset-0 opacity-5 rounded-3xl bg-[radial-gradient(circle,theme(colors.accent-primary)_1px,transparent_1px)] bg-[length:30px_30px]"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <div className="relative z-10">
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-6 text-light-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your 
              <span className="block text-accent-primary">
                Creative Process?
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-8 max-w-2xl mx-auto text-light-text-secondary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Join hundreds of creative professionals who are already streamlining 
              their media collaboration with rkivee.
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 rounded-2xl font-semibold text-lg transition-all shadow-lg flex items-center gap-3 mx-auto bg-accent-primary text-accent-text-on-primary hover:bg-accent-primary-hover"
            >
              <Play size={20} />
              Get Early Access
            </motion.button>
          </div>

          {/* Floating elements */}
          <motion.div 
            className="absolute top-4 right-4 w-4 h-4 rounded-full bg-accent-primary/30"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-accent-primary/30"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </motion.div>
      </div>
    </section>
  )
} 