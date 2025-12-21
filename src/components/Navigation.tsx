'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Home,
  Compass,
  BookOpen,
  Heart,
  Mail,
  Tent,
  Fuel
} from 'lucide-react'

const navLinks = [
  { href: '/', label: 'HOME', icon: Home },
  { href: '/journey', label: 'THE JOURNEY', icon: Compass },
  { href: '/campfire', label: 'CAMPFIRE', icon: Tent },
  { href: '/devotions', label: 'FUEL STOP', icon: Fuel },
  { href: '/about', label: 'THE STORY', icon: Heart },
  { href: '/contact', label: 'CONTACT', icon: Mail },
]

export default function Navigation() {
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
                    ${scrolled 
                      ? 'bg-earth-800/95 dark:bg-stone-900/95 shadow-xl py-2' 
                      : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Placeholder for actual logo */}
            <div className="w-10 h-10 bg-gradient-to-br from-earth-500 to-earth-700 rounded flex items-center justify-center transform group-hover:rotate-3 transition-transform">
              <Compass className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl text-white tracking-wider">
                RUNNING TO GOD
              </span>
              <span className="text-[10px] font-mono text-dust-400 tracking-widest hidden sm:block">
                PERTH → NULLARBOR → PORT LINCOLN
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-dust-200 hover:text-white hover:bg-white/10 
                         transition-all font-display text-sm tracking-wider rounded"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="relative p-2 rounded-full bg-earth-700/50 dark:bg-stone-800/50 
                       hover:bg-earth-600/50 dark:hover:bg-stone-700/50 transition-all
                       border border-dust-600/30"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              <div className="relative w-5 h-5">
                <Sun 
                  className={`h-5 w-5 text-yellow-400 absolute inset-0 transition-all duration-300
                            ${theme === 'light' ? 'rotate-0 opacity-100 scale-100' : 'rotate-90 opacity-0 scale-75'}`}
                />
                <Moon 
                  className={`h-5 w-5 text-blue-300 absolute inset-0 transition-all duration-300
                            ${theme === 'dark' ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-75'}`}
                />
              </div>
            </button>

            {/* Kilometre Display */}
            <div className="hidden sm:flex items-center gap-1 bg-stone-900/50 px-2 py-1 rounded font-mono text-xs">
              <span className="text-green-400">KM</span>
              <span className="text-white tracking-widest">2547</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden transition-all duration-300 overflow-hidden
                   ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 py-4 bg-earth-800/98 dark:bg-stone-900/98 backdrop-blur-md 
                       border-t border-dust-700/30 mt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg
                       text-dust-200 hover:text-white hover:bg-white/10
                       transition-colors font-display tracking-wider"
            >
              <link.icon className="h-5 w-5 text-earth-500" />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
