'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Candidates() {
  const { t } = useLanguage()

  const benefits = [
    {
      title: t.candidates.benefits.careerGuidance.title,
      description: t.candidates.benefits.careerGuidance.description,
      icon: '🎯',
    },
    {
      title: t.candidates.benefits.topJobs.title,
      description: t.candidates.benefits.topJobs.description,
      icon: '💼',
    },
    {
      title: t.candidates.benefits.interviewPrep.title,
      description: t.candidates.benefits.interviewPrep.description,
      icon: '📝',
    },
    {
      title: t.candidates.benefits.salaryNegotiation.title,
      description: t.candidates.benefits.salaryNegotiation.description,
      icon: '💰',
    },
  ]

  const process = [
    {
      step: '1',
      title: t.candidates.process.register.title,
      description: t.candidates.process.register.description,
    },
    {
      step: '2',
      title: t.candidates.process.match.title,
      description: t.candidates.process.match.description,
    },
    {
      step: '3',
      title: t.candidates.process.support.title,
      description: t.candidates.process.support.description,
    },
    {
      step: '4',
      title: t.candidates.process.success.title,
      description: t.candidates.process.success.description,
    },
  ]
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
              {t.candidates.hero.title}
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              {t.candidates.hero.subtitle}
            </p>
            <Link href="/jobs">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="px-8 py-3 bg-white text-primary-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-150 border-2 border-white/50 hover:bg-gray-50"
              >
                {t.candidates.hero.browseJobs}
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
            <h2 className="text-4xl font-bold text-white mb-4">{t.candidates.benefits.title}</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {t.candidates.benefits.subtitle}
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
            <h2 className="text-4xl font-bold text-white mb-4">{t.candidates.process.title}</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {t.candidates.process.subtitle}
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
          <h2 className="text-4xl font-bold text-white mb-4">{t.candidates.cta.title}</h2>
          <p className="text-xl text-white/90 mb-8">
            {t.candidates.cta.subtitle}
          </p>
          <Link href="/jobs">
            <motion.button
              whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-primary-600 rounded-full font-semibold shadow-lg hover:bg-gray-50 border-2 border-white/50 transition-all duration-150"
            >
              {t.candidates.cta.getStarted}
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glass-card">
        <div className="max-w-4xl mx-auto">
          <ContactForm
            title={t.candidates.contact.title}
            subtitle={t.candidates.contact.subtitle}
            defaultSubject="Candidate Inquiry"
          />
        </div>
      </section>
    </div>
  )
}

