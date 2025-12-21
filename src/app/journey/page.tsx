'use client'

import React from 'react'
import Link from 'next/link'
import { MapPin, Fuel, Camera, Coffee, Tent, Waves, ArrowRight, Compass } from 'lucide-react'

const journeyStops = [
  {
    km: 0,
    location: 'Perth, Western Australia',
    description: 'Packed the car at dawn. Said goodbye to the familiar. The Great Eastern Highway stretched out ahead, promising adventure and uncertainty in equal measure.',
    icon: MapPin,
    type: 'start',
    verse: '"For I know the plans I have for you," declares the Lord.',
    verseRef: 'Jeremiah 29:11',
  },
  {
    km: 187,
    location: 'Merredin',
    description: 'First fuel stop. The wheat belt stretches endlessly. A friendly farmer shares stories over a meat pie at the servo.',
    icon: Fuel,
    type: 'town',
  },
  {
    km: 590,
    location: 'Norseman',
    description: 'Gateway to the Nullarbor. The last significant town before the crossing. Topped up everything—fuel, water, courage.',
    icon: Fuel,
    type: 'town',
    verse: 'The Lord himself goes before you and will be with you.',
    verseRef: 'Deuteronomy 31:8',
  },
  {
    km: 720,
    location: 'Balladonia Roadhouse',
    description: 'Famous for the Skylab debris. First night camping under stars so bright they cast shadows. Silence so profound it felt sacred.',
    icon: Tent,
    type: 'camp',
  },
  {
    km: 920,
    location: 'Caiguna',
    description: 'Start of the 90 Mile Straight—the longest straight stretch of road in Australia. 146.6km without a single turn. Just you and the horizon.',
    icon: Camera,
    type: 'landmark',
  },
  {
    km: 1200,
    location: 'Nullarbor Roadhouse',
    description: 'The heart of nowhere. Met a grey nomad couple who\'d been on the road for three years. "You\'re not running from something," they said. "You\'re running to something."',
    icon: Coffee,
    type: 'town',
    verse: 'Be still and know that I am God.',
    verseRef: 'Psalm 46:10',
  },
  {
    km: 1450,
    location: 'Bunda Cliffs Lookout',
    description: 'The Great Australian Bight. 100-metre cliffs plunging into the Southern Ocean. Watched whales breach in the distance. Wept at the beauty of it all.',
    icon: Waves,
    type: 'landmark',
    verse: 'The heavens declare the glory of God.',
    verseRef: 'Psalm 19:1',
  },
  {
    km: 1650,
    location: 'Border Village',
    description: 'Crossed into South Australia. New state, new timezone, felt like a new life. Changed the clock, and somehow, changed my perspective too.',
    icon: MapPin,
    type: 'landmark',
  },
  {
    km: 1900,
    location: 'Ceduna',
    description: 'End of the Nullarbor. Civilisation returns. A real shower, a real bed, but somehow I missed the stars already.',
    icon: Coffee,
    type: 'town',
  },
  {
    km: 2547,
    location: 'Port Lincoln',
    description: 'Journey\'s end. But really, a new beginning. Found not just a destination, but a purpose. Found not just rest, but a reason to keep going.',
    icon: MapPin,
    type: 'end',
    verse: 'He who began a good work in you will carry it on to completion.',
    verseRef: 'Philippians 1:6',
  },
]

export default function JourneyPage() {
  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-950">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-b from-earth-700 via-earth-800 to-stone-900 overflow-hidden">
        {/* Road illustration */}
        <div className="absolute inset-0 flex items-end justify-center opacity-20">
          <div className="w-20 h-full bg-road-700" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="font-mono text-xs text-dust-400 tracking-widest mb-4">
            2,547 KILOMETRES • 14 DAYS • 1 JOURNEY
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-white mb-6 tracking-wider">
            THE ROAD MAP
          </h1>
          <p className="text-xl text-dust-300 max-w-2xl mx-auto font-light">
            Every kilometre marker tells a story. Every roadhouse holds a lesson. 
            This is the journey from Perth to Port Lincoln.
          </p>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-stone-100 dark:bg-stone-950">
        <div className="max-w-4xl mx-auto px-4">
          {/* The Road */}
          <div className="relative">
            {/* Vertical road line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-2 bg-road-600 dark:bg-road-700 rounded-full" />
            <div className="absolute left-7 md:left-9 top-0 bottom-0 w-0.5 bg-yellow-400 road-marking" 
                 style={{ backgroundSize: '4px 40px' }} />
            
            <div className="space-y-8">
              {journeyStops.map((stop, index) => (
                <div key={index} className="relative flex gap-6 md:gap-8">
                  {/* Kilometre marker */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-14 md:w-16 h-14 md:h-16 rounded-lg flex flex-col items-center justify-center
                                  ${stop.type === 'start' ? 'bg-green-600' :
                                    stop.type === 'end' ? 'bg-earth-600' :
                                    stop.type === 'landmark' ? 'bg-bight-600' :
                                    stop.type === 'camp' ? 'bg-campfire-600' :
                                    'bg-stone-600'}`}>
                      <stop.icon className="h-5 w-5 text-white" />
                      <span className="font-mono text-[10px] text-white/80 mt-0.5">
                        {stop.km}km
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="adventure-card p-6">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-display text-2xl md:text-3xl text-earth-700 dark:text-earth-500 tracking-wide">
                            {stop.location.toUpperCase()}
                          </h3>
                          <p className="font-mono text-xs text-stone-500 dark:text-stone-500">
                            KM {stop.km.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-stone-600 dark:text-stone-400 mt-3">
                        {stop.description}
                      </p>
                      
                      {stop.verse && (
                        <blockquote className="mt-4 pl-4 border-l-2 border-earth-500 italic text-stone-500 dark:text-stone-400 text-sm">
                          &ldquo;{stop.verse}&rdquo;
                          <footer className="mt-1 not-italic font-mono text-xs text-earth-600">
                            — {stop.verseRef}
                          </footer>
                        </blockquote>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-earth-800 dark:bg-stone-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl text-dust-100 mb-4 tracking-wide">
            CONTINUE THE JOURNEY
          </h2>
          <p className="text-dust-400 mb-8 max-w-xl mx-auto">
            Each stop has deeper stories to tell. Gather &apos;round the campfire and hear what the road taught me.
          </p>
          <Link href="/campfire" className="btn-adventure inline-flex items-center gap-2">
            <Tent className="h-5 w-5" />
            CAMPFIRE TALES
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
