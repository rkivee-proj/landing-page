'use client'

import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, Target, MessageSquare } from 'lucide-react'

export default function InvestorSection() {
  return (
    <section 
      className="py-32 px-6 lg:px-12"
      style={{ backgroundColor: '#FFFFFF', color: '#1D1D1F' }}
    >
      <div className="max-w-6xl mx-auto">
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
              backgroundColor: 'rgba(13, 37, 46, 0.1)',
              border: '1px solid rgba(13, 37, 46, 0.3)'
            }}
          >
            <TrendingUp size={20} style={{ color: '#0D252E' }} />
            <span style={{ color: '#1D1D1F' }} className="font-semibold">
              Investment Opportunity
            </span>
          </motion.div>

          <motion.h2 
            className="text-5xl lg:text-7xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ color: '#1D1D1F' }}
          >
            Investing in the Future of
            <span 
              className="block"
              style={{
                color: '#1D1D1F'
              }}
            >
              Creative Collaboration
            </span>
          </motion.h2>

          <motion.p 
            className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            style={{ color: '#5A5A5F' }}
          >
            rkivee is transforming how creative teams collaborate. Join us in revolutionizing 
            a multi-billion dollar industry with cutting-edge technology and innovative solutions.
          </motion.p>
        </motion.div>

        {/* Key Metrics Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: '#F7F8FA' }}>
            <div 
              className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(13, 37, 46, 0.2)' }}
            >
              <Target size={28} style={{ color: '#0D252E' }} />
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#1D1D1F' }}>
              $50B+
            </h3>
            <h4 className="text-lg font-semibold mb-4" style={{ color: '#1D1D1F' }}>
              Market Opportunity
            </h4>
            <p style={{ color: '#5A5A5F' }}>
              Total addressable market for video collaboration tools
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: '#F7F8FA' }}>
            <div 
              className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(13, 37, 46, 0.2)' }}
            >
              <TrendingUp size={28} style={{ color: '#0D252E' }} />
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#1D1D1F' }}>
              300%
            </h3>
            <h4 className="text-lg font-semibold mb-4" style={{ color: '#1D1D1F' }}>
              YoY Growth
            </h4>
            <p style={{ color: '#5A5A5F' }}>
              Market growth rate for collaborative media tools
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: '#F7F8FA' }}>
            <div 
              className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(13, 37, 46, 0.2)' }}
            >
              <DollarSign size={28} style={{ color: '#0D252E' }} />
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#1D1D1F' }}>
              Q4 2025
            </h3>
            <h4 className="text-lg font-semibold mb-4" style={{ color: '#1D1D1F' }}>
              Launch Timeline
            </h4>
            <p style={{ color: '#5A5A5F' }}>
              Early access launch with pre-committed users
            </p>
          </div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16 p-12 rounded-3xl"
          style={{
            background: 'linear-gradient(to bottom right, #F7F8FA, #EAEAEB)',
            border: '1px solid #D1D1D6'
          }}
        >
          <h3 className="text-3xl font-bold mb-6" style={{ color: '#1D1D1F' }}>
            Why rkivee is the Perfect Investment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h4 className="font-semibold mb-3" style={{ color: '#1D1D1F' }}>
                • Proven Market Need
              </h4>
              <p style={{ color: '#5A5A5F' }}>
                Creative teams struggle with fragmented workflows and version control
              </p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold mb-3" style={{ color: '#1D1D1F' }}>
                • Scalable Technology
              </h4>
              <p style={{ color: '#5A5A5F' }}>
                Cloud-native architecture built for global collaboration
              </p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold mb-3" style={{ color: '#1D1D1F' }}>
                • Strong Team
              </h4>
              <p style={{ color: '#5A5A5F' }}>
                Experienced founders with deep industry knowledge
              </p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold mb-3" style={{ color: '#1D1D1F' }}>
                • Clear Path to Revenue
              </h4>
              <p style={{ color: '#5A5A5F' }}>
                SaaS model with predictable recurring revenue streams
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
              style={{
                backgroundColor: '#1D1D1F',
                color: '#FFFFFF',
                boxShadow: '0 10px 40px rgba(29, 29, 31, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2D2D2F'
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(29, 29, 31, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1D1D1F'
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(29, 29, 31, 0.3)'
              }}
            >
              Request Investment Deck
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 text-lg font-semibold rounded-xl transition-all duration-300 flex items-center gap-3"
              style={{
                backgroundColor: 'transparent',
                color: '#1D1D1F',
                border: '2px solid #0D252E'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(13, 37, 46, 0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              <MessageSquare size={20} />
              Schedule a Chat
            </motion.button>
          </div>
          
          <motion.p 
            className="mt-8 text-sm"
            style={{ color: '#8A8A8E' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            Interested in learning more? Let's discuss how rkivee can fit into your investment portfolio.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
} 