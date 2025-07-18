'use client'

import { motion } from 'framer-motion'

export default function DemoVideoSection() {

  return (
    <section
      className="min-h-screen relative overflow-hidden dense-dotted-grid"
      // style={{ backgroundColor: '#0A0807', color: '#F5F5F0' }}
    >
      {/* Strong amber gradient patch */}
      {/* <div className="absolute inset-0 amber-gradient-patch" /> */}

      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: 'rgba(242, 169, 0, 0.4)'
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-32">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.h2
            className="text-5xl lg:text-7xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ color: '#F5F5F0' }}
          >
            See rkivee in
            <span className="block">Action</span>
          </motion.h2>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            style={{ color: '#A1A1A6' }}
          >
            Watch how creative teams collaborate seamlessly with our revolutionary platform
          </motion.p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative max-w-5xl w-full"
        >
          <div className="video-container aspect-video relative group">
            {/* YouTube Video */}
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/rapbhpW3jPM?si=JI50k2vtvdEwuNu9"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-2xl"
            />


          </div>
        </motion.div>

        {/* Video Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-12 mt-24 text-center"
        >
          {[
            { value: '50%', label: 'Faster Collaboration' },
            { value: '90%', label: 'Less Revision Time' },
            { value: '100%', label: 'Asset Sync Accuracy' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.9 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-3xl lg:text-4xl font-bold mb-2"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
                style={{ backgroundSize: '200% 100%' }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm" style={{ color: '#6E6E73' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(242, 169, 0, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 rounded-2xl font-semibold text-lg transition-all"
            style={{
              background: 'white',
              color: '#3D2900',
              border: '1px solid rgba(245, 245, 240, 0.2)'
            }}
          >
            Request Full Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 