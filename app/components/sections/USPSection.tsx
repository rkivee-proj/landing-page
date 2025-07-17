'use client'

import { motion } from 'framer-motion'
import { FEATURES } from '@/lib/constants'

export default function USPSection() {
  // Only use first 4 features for the exact Huly layout
  const bentoFeatures = FEATURES.slice(0, 4)

  return (
    <section 
      className="py-32 px-6 lg:px-12 bg-light-canvas text-light-text"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold mb-6 text-light-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Unmatched productivity
          </motion.h2>
          <motion.p 
            className="text-lg max-w-3xl mx-auto text-light-text-secondary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            rkivee is a media collaboration platform that provides amazing collaboration opportunities for creative teams and media professionals alike.
          </motion.p>
        </motion.div>

        {/* Exact Huly-style Bento Grid */}
        <div className="grid grid-cols-2 gap-8 h-[800px]">
          {/* Top Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] bg-black"
          >
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-xl font-bold mb-3 text-white">
                {bentoFeatures[0].title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {bentoFeatures[0].description}
              </p>
            </div>
            <div className="absolute inset-0 bg-accent-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] bg-black"
          >
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-xl font-bold mb-3 text-white">
                {bentoFeatures[1].title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {bentoFeatures[1].description}
              </p>
            </div>
            <div className="absolute inset-0 bg-accent-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Bottom Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] bg-black"
          >
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-xl font-bold mb-3 text-white">
                {bentoFeatures[2].title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {bentoFeatures[2].description}
              </p>
            </div>
            <div className="absolute inset-0 bg-accent-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] bg-black"
          >
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-xl font-bold mb-3 text-white">
                {bentoFeatures[3].title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {bentoFeatures[3].description}
              </p>
            </div>
            <div className="absolute inset-0 bg-accent-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 