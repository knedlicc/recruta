'use client'

import { motion } from 'framer-motion'

const values = [
  {
    title: 'Integrity',
    description: 'We operate with honesty and transparency in everything we do',
    icon: '🤝',
  },
  {
    title: 'Excellence',
    description: 'We strive for the highest standards in our service delivery',
    icon: '⭐',
  },
  {
    title: 'Partnership',
    description: 'We build long-term relationships based on trust and mutual success',
    icon: '🤝',
  },
  {
    title: 'Innovation',
    description: 'We continuously improve our processes to deliver better results',
    icon: '💡',
  },
]

const team = [
  {
    name: 'Alexandra Smith',
    role: 'Founder & CEO',
    description: '15+ years in recruitment and talent acquisition',
  },
  {
    name: 'David Martinez',
    role: 'Head of Operations',
    description: 'Expert in matching talent with opportunities',
  },
  {
    name: 'Emily Chen',
    role: 'Senior Recruiter',
    description: 'Specializes in tech and engineering roles',
  },
]

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About Recruta
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              We're a trusted recruitment agency dedicated to connecting exceptional talent 
              with outstanding opportunities. Our mission is to make recruitment simple, 
              personal, and effective for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glass-card">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-gray-700 text-left">
              <p>
                Founded in 2015, Recruta was born from a simple belief: recruitment should be 
                about people, not just processes. We saw too many talented candidates overlooked 
                and too many companies struggling to find the right fit.
              </p>
              <p>
                Over the years, we've built a reputation for excellence by taking a personalized 
                approach to every placement. We don't just match resumes to job descriptions—we 
                understand the unique needs of both candidates and clients to create lasting, 
                successful partnerships.
              </p>
              <p>
                Today, we're proud to have helped thousands of professionals find their dream jobs 
                and hundreds of companies build their dream teams. Our commitment to integrity, 
                excellence, and innovation continues to drive everything we do.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.15 } }}
                className="glass-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-150 text-center hover:bg-white/90"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glass-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center hover:bg-white/90"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl text-white font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-700">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: '5000+', label: 'Successful Placements' },
              { number: '200+', label: 'Partner Companies' },
              { number: '98%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center glass-strong rounded-2xl p-8 shadow-lg"
              >
                <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-xl text-white">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

