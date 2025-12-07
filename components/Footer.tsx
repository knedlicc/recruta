'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Logo from '@/components/Logo'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="glass-strong border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Logo size="sm" clickable={true} />
            </div>
            <p className="text-white/90">
              {t.footer.description}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">{t.footer.forCandidates}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/candidates" className="text-white/90 hover:text-white transition-colors duration-150">
                  {t.footer.howItWorks}
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-white/90 hover:text-white transition-colors duration-150">
                  {t.footer.browseJobs}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">{t.footer.forClients}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/clients" className="text-white/90 hover:text-white transition-colors duration-150">
                  {t.footer.ourServices}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/90 hover:text-white transition-colors duration-150">
                  {t.footer.aboutUs}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">{t.footer.resources}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-white/90 hover:text-white transition-colors duration-150">
                  {t.nav.faq}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/90 hover:text-white transition-colors duration-150">
                  {t.nav.about}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/90">
          <p>&copy; {new Date().getFullYear()} Recruta. {t.footer.rightsReserved}</p>
        </div>
      </div>
    </footer>
  )
}

