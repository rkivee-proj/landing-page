'use client'

import { motion } from 'framer-motion'
import { Code, GitBranch, Users, Zap, ArrowRight, Sparkles } from 'lucide-react'

export default function DeveloperSection() {
  const handleJoinTeamClick = () => {
    const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'admin@rkivee.com';
    const subject = encodeURIComponent('Interest in Joining rkivee Founding Team');
    const body = encodeURIComponent(`Hi there,

I'm interested in joining the rkivee founding team.

About me:
- Role: [Fullstack Developer / UI/UX Designer / Video Editor / Other]
- Experience: [Years of experience in relevant field]
- Current position: [Your current role and company]
- Location: [Your location/timezone]

My relevant skills and experience:
- [List your key technical skills, tools, and technologies]
- [Any relevant projects or portfolio links]
- [Experience with collaboration tools, design systems, or video editing workflows]

Why I'm interested in rkivee:
- [What excites you about the platform]
- [How your skills align with the product vision]
- [Any specific areas you'd like to contribute to]

I'm particularly interested in:
- [Remote work opportunities / Part-time / Full-time]
- [Any specific role or responsibilities you're looking for]
- [Your availability and timeline]

Please let me know the next steps in the application process.

Best regards,
[Your Name]
[Your Portfolio/Website]
[Your LinkedIn/Professional Profile]`);

    window.open(`mailto:${adminEmail}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section
      className="py-32 pt-24  px-6 lg:px-12 relative overflow-hidden"
      style={{ backgroundColor: '#FAFAFA', color: '#1A1A1A' }}
    >

      <div className=" mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">We're Hiring</span>
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
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
            className="text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Are you a passionate developer who believes in revolutionizing how creative teams collaborate?
            Join us in building the next generation of media collaboration tools.
          </motion.p>
        </motion.div>

        {/* Enhanced Role Cards Grid */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 mb-16 "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            {
              title: "Full Stack Engineer",
              subtitle: "Build our core platform with cutting-edge technologies",
              icon: Code,
              gradient: "from-emerald-500 to-teal-600",
              bgGradient: "from-emerald-50 to-teal-50",
              borderColor: "border-emerald-200",
              textColor: "text-emerald-700",
              description: "Architect scalable solutions and build the foundation of our platform"
            },
            {
              title: "UI/UX Designer",
              subtitle: "Design unforgettable user experiences",
              icon: Users,
              gradient: "from-purple-500 to-pink-600",
              bgGradient: "from-purple-50 to-pink-50",
              borderColor: "border-purple-200",
              textColor: "text-purple-700",
              description: "Create intuitive interfaces that delight users and drive engagement"
            },
            {
              title: "Video Editor",
              subtitle: "Be the user's voice and creative vision",
              icon: Zap,
              gradient: "from-orange-500 to-red-600",
              bgGradient: "from-orange-50 to-red-50",
              borderColor: "border-orange-200",
              textColor: "text-orange-700",
              description: "Shape our product through the lens of creative professionals"
            }
          ].map((role, idx) => (
            <motion.div
              key={idx}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + idx * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`relative p-8 max-w-96 rounded-2xl border-2 transition-all duration-300 cursor-pointer overflow-hidden ${role.borderColor} ${role.bgGradient} hover:shadow-2xl hover:scale-105`}
                whileHover={{ y: -8 }}
                style={{
                  background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                  '--tw-gradient-from': role.bgGradient.includes('emerald') ? '#ecfdf5' : role.bgGradient.includes('purple') ? '#faf5ff' : '#fff7ed',
                  '--tw-gradient-to': role.bgGradient.includes('emerald') ? '#ccfbf1' : role.bgGradient.includes('purple') ? '#f3e8ff' : '#ffedd5',
                } as any}
              >
                {/* Background Pattern */}
                {/* <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-gradient-to-r from-gray-400 to-gray-600"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-gradient-to-r from-gray-400 to-gray-600"></div>
                </div> */}

                {/* Icon */}
                {/* <motion.div
                  className={`relative z-10 w-16 h-16 rounded-xl bg-gradient-to-r ${role.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <role.icon className="w-8 h-8 text-white" />
                </motion.div> */}

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-gray-800 transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {role.description}
                  </p>

                  {/* Hover Arrow */}
                  {/* <motion.div 
                    className="flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-gray-700 transition-colors"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.div> */}
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.1) 0%, transparent 50%)`
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={handleJoinTeamClick}
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