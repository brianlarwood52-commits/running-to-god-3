'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Mountain, 
  Compass,
  BookOpen,
  Heart,
  Mail
} from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home', icon: Mountain },
  { href: '/journey', label: 'The Journey', icon: Compass },
  { href: '/devotions', label: 'Devotions', icon: BookOpen },
  { href: '/about', label: 'About', icon: Heart },
  { href: '/contact', label: 'Contact', icon: Mail },
]

export default function Navigation() {
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dust-50/90 dark:bg-night-950/90 backdrop-blur-md border-b border-dust-200 dark:border-night-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Mountain className="h-8 w-8 text-ochre-600 dark:text-campfire-500 transition-transform group-hover:scale-110" />
              <Compass className="h-4 w-4 text-sage-600 dark:text-starlight-400 absolute -bottom-1 -right-1" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold text-dust-900 dark:text-night-100">
                Running to God
              </span>
              <span className="text-xs text-dust-600 dark:text-night-400 -mt-1 hidden sm:block">
                A Journey Through the Outback
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-dust-700 hover:text-ochre-600 dark:text-night-300 dark:hover:text-campfire-400 
                         transition-colors font-medium flex items-center gap-1.5"
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="relative p-2 rounded-full bg-dust-200 dark:bg-night-800 
                       hover:bg-dust-300 dark:hover:bg-night-700 transition-all
                       group overflow-hidden"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              <div className="relative w-6 h-6">
                {/* Sun Icon */}
                <Sun 
                  className={`h-6 w-6 text-ochre-500 absolute inset-0 transition-all duration-300
                            ${theme === 'light' ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}`}
                />
                {/* Moon Icon */}
                <Moon 
                  className={`h-6 w-6 text-campfire-400 absolute inset-0 transition-all duration-300
                            ${theme === 'dark' ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}
                />
              </div>
              
              {/* Tooltip */}
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs 
                             bg-dust-900 dark:bg-night-100 text-white dark:text-night-900 
                             px-2 py-1 rounded opacity-0 group-hover:opacity-100 
                             transition-opacity whitespace-nowrap pointer-events-none">
                {theme === 'light' ? 'Night Mode' : 'Day Mode'}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-dust-200 dark:hover:bg-night-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-dust-700 dark:text-night-300" />
              ) : (
                <Menu className="h-6 w-6 text-dust-700 dark:text-night-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 overflow-hidden
                   ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 py-4 space-y-2 bg-dust-100 dark:bg-night-900 border-t border-dust-200 dark:border-night-800">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg
                       text-dust-700 hover:text-ochre-600 hover:bg-dust-200
                       dark:text-night-300 dark:hover:text-campfire-400 dark:hover:bg-night-800
                       transition-colors font-medium"
            >
              <link.icon className="h-5 w-5" />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
