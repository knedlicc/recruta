'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

const benefits = [
  {
    title: 'Career Guidance',
    description: 'Get expert advice on your career path and professional development',
    icon: '🎯',
  },
  {
    title: 'Access to Top Jobs',
    description: 'Exclusive access to positions that match your skills and aspirations',
    icon: '💼',
  },
  {
    title: 'Interview Preparation',
    description: 'We help you prepare for interviews with tips and mock sessions',
    icon: '📝',
  },
  {
    title: 'Salary Negotiation',
    description: 'Expert support to help you get the compensation you deserve',
    icon: '💰',
  },
]

const process = [
  {
    step: '1',
    title: 'Register Your Profile',
    description: 'Create your profile and tell us about your skills and career goals',
  },
  {
    step: '2',
    title: 'Get Matched',
    description: 'We match you with opportunities that align with your profile',
  },
  {
    step: '3',
    title: 'Interview Support',
    description: 'We prepare you for interviews and provide ongoing support',
  },
  {
    step: '4',
    title: 'Land Your Dream Job',
    description: 'Get placed in a role that fits your career aspirations',
  },
]

export default function Candidates() {
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Your Career Journey Starts Here
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              We're here to help you find the perfect opportunity that matches your skills, 
              values, and career aspirations.
            </p>
            <Link href="/jobs">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="px-8 py-3 bg-white text-primary-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-150 border-2 border-white/50 hover:bg-gray-50"
              >
                Browse Available Jobs
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glass-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Help You</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Comprehensive support throughout your job search journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.15 } }}
                className="glass-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-150 text-center hover:bg-white/90"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Simple steps to your next career opportunity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-6 shadow-lg">
                  <div className="text-4xl font-bold text-white mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center glass-strong rounded-3xl p-12 shadow-2xl"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Join thousands of successful candidates who found their dream jobs through us.
          </p>
          <Link href="/jobs">
            <motion.button
              whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-primary-600 rounded-full font-semibold shadow-lg hover:bg-gray-50 border-2 border-white/50 transition-all duration-150"
            >
              Get Started Today
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glass-card">
        <div className="max-w-4xl mx-auto">
          <ContactForm
            title="Get in Touch"
            subtitle="Have questions about our services? Want to register as a candidate? Contact us today!"
            defaultSubject="Candidate Inquiry"
          />
        </div>
      </section>
    </div>
  )
}

