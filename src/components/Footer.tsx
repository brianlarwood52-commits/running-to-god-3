'use client'

import React from 'react'
import Link from 'next/link'
import { Compass, Heart, MapPin, Tent, Fuel, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-stone-900 border-t-4 border-earth-700">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-earth-500 to-earth-700 rounded flex items-center justify-center">
                <Compass className="h-6 w-6 text-white" />
              </div>
              <span className="font-display text-2xl text-white tracking-wider">
                RUNNING TO GOD
              </span>
            </div>
            <p className="text-dust-400 text-sm max-w-md mb-4">
              A ministry born from a 2,500km road trip across the Australian outback. 
              Finding God on dusty roads, at roadhouse stops, and under starlit skies.
            </p>
            <p className="font-mono text-xs text-dust-600 tracking-widest">
              PERTH → NORSEMAN → NULLARBOR → CEDUNA → PORT LINCOLN
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-lg text-earth-500 tracking-wider mb-4">
              NAVIGATE
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/journey" className="text-dust-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <MapPin className="h-3 w-3" /> The Journey
                </Link>
              </li>
              <li>
                <Link href="/campfire" className="text-dust-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <Tent className="h-3 w-3" /> Campfire Tales
                </Link>
              </li>
              <li>
                <Link href="/devotions" className="text-dust-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <Fuel className="h-3 w-3" /> Fuel Stop
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-dust-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <Mail className="h-3 w-3" /> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Scripture */}
          <div>
            <h3 className="font-display text-lg text-earth-500 tracking-wider mb-4">
              ROAD VERSE
            </h3>
            <blockquote className="text-dust-300 text-sm italic border-l-2 border-earth-700 pl-4">
              &ldquo;Your word is a lamp for my feet, a light on my path.&rdquo;
              <footer className="text-dust-600 mt-2 not-italic font-mono text-xs">
                — Psalm 119:105
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-dust-600 text-xs font-mono tracking-wide">
              © {currentYear} RUNNING TO GOD MINISTRY
            </p>
            <div className="flex items-center gap-1 text-dust-600 text-xs">
              Made with <Heart className="h-3 w-3 text-campfire-500 mx-1 fill-current" /> 
              on the road from Perth to Port Lincoln
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
