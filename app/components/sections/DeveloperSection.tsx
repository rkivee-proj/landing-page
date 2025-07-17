'use client'

import { motion } from 'framer-motion'
import { Code, GitBranch, Users, Zap } from 'lucide-react'

export default function DeveloperSection() {
  return (
    <section 
      className="py-32 px-6 lg:px-12 relative overflow-hidden"
      style={{ backgroundColor: '#FAFAFA', color: '#1A1A1A' }}
    >
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, #2563EB 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(59, 130, 246, 0.03) 50%, rgba(147, 197, 253, 0.05) 100%)'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-8 py-4 mb-10 rounded-full shadow-lg"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(37, 99, 235, 0.15)',
              boxShadow: '0 10px 25px rgba(37, 99, 235, 0.08)'
            }}
          >
            <div 
              className="p-2 rounded-full"
              style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)' }}
            >
              <Code size={18} style={{ color: '#2563EB' }} />
            </div>
            <span style={{ color: '#1A1A1A' }} className="font-semibold text-sm tracking-wide uppercase">
              Join Our Team
            </span>
          </motion.div>

          <motion.h2 
            className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ color: '#1A1A1A' }}
          >
            Build the Future of
            <span 
              className="block bg-gradient-to-r bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 50%, #60A5FA 100%)'
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
            style={{ color: '#6B7280' }}
          >
            Are you a passionate developer who believes in revolutionizing how creative teams collaborate? 
            Join us in building the next generation of media collaboration tools.
          </motion.p>
        </motion.div>

        {/* Enhanced Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: GitBranch,
              title: "Modern Tech Stack",
              description: "Work with cutting-edge technologies and build scalable solutions",
              gradient: "linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)"
            },
            {
              icon: Users,
              title: "Collaborative Culture", 
              description: "Join a team that values innovation, creativity, and open communication",
              gradient: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)"
            },
            {
              icon: Zap,
              title: "Impact & Growth",
              description: "Shape the future of media collaboration and grow your skills",
              gradient: "linear-gradient(135deg, #60A5FA 0%, #93C5FD 100%)"
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="group relative p-8 rounded-2xl transition-all duration-300 hover:shadow-xl"
              style={{ 
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(37, 99, 235, 0.08)',
                boxShadow: '0 4px 20px rgba(37, 99, 235, 0.05)'
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div 
                className="w-16 h-16 mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                style={{ background: feature.gradient }}
              >
                <feature.icon size={26} style={{ color: '#FFFFFF' }} />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1A1A1A' }}>
                {feature.title}
              </h3>
              <p className="leading-relaxed" style={{ color: '#6B7280' }}>
                {feature.description}
              </p>
              
              {/* Subtle hover effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.02) 0%, rgba(147, 197, 253, 0.02) 100%)'
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-12 py-6 text-lg font-bold rounded-2xl transition-all duration-300 overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)',
              color: '#FFFFFF',
              boxShadow: '0 10px 40px rgba(37, 99, 235, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(37, 99, 235, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0px) scale(1)'
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(37, 99, 235, 0.3)'
            }}
          >
            {/* Button background effect */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 group-hover:opacity-25 transition-opacity duration-500"
              style={{ transform: 'translateX(-100%)', animation: 'shimmer 3s infinite' }}
            />
            <span className="relative z-10">Join Our Developer Team</span>
          </motion.button>
          
          <motion.p 
            className="mt-8 text-base"
            style={{ color: '#9CA3AF' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            Ready to build something amazing? Let's talk.
          </motion.p>
        </motion.div>
      </div>
      
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  )
} 