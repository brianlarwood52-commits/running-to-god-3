'use client'

import React from 'react'
import Link from 'next/link'
import { MapPin, Fuel, Camera, Tent, Waves, ArrowRight, Anchor, RotateCcw, Coffee, Mountain, Shell, TreePine } from 'lucide-react'

const journeyStops = [
  // ===== OUTBOUND =====
  {
    km: 0,
    location: 'Swan View',
    region: 'Perth, Western Australia',
    description: 'Packed the car at dawn. The road stretched out ahead—thousands of kilometres of unknown waiting. Left behind the familiar. Drove towards... something.',
    type: 'start',
    coordinates: '31.9°S 116.0°E',
    leg: 'outbound',
  },
  {
    km: 85,
    location: 'Toodyay',
    region: 'Avon Valley',
    description: 'Historic town nestled in the Avon Valley. The first taste of country WA. Rolling hills and heritage buildings.',
    type: 'town',
    coordinates: '31.6°S 116.5°E',
    leg: 'outbound',
  },
  {
    km: 155,
    location: 'Dowerin',
    region: 'Wheatbelt',
    description: 'Deep into wheat country now. Golden paddocks stretching to the horizon. The landscape starting to open up.',
    type: 'town',
    coordinates: '31.2°S 117.0°E',
    leg: 'outbound',
  },
  {
    km: 215,
    location: 'Koorda',
    region: 'Wheatbelt',
    description: 'Small farming community. The kind of place where everyone waves as you drive past.',
    type: 'town',
    coordinates: '30.8°S 117.5°E',
    leg: 'outbound',
  },
  {
    km: 270,
    location: 'Bencubbin',
    region: 'Wheatbelt',
    description: 'Grain silos towering over the main street. This is the heart of WA\'s wheat belt.',
    type: 'town',
    coordinates: '30.8°S 117.9°E',
    leg: 'outbound',
  },
  {
    km: 340,
    location: 'Mukinbudin',
    region: 'Wheatbelt',
    description: 'The edge of the wheatbelt. Beyond here, the landscape starts to change. Getting further from everything familiar.',
    type: 'town',
    coordinates: '30.9°S 118.2°E',
    leg: 'outbound',
  },
  {
    km: 420,
    location: 'Boondi Rock',
    region: 'Outback WA',
    description: 'Ancient granite outcrop rising from the red earth. A sacred place. Stopped here to stretch the legs and feel the silence.',
    type: 'landmark',
    coordinates: '31.2°S 119.1°E',
    leg: 'outbound',
  },
  {
    km: 560,
    location: 'Coolgardie',
    region: 'Goldfields',
    description: 'Ghost of the gold rush. Once home to 15,000 people chasing dreams. Now a quiet reminder that nothing lasts forever.',
    type: 'town',
    coordinates: '31.2°S 121.2°E',
    leg: 'outbound',
  },
  {
    km: 720,
    location: 'Norseman',
    region: 'Gateway to the Nullarbor',
    description: 'Last real town before the crossing. Filled the tank, checked the tyres, bought enough water for a small army. The servo owner asked where I was headed. "East," I said. He just nodded.',
    type: 'town',
    coordinates: '32.2°S 121.8°E',
    leg: 'outbound',
    quote: '"The Lord himself goes before you and will be with you."',
    quoteRef: 'Deuteronomy 31:8',
  },
  {
    km: 930,
    location: 'Caiguna Roadhouse',
    region: 'Start of the 90 Mile Straight',
    description: '146.6 kilometres without a single turn coming up. The longest straight road in Australia. Fuel, coffee, deep breath.',
    type: 'roadhouse',
    coordinates: '32.3°S 125.5°E',
    leg: 'outbound',
  },
  {
    km: 1090,
    location: 'Madura Roadhouse',
    region: 'Nullarbor',
    description: 'Perched on the edge of the Madura Pass. The views here are something else. The endless plain stretching out below.',
    type: 'roadhouse',
    coordinates: '31.9°S 127.0°E',
    leg: 'outbound',
  },
  {
    km: 1180,
    location: 'Eucla',
    region: 'Nullarbor',
    description: 'Old telegraph station slowly being swallowed by sand dunes. Time moves differently out here.',
    type: 'landmark',
    coordinates: '31.7°S 128.9°E',
    leg: 'outbound',
  },
  {
    km: 1200,
    location: 'Border Village',
    region: 'WA/SA Border',
    description: 'Crossed into South Australia. Changed the clock forward. Somehow felt like more than just a timezone change.',
    type: 'border',
    coordinates: '31.0°S 129.0°E',
    leg: 'outbound',
  },
  {
    km: 1400,
    location: 'Nullarbor Roadhouse',
    region: 'The Heart of Nowhere',
    description: 'Met a grey nomad couple who\'d been on the road for three years. "You\'re not running from something," the old man said. "You\'re running to something. I can see it in your eyes."',
    type: 'roadhouse',
    coordinates: '31.4°S 130.9°E',
    leg: 'outbound',
    quote: '"Be still and know that I am God."',
    quoteRef: 'Psalm 46:10',
  },
  {
    km: 1500,
    location: 'Mexican Hat',
    region: 'Bunda Cliffs Lookout',
    description: 'Named for the rock formation that looks like a sombrero. But the real attraction is the view—100-metre cliffs plunging into the Southern Ocean. Watched whales breach in the distance. Wept.',
    type: 'landmark',
    coordinates: '31.0°S 129.5°E',
    leg: 'outbound',
    quote: '"The heavens declare the glory of God."',
    quoteRef: 'Psalm 19:1',
  },
  {
    km: 2100,
    location: 'Ceduna',
    region: 'South Australia',
    description: 'End of the Nullarbor. Civilisation returns. A real shower, a real bed. But somehow I missed the silence already.',
    type: 'town',
    coordinates: '32.1°S 133.7°E',
    leg: 'outbound',
  },
  {
    km: 3430,
    location: 'Port Lincoln',
    region: 'Eyre Peninsula, SA',
    description: 'The turnaround point. Parked the car, walked to the water, sat down. Didn\'t move for an hour. Somewhere on that road, I\'d found what I was looking for. Or maybe it found me.',
    type: 'destination',
    coordinates: '34.7°S 135.9°E',
    leg: 'turnaround',
    quote: '"He who began a good work in you will carry it on to completion."',
    quoteRef: 'Philippians 1:6',
  },

  // ===== RETURN LEG =====
  {
    km: 3450,
    location: 'Coffin Bay',
    region: 'Eyre Peninsula',
    description: 'Famous for its oysters. Peaceful waters and rugged coastline. A quiet start to the journey home.',
    type: 'landmark',
    coordinates: '34.6°S 135.5°E',
    leg: 'return',
  },
  {
    km: 3500,
    location: 'Colton Bakehouse',
    region: 'The Biggest Temptation',
    description: 'The pies. The pastries. The smell of fresh bread. Nearly didn\'t leave. Some temptations are worth giving in to.',
    type: 'highlight',
    coordinates: '34.3°S 135.4°E',
    leg: 'return',
  },
  {
    km: 3580,
    location: 'Talia Caves',
    region: 'Eyre Peninsula',
    description: 'Sea caves carved by millennia of waves. The power of water against rock. The slow work of time.',
    type: 'landmark',
    coordinates: '33.9°S 134.8°E',
    leg: 'return',
  },
  {
    km: 3650,
    location: 'Venus Bay',
    region: 'Eyre Peninsula',
    description: 'Pristine beaches, crystal clear water. Named by Matthew Flinders. Felt like discovering something ancient.',
    type: 'landmark',
    coordinates: '33.2°S 134.7°E',
    leg: 'return',
  },
  {
    km: 3850,
    location: 'Penong',
    region: 'Eyre Highway',
    description: 'Windmill museum town. The gateway to some of Australia\'s best surf beaches.',
    type: 'town',
    coordinates: '31.3°S 132.9°E',
    leg: 'return',
  },
  {
    km: 3880,
    location: 'Cactus Beach',
    region: 'Point Sinclair',
    description: 'World-famous surf break. Even if you don\'t surf, the raw power of those waves is humbling.',
    type: 'landmark',
    coordinates: '31.5°S 132.5°E',
    leg: 'return',
  },
  {
    km: 3900,
    location: 'Point Sinclair',
    region: 'Great Australian Bight',
    description: 'Remote headland jutting into the Southern Ocean. The kind of place that makes you feel very small and very alive.',
    type: 'landmark',
    coordinates: '31.5°S 132.4°E',
    leg: 'return',
  },
  {
    km: 3920,
    location: 'Port Le Hunte Jetty',
    region: 'Historic Jetty',
    description: 'Old timber jetty reaching out into the bay. Sunset here was something else. Sat on the edge with feet dangling, watching the light fade.',
    type: 'landmark',
    coordinates: '31.5°S 132.4°E',
    leg: 'return',
  },
  {
    km: 5500,
    location: 'Norseman',
    region: 'Back in WA',
    description: 'Back at the gateway. But this time, instead of heading straight home, turned south. There was more to see.',
    type: 'town',
    coordinates: '32.2°S 121.8°E',
    leg: 'return',
  },
  {
    km: 5700,
    location: 'Esperance',
    region: 'South Coast, WA',
    description: 'White sand beaches that look like they belong in the Caribbean. Lucky Bay, where kangaroos laze on the sand. A reminder that beauty often hides in unexpected places.',
    type: 'landmark',
    coordinates: '33.9°S 121.9°E',
    leg: 'return',
    quote: '"The earth is the Lord\'s, and everything in it."',
    quoteRef: 'Psalm 24:1',
  },
  {
    km: 5750,
    location: 'Pink Lake',
    region: 'Esperance',
    description: 'A lake that glows pink. Something about algae and salt, but the science doesn\'t capture the magic of it.',
    type: 'landmark',
    coordinates: '33.8°S 121.8°E',
    leg: 'return',
  },
  {
    km: 5970,
    location: 'Israelite Bay',
    region: 'The Edge of Nowhere',
    description: 'The road turned to dirt. Then to sand. Then to almost nothing. An abandoned telegraph station. Complete isolation. Out here, at the edge of everything, the journey finally made sense.',
    type: 'landmark',
    coordinates: '33.6°S 123.9°E',
    leg: 'return',
  },
  {
    km: 6859,
    location: 'Swan View',
    region: 'Perth, Western Australia',
    description: 'Back where I started. But not the same person who left. 6,859.5 kilometres later, the road had done its work. The journey was over. The transformation was just beginning.',
    type: 'end',
    coordinates: '31.9°S 116.0°E',
    leg: 'return',
  },
]

