'use client'

import React from 'react'
import Link from 'next/link'
import { MapPin, Fuel, Camera, Tent, Waves, ArrowRight, TreePine, Anchor } from 'lucide-react'

const journeyStops = [
  {
    km: 0,
    location: 'Perth',
    region: 'Western Australia',
    description: 'Packed the car at dawn. The road stretched out ahead—nearly 7,000 kilometres of unknown waiting. Left behind the familiar. Drove towards... something.',
    type: 'start',
    coordinates: '31.9°S 115.9°E',
  },
  {
    km: 720,
    location: 'Esperance',
    region: 'South Coast, WA',
    description: 'White sand beaches that look like they belong in the Caribbean. Lucky Bay, where kangaroos laze on the sand. A reminder that beauty often hides in unexpected places.',
    type: 'landmark',
    coordinates: '33.9°S 121.9°E',
    quote: '"The earth is the Lord\'s, and everything in it."',
    quoteRef: 'Psalm 24:1',
  },
  {
    km: 890,
    location: 'Israelite Bay',
    region: 'The Edge of Nowhere',
    description: 'The road turned to dirt. Then to sand. Then to almost nothing. An abandoned telegraph station. Complete isolation. The kind of place where you have no choice but to stop and listen.',
    type: 'landmark',
    coordinates: '33.6°S 123.9°E',
  },
  {
    km: 1100,
    location: 'Norseman',
    region: 'Gateway to the Nullarbor',
    description: 'Last real town before the crossing. Filled the tank, checked the tyres, bought enough water for a small army. The servo owner asked where I was headed. "East," I said. He just nodded.',
    type: 'town',
    coordinates: '32.2°S 121.8°E',
  },
  {
    km: 1500,
    location: 'Caiguna',
    region: 'Start of the 90 Mile Straight',
    description: '146.6 kilometres without a single turn. The longest straight road in Australia. Somewhere around kilometre 50, the road stopped feeling like a road and started feeling like a meditation.',
    type: 'landmark',
    coordinates: '32.3°S 125.5°E',
  },
  {
    km: 1800,
    location: 'Nullarbor Roadhouse',
    region: 'The Heart of Nowhere',
    description: 'Met a grey nomad couple who\'d been on the road for three years. "You\'re not running from something," the old man said. "You\'re running to something. I can see it in your eyes."',
    type: 'town',
    coordinates: '31.4°S 130.9°E',
    quote: '"Be still and know that I am God."',
    quoteRef: 'Psalm 46:10',
  },
  {
    km: 2050,
    location: 'Bunda Cliffs',
    region: 'Great Australian Bight',
    description: 'Stood at the edge of the continent. 100-metre cliffs dropping straight into the Southern Ocean. Watched whales breach in the distance. Wept. Couldn\'t tell you why.',
    type: 'landmark',
    coordinates: '31.0°S 129.0°E',
    quote: '"The heavens declare the glory of God."',
    quoteRef: 'Psalm 19:1',
  },
  {
    km: 2300,
    location: 'Border Village',
    region: 'SA/WA Border',
    description: 'Crossed into South Australia. Changed the clock forward 2.5 hours. Somehow felt like I\'d crossed more than just a timezone.',
    type: 'border',
    coordinates: '31.0°S 129.0°E',
  },
  {
    km: 2650,
    location: 'Ceduna',
    region: 'South Australia',
    description: 'End of the Nullarbor. Civilisation returns. A real shower, a real bed. But somehow I missed the silence already.',
    type: 'town',
    coordinates: '32.1°S 133.7°E',
  },
  {
    km: 3430,
    location: 'Port Lincoln',
    region: 'Eyre Peninsula, SA',
    description: 'The turnaround point. Parked the car, walked to the water, sat down. Didn\'t move for an hour. Somewhere on that road, I\'d found what I was looking for.',
    type: 'destination',
    coordinates: '34.7°S 135.9°E',
    quote: '"He who began a good work in you will carry it on to completion."',
    quoteRef: 'Philippians 1:6',
  },
  {
    km: 6859,
    location: 'Perth',
    region: 'Home',
    description: 'Back where I started. But not the same person who left. 6,859.5 kilometres later, the road had done its work. The journey was over. The transformation was just beginning.',
    type: 'end',
    coordinates: '31.9°S 115.9°E',
  },
]

