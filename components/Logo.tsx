'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface LogoProps {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
  clickable?: boolean
}

export default function Logo({ className = '', showText = true, size = 'md', clickable = true }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  }

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  }

  const logoContent = (
    <>
      <motion.svg
        whileHover={clickable ? { scale: 1.05, transition: { duration: 0.15 } } : {}}
        whileTap={clickable ? { scale: 0.95 } : {}}
        className={`${sizeClasses[size]} outline-none`}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        tabIndex={-1}
        style={{ outline: 'none' }}
      >
        {/* Two connected circles representing matching */}
        <circle cx="30" cy="50" r="18" fill="white" opacity="0.9" />
        <circle cx="70" cy="50" r="18" fill="white" opacity="0.9" />
        
        {/* Connection line - properly connecting the circles with slight overlap */}
        <path
          d="M 46 50 L 54 50"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </motion.svg>
      
      {showText && (
        <span className={`font-bold text-white ${textSizes[size]}`}>
          Recruta
        </span>
      )}
    </>
  )

  if (clickable) {
    return (
      <Link 
        href="/" 
        className={`flex items-center gap-3 focus:outline-none focus-visible:outline-none ${className}`}
      >
        {logoContent}
      </Link>
    )
  }

  return (
    <div 
      className={`flex items-center gap-3 focus:outline-none focus-visible:outline-none ${className}`}
      tabIndex={-1}
    >
      {logoContent}
    </div>
  )
}

