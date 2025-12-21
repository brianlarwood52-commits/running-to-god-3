'use client'

import React from 'react'
import Link from 'next/link'
import { 
  Compass, 
  MapPin,
  Fuel,
  Tent,
  Star,
  Sun,
  Moon,
  ChevronDown,
  ArrowRight
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* HERO - Full screen road to horizon */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Sky gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-200 via-orange-300 to-earth-700 dark:from-night-900 dark:via-night-800 dark:to-night-950" />
        
        {/* Sun/Moon */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2">
          <div className="w-24 h-24 rounded-full bg-gradient-to-b from-yellow-200 to-orange-400 dark:from-gray-200 dark:to-gray-400 blur-sm opacity-80" />
        </div>
        
        {/* Stars (dark mode only) */}
        <div className="absolute inset-0 dark:block hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 50}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.8 + 0.2,
              }}
            />
          ))}
        </div>

        {/* Distant hills/horizon */}
        <div className="absolute bottom-[30%] left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none">
            <path 
              d="M0,60 Q360,20 720,50 T1440,40 L1440,120 L0,120 Z" 
              className="fill-earth-600 dark:fill-stone-800"
            />
          </svg>
        </div>
        
        {/* Red earth ground */}
        <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-earth-800 via-earth-700 to-earth-600 dark:from-stone-900 dark:via-stone-800 dark:to-stone-700" />
        
        {/* THE ROAD - Perspective */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xs">
          <svg viewBox="0 0 200 300" className="w-full">
            {/* Road surface */}
            <path 
              d="M60,300 L90,0 L110,0 L140,300 Z" 
              className="fill-road-700 dark:fill-road-800"
            />
            {/* Road edges */}
            <path d="M60,300 L90,0" className="stroke-dust-300 stroke-1 fill-none" />
            <path d="M140,300 L110,0" className="stroke-dust-300 stroke-1 fill-none" />
            {/* Center line markings */}
            <g className="road-animation">
              <rect x="98" y="20" width="4" height="25" className="fill-yellow-400" />
              <rect x="98" y="60" width="4" height="25" className="fill-yellow-400" />
              <rect x="98" y="100" width="4" height="25" className="fill-yellow-400" />
              <rect x="98" y="140" width="4" height="30" className="fill-yellow-400" />
              <rect x="97" y="185" width="6" height="35" className="fill-yellow-400" />
              <rect x="96" y="240" width="8" height="40" className="fill-yellow-400" />
            </g>
            {/* Cross at horizon */}
            <rect x="96" y="5" width="8" height="30" className="fill-white dark:fill-gray-300" rx="1" />
            <rect x="88" y="10" width="24" height="6" className="fill-white dark:fill-gray-300" rx="1" />
          </svg>
        </div>

        {/* Dust particles */}
        <div className="absolute bottom-[20%] left-[20%] w-3 h-3 bg-dust-300/40 rounded-full dust-particle" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-[25%] right-[25%] w-2 h-2 bg-dust-300/30 rounded-full dust-particle" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[15%] left-[40%] w-4 h-4 bg-dust-300/20 rounded-full dust-particle" style={{ animationDelay: '2s' }} />

        {/* Content overlay */}
        <div className="relative z-10 text-center px-4 mb-32">
          <p className="font-hand text-2xl md:text-3xl text-earth-900 dark:text-dust-200 mb-2 animate-fade-in">
            Perth → Nullarbor → Port Lincoln
          </p>
          
          <h1 className="font-display text-7xl md:text-9xl text-white drop-shadow-lg mb-4 animate-slide-up tracking-wider">
            RUNNING TO GOD
          </h1>
          
          <p className="text-xl md:text-2xl text-dust-100 dark:text-dust-300 max-w-2xl mx-auto mb-8 animate-fade-in font-light">
            2,500 km of red dirt, endless horizons, and starlit nights.
            <br />
            <span className="font-hand text-2xl md:text-3xl">A journey that changed everything.</span>
          </p>

          {/* KM counter */}
          <div className="inline-flex items-center gap-2 bg-road-700/80 backdrop-blur px-4 py-2 rounded mb-8">
            <span className="font-mono text-green-400 text-lg">KM</span>
            <span className="font-mono text-white text-2xl tracking-widest">0000</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link href="/journey" className="btn-adventure inline-flex items-center gap-2">
              <Compass className="h-5 w-5" />
              START THE JOURNEY
            </Link>
            <Link 
              href="/about" 
              className="px-6 py-3 border-2 border-white/50 text-white rounded font-bold uppercase tracking-wider hover:bg-white/10 transition-all"
            >
              THE STORY
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
          <ChevronDown className="h-8 w-8" />
        </div>
      </section>

      {/* ROAD SIGNS SECTION */}
      <section className="relative py-20 bg-earth-700 dark:bg-stone-900 overflow-hidden">
        {/* Texture overlay */}
        <div className="absolute inset-0 dust-texture" />
        
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl text-dust-100 mb-4 tracking-wide">
              THE ROAD AHEAD
            </h2>
            <p className="font-hand text-2xl text-dust-300">
              Every kilometre tells a story
            </p>
          </div>

          {/* Roadhouse-style cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* The Journey */}
            <Link href="/journey" className="group">
              <div className="roadhouse-sign p-6 text-center transform hover:-rotate-1 hover:scale-105 transition-all">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-400 rounded-full flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-earth-800" />
                </div>
                <h3 className="font-display text-3xl text-yellow-400 mb-2">THE JOURNEY</h3>
                <p className="text-dust-200 text-sm mb-4">
                  From the suburbs of Perth to the edge of the continent
                </p>
                <span className="font-mono text-xs text-dust-400">2,500 KM →</span>
              </div>
            </Link>

            {/* Roadhouse Stories */}
            <Link href="/campfire" className="group">
              <div className="roadhouse-sign p-6 text-center transform hover:rotate-1 hover:scale-105 transition-all">
                <div className="w-16 h-16 mx-auto mb-4 bg-campfire-500 rounded-full flex items-center justify-center campfire-glow">
                  <Tent className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display text-3xl text-campfire-400 mb-2">CAMPFIRE TALES</h3>
                <p className="text-dust-200 text-sm mb-4">
                  Stories from roadhouses, rest stops, and starlit nights
                </p>
                <span className="font-mono text-xs text-dust-400">GATHER &apos;ROUND →</span>
              </div>
            </Link>

            {/* Fuel for the Soul */}
            <Link href="/devotions" className="group">
              <div className="roadhouse-sign p-6 text-center transform hover:-rotate-1 hover:scale-105 transition-all">
                <div className="w-16 h-16 mx-auto mb-4 bg-bight-500 rounded-full flex items-center justify-center">
                  <Fuel className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display text-3xl text-bight-400 mb-2">FUEL STOP</h3>
                <p className="text-dust-200 text-sm mb-4">
                  Daily devotions to refuel your spirit on life&apos;s highway
                </p>
                <span className="font-mono text-xs text-dust-400">FILL UP →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* THE NULLARBOR - Dramatic section */}
      <section className="relative py-32 overflow-hidden">
        {/* Full width image-like gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-earth-600 via-dust-400 to-earth-600 dark:from-stone-800 dark:via-stone-700 dark:to-stone-800" />
        
        {/* Horizon line */}
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dust-600 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <p className="font-mono text-sm text-earth-800 dark:text-dust-400 tracking-widest mb-4">
            — NULLARBOR PLAIN —
          </p>
          <h2 className="font-display text-6xl md:text-8xl text-earth-900 dark:text-dust-100 mb-6 tracking-wide">
            1,200 KM OF NOTHING
          </h2>
          <p className="text-xl text-earth-800 dark:text-dust-300 max-w-2xl mx-auto mb-4">
            No trees. No towns. Just you, the road, and the endless horizon.
          </p>
          <p className="font-hand text-3xl text-earth-700 dark:text-dust-400">
            &ldquo;In the emptiness, I finally heard God&apos;s voice.&rdquo;
          </p>
        </div>
      </section>

      {/* GREAT AUSTRALIAN BIGHT */}
      <section className="relative py-24 bg-gradient-to-b from-bight-600 to-bight-800 dark:from-bight-900 dark:to-night-950 overflow-hidden">
        {/* Wave pattern */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
            <path 
              d="M0,50 Q360,100 720,50 T1440,50 L1440,100 L0,100 Z" 
              className="fill-bight-800 dark:fill-night-900 opacity-50"
            />
            <path 
              d="M0,70 Q360,30 720,70 T1440,70 L1440,100 L0,100 Z" 
              className="fill-bight-900 dark:fill-night-950"
            />
          </svg>
        </div>

        <div className="relative max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-mono text-xs text-bight-200 tracking-widest mb-2">KILOMETRE 1,847</p>
              <h2 className="font-display text-5xl md:text-6xl text-white mb-6 tracking-wide">
                THE GREAT AUSTRALIAN BIGHT
              </h2>
              <p className="text-lg text-bight-100 mb-6">
                Standing at the edge of the continent, watching 100-metre cliffs plunge into the Southern Ocean. 
                Whales breaching in the distance. The sheer scale of God&apos;s creation, overwhelming.
              </p>
              <p className="font-hand text-2xl text-bight-200">
                Sometimes you need to stand at the edge to find your center.
              </p>
            </div>
            
            {/* Cliff illustration */}
            <div className="relative h-64 md:h-80">
              <svg viewBox="0 0 300 200" className="w-full h-full">
                {/* Ocean */}
                <rect x="0" y="100" width="300" height="100" className="fill-bight-700" />
                {/* Cliff face */}
                <path d="M0,50 L50,45 L80,60 L120,40 L150,55 L180,35 L220,50 L260,40 L300,55 L300,100 L0,100 Z" className="fill-dust-400" />
                <path d="M0,55 L50,50 L80,65 L120,45 L150,60 L180,40 L220,55 L260,45 L300,60 L300,100 L0,100 Z" className="fill-earth-600" />
                {/* Waves */}
                <path d="M0,120 Q75,110 150,120 T300,120" className="fill-none stroke-bight-400 stroke-2" />
                <path d="M0,140 Q75,130 150,140 T300,140" className="fill-none stroke-bight-300 stroke-1" />
                {/* Whale spout */}
                <ellipse cx="220" cy="115" rx="8" ry="3" className="fill-bight-800" />
                <path d="M220,115 Q222,105 225,100 M220,115 Q218,105 215,100" className="fill-none stroke-white stroke-1" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* NIGHT CAMP SECTION */}
      <section className="relative py-24 bg-night-900 dark:bg-night-950 overflow-hidden">
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full star"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Milky Way suggestion */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent rotate-12" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            {/* Campfire icon */}
            <div className="inline-block relative">
              <div className="w-20 h-20 bg-gradient-to-t from-campfire-600 to-campfire-400 rounded-full blur-xl opacity-50 campfire-glow" />
              <Tent className="absolute inset-0 m-auto h-12 w-12 text-dust-300" />
            </div>
          </div>

          <p className="font-mono text-xs text-dust-500 tracking-widest mb-4">
            — SOMEWHERE ON THE NULLARBOR, 2AM —
          </p>
          
          <h2 className="font-display text-5xl md:text-7xl text-white mb-8 tracking-wide">
            UNDER A BILLION STARS
          </h2>
          
          <blockquote className="text-2xl md:text-3xl text-dust-300 italic mb-6 font-light">
            &ldquo;The heavens declare the glory of God; the skies proclaim the work of his hands.&rdquo;
          </blockquote>
          <cite className="text-dust-500 font-hand text-xl">— Psalm 19:1</cite>
          
          <div className="mt-12">
            <Link href="/campfire" className="inline-flex items-center gap-3 text-campfire-400 hover:text-campfire-300 transition-colors">
              <span className="font-display text-xl tracking-wider">JOIN US AROUND THE FIRE</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* JOURNEY STATS */}
      <section className="relative py-16 bg-stone-200 dark:bg-stone-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-display text-5xl md:text-6xl text-earth-700 dark:text-earth-500">2,547</p>
              <p className="font-mono text-xs text-stone-600 dark:text-stone-400 tracking-widest">KILOMETRES</p>
            </div>
            <div>
              <p className="font-display text-5xl md:text-6xl text-earth-700 dark:text-earth-500">14</p>
              <p className="font-mono text-xs text-stone-600 dark:text-stone-400 tracking-widest">DAYS</p>
            </div>
            <div>
              <p className="font-display text-5xl md:text-6xl text-earth-700 dark:text-earth-500">∞</p>
              <p className="font-mono text-xs text-stone-600 dark:text-stone-400 tracking-widest">STARS WITNESSED</p>
            </div>
            <div>
              <p className="font-display text-5xl md:text-6xl text-earth-700 dark:text-earth-500">1</p>
              <p className="font-mono text-xs text-stone-600 dark:text-stone-400 tracking-widest">LIFE CHANGED</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-20 bg-earth-800 dark:bg-stone-950 overflow-hidden">
        <div className="absolute inset-0 dust-texture opacity-50" />
        
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-6xl text-dust-100 mb-6 tracking-wide">
            READY TO HIT THE ROAD?
          </h2>
          <p className="text-xl text-dust-300 mb-8">
            Whether you&apos;re at a crossroads in life or just need a moment of peace, 
            the journey starts with a single step.
          </p>
          <Link href="/journey" className="btn-adventure inline-flex items-center gap-2 text-lg">
            <Compass className="h-6 w-6" />
            BEGIN YOUR JOURNEY
          </Link>
        </div>
      </section>
    </div>
  )
}
