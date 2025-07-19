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
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 text-light-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            The Chaos of Modern Post-Production
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg max-w-3xl mx-auto text-light-text-secondary px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
           Relying on a mix of external hard drives, cloud storage links, and chat apps to manage projects creates friction. This inefficiency leads to missed deadlines, frustrating rework, and a process that feels broken.
          </motion.p>
        </motion.div>

        {/* Responsive Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 h-full sm:h-[700px] lg:h-[800px]">
          {bentoFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] h-96 ${
                index === 0 ? 'bg-red-500' : 'bg-black'
              }`}
            >
              <img 
                src={feature.image} 
                alt={feature.title} 
                className="object-cover absolute w-full h-full" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-lg font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              {index < 2 && (
                <div className="absolute inset-0 bg-accent-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 