export default function JourneyPage() {
  return (
    <div className="min-h-screen bg-stone-950">
      
      {/* ===== HERO ===== */}
      <section className="relative h-[70vh] flex items-end vignette film-grain">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-600 via-earth-700 to-stone-950" />
        <div className="absolute top-[40%] left-0 right-0 h-px bg-earth-500/30" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[60%] bg-gradient-to-t from-stone-800 to-transparent opacity-50" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 w-full">
          <p className="location-tag mb-4">A ROUND TRIP ACROSS THE AUSTRALIAN OUTBACK</p>
          <h1 className="font-cinematic text-6xl md:text-8xl text-dust-100 tracking-wider title-card mb-4">
            THE ROAD
          </h1>
          <p className="text-xl text-dust-300 font-serif max-w-2xl">
            6,859.5 kilometres. {journeyStops.length} stops. Out across the Nullarbor to Port Lincoln, 
            and back via the Eyre Peninsula, Esperance and Israelite Bay.
          </p>
        </div>
      </section>

      {/* ===== ROUTE OVERVIEW ===== */}
      <section className="py-12 bg-stone-900/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Outbound */}
            <div className="bg-stone-900 border border-stone-800 rounded-lg p-6">
              <p className="font-mono text-xs text-green-500 tracking-widest mb-3">→ OUTBOUND</p>
              <p className="text-dust-400 text-sm leading-relaxed">
                Swan View → Toodyay → Dowerin → Koorda → Bencubbin → Mukinbudin → 
                Boondi Rock → Coolgardie → Norseman → Caiguna → Madura → Eucla → 
                Border Village → Nullarbor → Mexican Hat → Ceduna → <span className="text-earth-400">Port Lincoln</span>
              </p>
            </div>
            
            {/* Return */}
            <div className="bg-stone-900 border border-blue-900/30 rounded-lg p-6">
              <p className="font-mono text-xs text-blue-400 tracking-widest mb-3">← RETURN (VIA COAST)</p>
              <p className="text-dust-400 text-sm leading-relaxed">
                <span className="text-earth-400">Port Lincoln</span> → Coffin Bay → Colton Bakehouse → Talia Caves → 
                Venus Bay → Penong → Cactus Beach → Point Sinclair → Port Le Hunte → 
                Norseman → <span className="text-bight-400">Esperance</span> → Pink Lake → 
                <span className="text-bight-400">Israelite Bay</span> → Swan View
              </p>
            </div>
          </div>
          <p className="font-mono text-xs text-earth-600 mt-6 text-center">6,859.5 KM TOTAL • {journeyStops.length} STOPS</p>
        </div>
      </section>

      {/* ===== JOURNEY TIMELINE ===== */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {journeyStops.map((stop, index) => (
              <article key={index} className="relative">
                {/* Leg dividers */}
                {(index === 0 || journeyStops[index - 1]?.leg !== stop.leg) && (
                  <div className="mb-8 flex items-center gap-3">
                    {stop.leg === 'outbound' && index === 0 && (
                      <>
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-green-600/50" />
                        <span className="font-mono text-xs text-green-500 tracking-widest">HEADING EAST →</span>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-green-600/50" />
                      </>
                    )}
                    {stop.leg === 'turnaround' && (
                      <>
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-earth-500/50" />
                        <RotateCcw className="h-4 w-4 text-earth-500" />
                        <span className="font-mono text-xs text-earth-500 tracking-widest">TURNAROUND POINT</span>
                        <RotateCcw className="h-4 w-4 text-earth-500 scale-x-[-1]" />
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-earth-500/50" />
                      </>
                    )}
                    {stop.leg === 'return' && journeyStops[index - 1]?.leg === 'turnaround' && (
                      <>
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/50" />
                        <span className="font-mono text-xs text-blue-400 tracking-widest">← THE LONG WAY HOME</span>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/50" />
                      </>
                    )}
                  </div>
                )}

                {/* Connecting line */}
                {index < journeyStops.length - 1 && (
                  <div className={`absolute left-5 top-14 bottom-0 w-px bg-gradient-to-b to-transparent
                                ${stop.leg === 'outbound' ? 'from-green-600/30' : 
                                  stop.leg === 'return' ? 'from-blue-500/30' : 'from-earth-600/30'}`}
                       style={{ height: 'calc(100% + 2rem)' }} />
                )}
                
                <div className="flex gap-6">
                  {/* Marker */}
                  <div className="flex-shrink-0 w-10">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 border-stone-900 text-white
                                  ${stop.type === 'start' ? 'bg-green-600' :
                                    stop.type === 'end' ? 'bg-green-600' :
                                    stop.type === 'destination' || stop.type === 'turnaround' ? 'bg-earth-500' :
                                    stop.type === 'landmark' ? 'bg-bight-600' :
                                    stop.type === 'roadhouse' ? 'bg-campfire-600' :
                                    stop.type === 'highlight' ? 'bg-pink-600' :
                                    stop.type === 'border' ? 'bg-purple-600' :
                                    'bg-stone-700'}`}>
                      {stop.type === 'start' && <MapPin className="h-4 w-4" />}
                      {stop.type === 'end' && <MapPin className="h-4 w-4" />}
                      {stop.type === 'destination' && <Anchor className="h-4 w-4" />}
                      {stop.type === 'landmark' && <Camera className="h-4 w-4" />}
                      {stop.type === 'town' && <Fuel className="h-4 w-4" />}
                      {stop.type === 'roadhouse' && <Coffee className="h-4 w-4" />}
                      {stop.type === 'border' && <MapPin className="h-4 w-4" />}
                      {stop.type === 'highlight' && <span className="text-sm">★</span>}
                    </div>
                    <p className="font-mono text-[10px] text-dust-600 text-center mt-1">
                      {stop.km.toLocaleString()}km
                    </p>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className={`bg-stone-900/50 border rounded-lg p-5
                                  ${stop.leg === 'return' ? 'border-blue-900/30' : 
                                    stop.type === 'highlight' ? 'border-pink-900/50' : 'border-stone-800'}`}>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <h2 className="font-cinematic text-xl md:text-2xl text-dust-100 tracking-wider">
                            {stop.location.toUpperCase()}
                          </h2>
                          <p className="font-mono text-xs text-dust-500 tracking-wide">
                            {stop.region}
                          </p>
                        </div>
                        <p className="font-mono text-[10px] text-earth-600 tracking-widest whitespace-nowrap">
                          {stop.coordinates}
                        </p>
                      </div>
                      
                      <p className="text-dust-400 font-serif leading-relaxed">
                        {stop.description}
                      </p>
                      
                      {stop.quote && (
                        <blockquote className="mt-4 pl-3 border-l-2 border-earth-600">
                          <p className="font-serif italic text-dust-500 text-sm">
                            {stop.quote}
                          </p>
                          <cite className="font-mono text-[10px] text-earth-600 mt-1 block">
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
            Every stop had a story. Some were told at roadhouses. 
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
