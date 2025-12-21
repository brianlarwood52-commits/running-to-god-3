'use client'

import React from 'react'
import Link from 'next/link'
import { Mountain, Compass, Heart, BookOpen, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dust-100 dark:bg-night-900 border-t border-dust-200 dark:border-night-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Mountain className="h-8 w-8 text-ochre-600 dark:text-campfire-500" />
                <Compass className="h-4 w-4 text-sage-600 dark:text-starlight-400 absolute -bottom-1 -right-1" />
              </div>
              <span className="font-display text-xl font-bold text-dust-900 dark:text-night-100">
                Running to God
              </span>
            </div>
            <p className="text-dust-600 dark:text-night-400 text-sm max-w-xs">
              A journey of faith through the Australian outback. Finding God on dusty roads 
              and under starlit skies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-dust-900 dark:text-night-100">
              Explore
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/journey" 
                  className="text-dust-600 dark:text-night-400 hover:text-ochre-600 dark:hover:text-campfire-400 transition-colors text-sm flex items-center gap-2"
                >
                  <Compass className="h-4 w-4" />
                  The Journey
                </Link>
              </li>
              <li>
                <Link 
                  href="/devotions" 
                  className="text-dust-600 dark:text-night-400 hover:text-ochre-600 dark:hover:text-campfire-400 transition-colors text-sm flex items-center gap-2"
                >
                  <BookOpen className="h-4 w-4" />
                  Daily Devotions
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-dust-600 dark:text-night-400 hover:text-ochre-600 dark:hover:text-campfire-400 transition-colors text-sm flex items-center gap-2"
                >
                  <Heart className="h-4 w-4" />
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-dust-600 dark:text-night-400 hover:text-ochre-600 dark:hover:text-campfire-400 transition-colors text-sm flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Scripture */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-dust-900 dark:text-night-100">
              Daily Inspiration
            </h3>
            <blockquote className="scripture text-sm border-l-2 border-ochre-400 dark:border-campfire-500 pl-4">
              &ldquo;Your word is a lamp for my feet, a light on my path.&rdquo;
              <footer className="text-dust-500 dark:text-night-500 mt-1 not-italic">
                — Psalm 119:105
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dust-200 dark:border-night-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-dust-500 dark:text-night-500 text-sm">
              © {currentYear} Running to God Ministry. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-dust-500 dark:text-night-500 text-sm">
              Made with <Heart className="h-4 w-4 text-ochre-500 dark:text-campfire-500 mx-1" /> 
              from Perth to Port Lincoln
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