export default function JourneyPage() {
  return (
    <div className="min-h-screen bg-stone-950">
      
      {/* ===== HERO - Cinematic Opening ===== */}
      <section className="relative h-[70vh] flex items-end vignette film-grain">
        {/* Background gradient - sunset over road */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-600 via-earth-700 to-stone-950" />
        
        {/* Horizon */}
        <div className="absolute top-[40%] left-0 right-0 h-px bg-earth-500/30" />
        
        {/* Road */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[60%] bg-gradient-to-t from-stone-800 to-transparent opacity-50" />
        
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 w-full">
          <p className="location-tag mb-4">PERTH → ESPERANCE → NULLARBOR → PORT LINCOLN → PERTH</p>
          <h1 className="font-cinematic text-6xl md:text-8xl text-dust-100 tracking-wider title-card mb-4">
            THE ROAD
          </h1>
          <p className="text-xl text-dust-300 font-serif max-w-2xl">
            6,859.5 kilometres. Round trip. Every stop along the way taught me something 
            I didn&apos;t know I needed to learn.
          </p>
        </div>
      </section>

      {/* ===== JOURNEY MAP/TIMELINE ===== */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Route overview */}
          <div className="mb-20 text-center">
            <p className="font-mono text-xs text-earth-500 tracking-widest mb-8">THE ROUTE</p>
            <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap text-sm">
              <span className="font-cinematic text-xl text-dust-300">PERTH</span>
              <span className="text-earth-600">→</span>
              <span className="font-mono text-xs text-dust-500">ESPERANCE</span>
              <span className="text-earth-600">→</span>
              <span className="font-mono text-xs text-dust-500">ISRAELITE BAY</span>
              <span className="text-earth-600">→</span>
              <span className="font-mono text-xs text-dust-500">NULLARBOR</span>
              <span className="text-earth-600">→</span>
              <span className="font-mono text-xs text-dust-500">PORT LINCOLN</span>
              <span className="text-earth-600">→</span>
              <span className="font-cinematic text-xl text-dust-300">PERTH</span>
            </div>
            <p className="font-mono text-xs text-earth-600 mt-4">6,859.5 KM ROUND TRIP</p>
          </div>

          {/* Journey entries */}
          <div className="space-y-16">
            {journeyStops.map((stop, index) => (
              <article key={index} className="relative">
                {/* Connecting line */}
                {index < journeyStops.length - 1 && (
                  <div className="absolute left-6 top-20 bottom-0 w-px bg-gradient-to-b from-earth-600 to-transparent" 
                       style={{ height: 'calc(100% + 4rem)' }} />
                )}
                
                <div className="flex gap-8">
                  {/* Kilometre marker */}
                  <div className="flex-shrink-0 w-12">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center
                                  ${stop.type === 'start' ? 'bg-green-600' :
                                    stop.type === 'end' ? 'bg-green-600' :
                                    stop.type === 'destination' ? 'bg-earth-500' :
                                    stop.type === 'landmark' ? 'bg-bight-600' :
                                    'bg-stone-700'} 
                                  border-2 border-stone-900`}>
                      {stop.type === 'start' && <MapPin className="h-5 w-5 text-white" />}
                      {stop.type === 'end' && <MapPin className="h-5 w-5 text-white" />}
                      {stop.type === 'destination' && <Anchor className="h-5 w-5 text-white" />}
                      {stop.type === 'landmark' && <Camera className="h-5 w-5 text-white" />}
                      {stop.type === 'town' && <Fuel className="h-5 w-5 text-white" />}
                      {stop.type === 'border' && <MapPin className="h-5 w-5 text-white" />}
                    </div>
                    <p className="font-mono text-xs text-dust-600 text-center mt-2">
                      {stop.km.toLocaleString()}
                    </p>
                    <p className="font-mono text-[10px] text-dust-700 text-center">KM</p>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="bg-stone-900/50 border border-stone-800 rounded-lg p-6 md:p-8">
                      {/* Location header */}
                      <div className="mb-4">
                        <p className="font-mono text-xs text-earth-500 tracking-widest mb-1">
                          {stop.coordinates}
                        </p>
                        <h2 className="font-cinematic text-3xl md:text-4xl text-dust-100 tracking-wider">
                          {stop.location.toUpperCase()}
                        </h2>
                        <p className="font-mono text-sm text-dust-500 tracking-wide">
                          {stop.region}
                        </p>
                      </div>
                      
                      {/* Description */}
                      <p className="text-dust-300 font-serif text-lg leading-relaxed">
                        {stop.description}
                      </p>
                      
                      {/* Quote if exists */}
                      {stop.quote && (
                        <blockquote className="mt-6 pl-4 border-l-2 border-earth-600">
                          <p className="font-serif italic text-dust-400">
                            {stop.quote}
                          </p>
                          <cite className="font-mono text-xs text-earth-600 mt-2 block">
                            — {stop.quoteRef}
                          </cite>
                        </blockquote>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-mono text-xs text-earth-500 tracking-widest mb-4">CONTINUE</p>
          <h2 className="font-cinematic text-4xl md:text-5xl text-dust-100 tracking-wider mb-6">
            GATHER AROUND THE FIRE
          </h2>
          <p className="text-dust-400 font-serif text-lg mb-8 max-w-xl mx-auto">
            The road had many stories. Some were told at roadhouses. 
            Others came out under the stars.
          </p>
          <Link href="/campfire" className="btn-expedition inline-flex items-center gap-3">
            <Tent className="h-5 w-5" />
            CAMPFIRE TALES
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
