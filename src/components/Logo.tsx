'use client'

import React from 'react'
import Image from 'next/image'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero'
  showText?: boolean
  className?: string
}

export default function Logo({ size = 'md', showText = false, className = '' }: LogoProps) {
  const sizes = {
    sm: { width: 50, height: 50 },
    md: { width: 70, height: 70 },
    lg: { width: 100, height: 100 },
    xl: { width: 160, height: 160 },
    hero: { width: 220, height: 220 },
  }

  const { width, height } = sizes[size]

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <Image
        src="/images/running-to-god-logo-small.png"
        alt="Running to God - Road leading to cross"
        width={width}
        height={height}
        className="drop-shadow-lg"
        priority
      />

      {showText && (
        <p 
          className="font-bold text-white tracking-wide mt-2"
          style={{ 
            fontSize: size === 'hero' ? '1.75rem' : size === 'xl' ? '1.5rem' : size === 'lg' ? '1rem' : '0.75rem',
          }}
        >
          RUNNING TO GOD
        </p>
      )}
    </div>
  )
}
