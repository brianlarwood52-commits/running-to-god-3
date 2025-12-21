'use client'

import React from 'react'
import Link from 'next/link'
import { MapPin, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-stone-950 border-t border-stone-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-earth-500 rounded-sm flex items-center justify-center">
                <MapPin className="h-5 w-5 text-earth-500" />
              </div>
              <div>
                <p className="font-cinematic text-xl text-dust-100 tracking-widest">
                  RUNNING TO GOD
                </p>
              </div>
            </div>
            <p className="text-dust-500 text-sm leading-relaxed font-serif">
              A documentary journey across the Australian outback. 
              2,547 kilometres of dust, stars, and finding the way back to what matters.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-xs text-earth-500 tracking-widest mb-6">NAVIGATE</p>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/journey" className="font-mono text-xs text-dust-500 hover:text-dust-200 tracking-wider transition-colors">
                THE ROAD
              </Link>
              <Link href="/campfire" className="font-mono text-xs text-dust-500 hover:text-dust-200 tracking-wider transition-colors">
                CAMPFIRE
              </Link>
              <Link href="/devotions" className="font-mono text-xs text-dust-500 hover:text-dust-200 tracking-wider transition-colors">
                JOURNAL
              </Link>
              <Link href="/about" className="font-mono text-xs text-dust-500 hover:text-dust-200 tracking-wider transition-colors">
                THE STORY
              </Link>
              <Link href="/contact" className="font-mono text-xs text-dust-500 hover:text-dust-200 tracking-wider transition-colors">
                CONTACT
              </Link>
            </div>
          </div>

          {/* Scripture */}
          <div>
            <p className="font-mono text-xs text-earth-500 tracking-widest mb-6">ROAD VERSE</p>
            <blockquote className="text-dust-400 text-sm italic font-serif border-l-2 border-earth-700 pl-4">
              &ldquo;Your word is a lamp for my feet, a light on my path.&rdquo;
              <footer className="mt-3 not-italic font-mono text-xs text-dust-600 tracking-wider">
                — PSALM 119:105
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-mono text-xs text-dust-700 tracking-wider">
              © {currentYear} RUNNING TO GOD MINISTRY
            </p>
            <div className="flex items-center gap-1 font-mono text-xs text-dust-700 tracking-wider">
              MADE WITH <Heart className="h-3 w-3 text-campfire-500 mx-1 fill-current" /> 
              ON THE ROAD
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
