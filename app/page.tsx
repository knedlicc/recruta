'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import { useLanguage } from '@/contexts/LanguageContext'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}


export default function Home() {
  const { t } = useLanguage()

  const features = [
    {
      title: t.home.features.matching.title,
      description: t.home.features.matching.description,
      icon: '🎯',
      color: 'from-primary-500 to-accent-500',
    },
    {
      title: t.home.features.service.title,
      description: t.home.features.service.description,
      icon: '🤝',
      color: 'from-purple-500 to-primary-500',
    },
    {
      title: t.home.features.expertise.title,
      description: t.home.features.expertise.description,
      icon: '💼',
      color: 'from-accent-500 to-primary-600',
    },
  ]

  const stats = [
    { number: '5000+', label: t.home.stats.placements },
    { number: '200+', label: t.home.stats.companies },
    { number: '98%', label: t.home.stats.satisfaction },
    { number: '15+', label: t.home.stats.experience },
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
    {
      quote: 'As a candidate, the support I received was incredible. They helped me land my dream job and guided me through every step.',
      author: 'Emma Rodriguez',
      role: 'Software Engineer',
    },
  ]

  const howItWorks = [
    {
      step: '1',
      title: t.home.howItWorks.connect.title,
      description: t.home.howItWorks.connect.description,
      icon: '🤝',
    },
    {
      step: '2',
      title: t.home.howItWorks.match.title,
      description: t.home.howItWorks.match.description,
      icon: '🎯',
    },
    {
      step: '3',
      title: t.home.howItWorks.support.title,
      description: t.home.howItWorks.support.description,
      icon: '💼',
    },
    {
      step: '4',
      title: t.home.howItWorks.success.title,
      description: t.home.howItWorks.success.description,
      icon: '✨',
    },
  ]

  return (
    <div className="min-h-screen" style={{ visibility: 'visible' }}>
      {/* Hero Section - Enhanced with full-screen feel */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center py-12" style={{ position: 'relative', zIndex: 1 }}>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            variants={containerVariants}
            initial="visible"
            animate="visible"
            className="text-center"
          >
            <motion.h1
              variants={itemVariants}
              initial="visible"
              animate="visible"
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-lg"
            >
              {t.home.hero.title}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              initial="visible"
              animate="visible"
              className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-12 max-w-3xl mx-auto drop-shadow-md"
            >
              {t.home.hero.subtitle}
            </motion.p>
            <motion.div
              variants={itemVariants}
              initial="visible"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/jobs">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="px-10 py-4 bg-white text-primary-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-150 hover:bg-gray-50 border-2 border-white/50"
                >
                  {t.buttons.findJobs}
                </motion.button>
              </Link>
              <Link href="/candidates">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="px-10 py-4 bg-white text-primary-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-150 hover:bg-gray-50 border-2 border-white/50"
                >
                  {t.buttons.forCandidates}
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 glass-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: 'spring' }}
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 via-green-600 to-accent-500 bg-clip-text text-transparent mb-2"
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glass-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.home.features.title}</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              {t.home.features.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.15 } }}
                className="glass-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-150 hover:bg-white/80"
              >
                <div className={`text-5xl mb-4 bg-gradient-to-br ${feature.color} w-16 h-16 rounded-full flex items-center justify-center`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glass-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.home.howItWorks.title}</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              {t.home.howItWorks.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.15 } }}
                className="relative glass-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-150 text-center hover:bg-white/90"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-primary-500 via-green-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {item.step}
                </div>
                <div className="text-5xl mb-4 mt-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glass-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.home.testimonials.title}</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              {t.home.testimonials.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.15 } }}
                className="glass-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-150 hover:bg-white/90"
              >
                <div className="text-4xl bg-gradient-to-r from-primary-400 via-green-400 to-accent-400 bg-clip-text text-transparent mb-4">"</div>
                <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-700 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center glass-strong rounded-3xl p-12 shadow-2xl"
        >
          <h2 className="text-4xl font-bold text-white mb-4">{t.home.cta.title}</h2>
          <p className="text-xl text-white mb-8">
            {t.home.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/candidates">
              <motion.button
                whileHover={{ scale: 1.05, y: -2, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-primary-600 rounded-full font-semibold shadow-lg hover:bg-gray-50 border-2 border-white/50 transition-all duration-150"
              >
                {t.home.cta.candidate}
              </motion.button>
            </Link>
            <Link href="/clients">
              <motion.button
                whileHover={{ scale: 1.05, y: -2, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-primary-600 rounded-full font-semibold shadow-lg hover:bg-gray-50 border-2 border-white/50 transition-all duration-150"
              >
                {t.home.cta.client}
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 glass-card">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.home.contact.title}</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              {t.home.contact.subtitle}
            </p>
          </motion.div>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

