'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import JobApplicationModal from '@/components/JobApplicationModal'

const jobs = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120k - $150k',
    description: 'We are looking for an experienced software engineer to join our growing team.',
    tags: ['React', 'TypeScript', 'Node.js'],
  },
  {
    id: 2,
    title: 'Product Designer',
    company: 'Creative Solutions',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$90k - $120k',
    description: 'Join our design team to create beautiful and functional user experiences.',
    tags: ['UI/UX', 'Figma', 'Design Systems'],
  },
  {
    id: 3,
    title: 'Marketing Manager',
    company: 'Growth Partners',
    location: 'Remote',
    type: 'Full-time',
    salary: '$80k - $100k',
    description: 'Lead our marketing efforts and drive brand awareness across multiple channels.',
    tags: ['Digital Marketing', 'SEO', 'Content Strategy'],
  },
  {
    id: 4,
    title: 'Data Analyst',
    company: 'Analytics Pro',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$70k - $90k',
    description: 'Help us make data-driven decisions by analyzing complex datasets.',
    tags: ['SQL', 'Python', 'Tableau'],
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    company: 'Cloud Systems',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: '$110k - $140k',
    description: 'Build and maintain our cloud infrastructure and CI/CD pipelines.',
    tags: ['AWS', 'Docker', 'Kubernetes'],
  },
  {
    id: 6,
    title: 'Sales Representative',
    company: 'Business Solutions',
    location: 'Chicago, IL',
    type: 'Full-time',
    salary: '$60k - $80k + Commission',
    description: 'Drive revenue growth by building relationships with new and existing clients.',
    tags: ['B2B Sales', 'CRM', 'Negotiation'],
  },
]

export default function Jobs() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedJobForApplication, setSelectedJobForApplication] = useState<{ title: string; company: string } | null>(null)

  const handleApplyClick = (job: typeof jobs[0]) => {
    setSelectedJobForApplication({ title: job.title, company: job.company })
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Available Positions</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Discover exciting career opportunities across various industries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.15 } }}
              className="glass-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-150 hover:bg-white/90"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
                  <p className="text-primary-600 font-semibold">{job.company}</p>
                </div>
                <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
                  {job.type}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <p className="text-gray-600 flex items-center">
                  <span className="mr-2">📍</span>
                  {job.location}
                </p>
                <p className="text-gray-600 flex items-center">
                  <span className="mr-2">💰</span>
                  {job.salary}
                </p>
              </div>

              <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleApplyClick(job)}
                className="w-full py-2 bg-gradient-to-r from-primary-500 via-green-500 to-accent-500 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-150"
              >
                Apply Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedJobForApplication && (
        <JobApplicationModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false)
            setSelectedJobForApplication(null)
          }}
          jobTitle={selectedJobForApplication.title}
          company={selectedJobForApplication.company}
        />
      )}
    </div>
  )
}

