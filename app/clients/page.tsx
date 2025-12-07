'use client'

import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'

const services = [
  {
    title: 'Talent Sourcing',
    description: 'We find the best candidates for your open positions through our extensive network',
    icon: '🔍',
  },
  {
    title: 'Screening & Vetting',
    description: 'Thorough background checks and skill assessments to ensure quality hires',
    icon: '✅',
  },
  {
    title: 'Time Savings',
    description: 'Save valuable time by letting us handle the entire recruitment process',
    icon: '⏱️',
  },
  {
    title: 'Industry Expertise',
    description: 'Deep understanding of various industries and their specific hiring needs',
    icon: '💡',
  },
]

const industries = [
  'Technology',
  'Finance',
  'Healthcare',
  'Marketing',
  'Sales',
  'Engineering',
  'Design',
  'Operations',
]

const testimonials = [
  {
    quote: 'Recruta helped us find the perfect candidate in record time. Their team is professional and truly understands our needs.',
    author: 'Sarah Johnson',
    role: 'HR Director, Tech Corp',
  },
  {
    quote: 'The quality of candidates we received was outstanding. We\'ve hired three people through Recruta and couldn\'t be happier.',
    author: 'Michael Chen',
    role: 'CEO, StartupXYZ',
  },
]

export default function Clients() {
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
              Find the Right Talent for Your Team
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              We help companies of all sizes find exceptional talent that drives business success. 
              Let us handle your recruitment needs so you can focus on what matters most.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-primary-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-150 border-2 border-white/50 hover:bg-gray-50"
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glass-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Comprehensive recruitment solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.15 } }}
                className="glass-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-150 text-center hover:bg-white/90"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              We have experience recruiting across diverse industries
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-semibold shadow-lg transition-all duration-150"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glass-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card rounded-2xl p-8 shadow-lg hover:bg-white/90 transition-all duration-150"
              >
                <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-700">{testimonial.role}</p>
                </div>
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
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Find Your Next Hire?</h2>
          <p className="text-xl text-white mb-8">
            Let's discuss how we can help you build your dream team.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-primary-600 rounded-full font-semibold shadow-lg hover:bg-gray-50 border-2 border-white/50 transition-all duration-150"
          >
            Contact Us Today
          </motion.button>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glass-card">
        <div className="max-w-4xl mx-auto">
          <ContactForm
            title="Let's Discuss Your Hiring Needs"
            subtitle="Tell us about your company and what kind of talent you're looking for. We'll get back to you with a customized solution."
            defaultSubject="Client Inquiry"
          />
        </div>
      </section>
    </div>
  )
}

