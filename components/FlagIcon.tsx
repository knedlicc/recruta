'use client'

interface FlagIconProps {
  country: 'gb' | 'cz'
  className?: string
}

export default function FlagIcon({ country, className = '' }: FlagIconProps) {
  const flags = {
    gb: (
      <svg
        className={className}
        viewBox="0 0 3 2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="3" height="2" fill="#012169" />
        {/* White diagonal cross (St. Andrew's) */}
        <path d="M0 0L3 2M3 0L0 2" stroke="#fff" strokeWidth="0.25" strokeLinecap="round" />
        {/* Red diagonal cross (St. Patrick's) */}
        <path d="M0 0L3 2M3 0L0 2" stroke="#C8102E" strokeWidth="0.15" strokeLinecap="round" />
        {/* White vertical and horizontal cross (St. George's) */}
        <rect x="1.25" y="0" width="0.5" height="2" fill="#fff" />
        <rect x="0" y="0.75" width="3" height="0.5" fill="#fff" />
        {/* Red vertical and horizontal cross */}
        <rect x="1.35" y="0" width="0.3" height="2" fill="#C8102E" />
        <rect x="0" y="0.85" width="3" height="0.3" fill="#C8102E" />
      </svg>
    ),
    cz: (
      <svg
        className={className}
        viewBox="0 0 3 2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#fff" d="M0 0h3v1H0z" />
        <path fill="#d7141a" d="M0 1h3v1H0z" />
        <path fill="#11457e" d="M0 0l1.5 1L0 2z" />
      </svg>
    ),
  }

  return flags[country]
}

