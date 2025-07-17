'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function SocialProof() {
  return (
    <section 
      className="py-32 pt-0 px-6 lg:px-12"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Clean, minimal header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium tracking-wider mb-4" style={{ color: '#6B7280' }}>
            NATIVELY INTEGRATED WITH
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: '#111827' }}>
            The Tools You Already Use
          </h2>
        </motion.div>

        {/* Logo row - clean and professional */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Adobe Premiere Pro */}
          <motion.div 
            className="flex items-center gap-4 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div 
              className="rounded-xl flex items-center justify-center"
              style={{ backgroundColor: '#9999FF' }}
            >
              <Image src="/icons/PremierePro.png" alt="Adobe Premiere Pro" width={48} height={48} />
            </div>
            <div>
              <div className="font-semibold" style={{ color: '#111827' }}>
                Adobe Premiere Pro
              </div>
              <div className="text-sm" style={{ color: '#6B7280' }}>
                Video editing
              </div>
            </div>
          </motion.div>

          {/* Connector */}
          <motion.div 
            className="hidden md:block w-16 h-px"
            style={{ backgroundColor: 'rgba(107, 114, 128, 0.3)' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          />

          {/* DaVinci Resolve */}
          <motion.div 
            className="flex items-center gap-4 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div 
              className="rounded-xl flex items-center justify-center"
              style={{ backgroundColor: '#FF6B6B' }}
            >
              <Image src="/icons/Davinci.png" alt="DaVinci Resolve" width={48} height={48} />
            </div>
            <div>
              <div className="font-semibold" style={{ color: '#111827' }}>
                DaVinci Resolve
              </div>
              <div className="text-sm" style={{ color: '#6B7280' }}>
                Color grading
              </div>
            </div>
          </motion.div>

          {/* Connector */}
          <motion.div 
            className="hidden md:block w-16 h-px"
            style={{ backgroundColor: 'rgba(107, 114, 128, 0.3)' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          />

          {/* Google Drive */}
          <motion.div 
            className="flex items-center gap-4 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div 
              className="rounded-xl flex items-center justify-center"
            >
              <Image src="/icons/Drive.png" alt="Google Drive" width={48} height={48} />
            </div>
            <div>
              <div className="font-semibold" style={{ color: '#111827' }}>
                Google Drive
              </div>
              <div className="text-sm" style={{ color: '#6B7280' }}>
                Cloud storage
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 