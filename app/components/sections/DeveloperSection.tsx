'use client'

import { motion } from 'framer-motion'
import { Code, GitBranch, Users, Zap } from 'lucide-react'

export default function DeveloperSection() {
  return (
    <section 
      className="py-32 px-6 lg:px-12"
      style={{ backgroundColor: '#0A0807', color: '#F5F5F0' }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, #0D252E 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 mb-8 rounded-full"
            style={{
              backgroundColor: 'rgba(13, 37, 46, 0.2)',
              border: '1px solid rgba(13, 37, 46, 0.4)'
            }}
          >
            <Code size={20} style={{ color: '#0D252E' }} />
            <span style={{ color: '#F5F5F0' }} className="font-semibold">
              Join Our Team
            </span>
          </motion.div>

          <motion.h2 
            className="text-5xl lg:text-7xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ color: '#F5F5F0' }}
          >
            Build the Future of
            <span 
              className="block"
              style={{
                color: '#F5F5F0'
              }}
            >
              Media Collaboration
            </span>
          </motion.h2>

          <motion.p 
            className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            style={{ color: '#A1A1A6' }}
          >
            Are you a passionate developer who believes in revolutionizing how creative teams collaborate? 
            Join us in building the next generation of media collaboration tools.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center p-8">
            <div 
              className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(13, 37, 46, 0.3)' }}
            >
              <GitBranch size={28} style={{ color: '#0D252E' }} />
            </div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#F5F5F0' }}>
              Modern Tech Stack
            </h3>
            <p style={{ color: '#A1A1A6' }}>
              Work with cutting-edge technologies and build scalable solutions
            </p>
          </div>

          <div className="text-center p-8">
            <div 
              className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(13, 37, 46, 0.3)' }}
            >
              <Users size={28} style={{ color: '#0D252E' }} />
            </div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#F5F5F0' }}>
              Collaborative Culture
            </h3>
            <p style={{ color: '#A1A1A6' }}>
              Join a team that values innovation, creativity, and open communication
            </p>
          </div>

          <div className="text-center p-8">
            <div 
              className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(13, 37, 46, 0.3)' }}
            >
              <Zap size={28} style={{ color: '#0D252E' }} />
            </div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#F5F5F0' }}>
              Impact & Growth
            </h3>
            <p style={{ color: '#A1A1A6' }}>
              Shape the future of media collaboration and grow your skills
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
            style={{
              backgroundColor: '#F5F5F0',
              color: '#0A0807',
              boxShadow: '0 10px 40px rgba(245, 245, 240, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E5E5E0'
              e.currentTarget.style.boxShadow = '0 15px 50px rgba(245, 245, 240, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#F5F5F0'
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(245, 245, 240, 0.3)'
            }}
          >
            Join Our Developer Team
          </motion.button>
          
          <motion.p 
            className="mt-6 text-sm"
            style={{ color: '#6E6E73' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            Ready to build something amazing? Let's talk.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
} 