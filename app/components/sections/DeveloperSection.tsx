'use client'

import { motion } from 'framer-motion'
import { Code, GitBranch, Users, Zap } from 'lucide-react'

export default function DeveloperSection() {
  return (
    <section 
      className="py-32 px-6 lg:px-12 relative overflow-hidden"
      style={{ backgroundColor: '#FAFAFA', color: '#1A1A1A' }}
    >

      <div className=" mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl lg:text-5xl font-bold mb-3 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ color: '#1A1A1A' }}
          >
            Build the Future of
            <span 
              className="block bg-gradient-to-r bg-clip-text text-black"
              style={{
                // backgroundImage: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 50%, #60A5FA 100%)'
              }}
            >
              Media Collaboration
            </span>
          </motion.h2>

          <motion.p 
            className="text-base lg:text-lg max-w-2xl mx-auto leading-relaxed"
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

        {/* Super Short Cards */}
        <motion.div 
          className="mb-12 max-w-4xl mx-auto flex items-center justify-center gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[ 
            {
              title: "Full Stack Engineer",
              subtitle: "Build our core platform.",
              image: "assets/dev.png"
            },
            {
              title: "UI/UX Designer",
              subtitle: "Design unforgettable UX.",
              image: "assets/uiux.png"
            },
            {
              title: "Video Editor",
              subtitle: "Be the user's voice.",
              image: "assets/video.png"
            }
          ].map((role, idx) => (
            <motion.div 
              key={idx}
              className="relative rounded-3xl overflow-hidden bg-gray-200 border border-gray-100 shadow-sm m-0 text-center w-64 h-44 flex items-center justify-center"
              style={{ backgroundImage: `url(${role.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0  bg-opacity-50" />
              <div className="relative z-10 w-full flex flex-col items-center justify-center">
                <h3 className="text-lg font-bold mb-1 text-white drop-shadow-lg">{role.title}</h3>
                {/* <p className="text-sm text-gray-200 drop-shadow-lg">{role.subtitle}</p> */}
              </div>
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
            className="relative px-12 py-4 text-lg font-bold rounded-2xl transition-all duration-300 overflow-hidden group"
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
            <span className="relative z-10">Join Our Founding Team</span>
          </motion.button>
          
          
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