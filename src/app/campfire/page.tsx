'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Flame, Quote, Users, ArrowRight, ExternalLink } from 'lucide-react'

export default function CampfirePage() {
  const heroRef = useRef<HTMLElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      
      {/* ===== HERO ===== */}
      <section ref={heroRef} className="relative h-[70vh] flex items-end vignette film-grain overflow-hidden">
        {/* Sky layer - moves slowest (furthest back) */}
        <div 
          className="absolute inset-0 bg-center bg-cover bg-no-repeat will-change-transform"
          style={{
            backgroundImage: 'url(/images/campfire-sky.png)',
            backgroundSize: 'cover',
            transform: `translateY(${scrollY * 0.2}px)`,
            transition: 'transform 0.1s ease-out',
            zIndex: 1,
          }}
        />
        
        {/* Foreground layer - moves faster (closer) */}
        <div 
          className="absolute inset-0 bg-center bg-cover bg-no-repeat will-change-transform"
          style={{
            backgroundImage: 'url(/images/campfire-foreground.png)',
            backgroundSize: 'cover',
            transform: `translateY(${scrollY * 0.6}px)`,
            transition: 'transform 0.1s ease-out',
            zIndex: 2,
          }}
        />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-3" style={{ zIndex: 3 }} />
        
        {/* Pulsating fire glow - positioned over the flames in the photo, moves with foreground parallax */}
        <div 
          className="absolute bottom-[15%] left-[40%] -translate-x-1/2 will-change-transform" 
          style={{ 
            zIndex: 4,
            transform: `translateY(${scrollY * 0.6}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className="w-36 h-20 bg-campfire-500/40 blur-3xl fire-glow" />
        </div>
        
        {/* Additional fire glow layers for more realistic effect */}
        <div 
          className="absolute bottom-[15%] left-[40%] -translate-x-1/2 will-change-transform" 
          style={{ 
            zIndex: 4,
            transform: `translateY(${scrollY * 0.6}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className="w-28 h-16 bg-orange-500/30 blur-2xl fire-glow" style={{ animationDelay: '0.15s' }} />
        </div>
        <div 
          className="absolute bottom-[15%] left-[40%] -translate-x-1/2 will-change-transform" 
          style={{ 
            zIndex: 4,
            transform: `translateY(${scrollY * 0.6}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className="w-20 h-12 bg-yellow-500/20 blur-xl fire-glow" style={{ animationDelay: '0.3s' }} />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 w-full">
          <p className="location-tag mb-4">STORIES FROM THE ROADSIDE</p>
          <h1 className="font-cinematic text-6xl md:text-8xl text-dust-100 tracking-wider title-card mb-4">
            THE CAMPFIRE
          </h1>
          <p className="text-xl text-dust-300 font-serif max-w-2xl">
            Every journey has its characters. The people you meet on the road become part of your story forever.
          </p>
        </div>
      </section>

      {/* ===== QUESTIONS ABOUT JESUS ===== */}
      <section id="questions-about-jesus" className="py-14 bg-stone-950/70 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <div className="flex items-center gap-3">
            <Users className="h-6 w-6 text-campfire-400" />
            <p className="font-mono text-xs text-campfire-400 tracking-widest">QUESTIONS ABOUT JESUS</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-dust-200 font-serif leading-relaxed">
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-dust-100">Is Jesus really God with us?</p>
                <p>Yes. He claimed divinity, forgave sins, and revealed the Father. To see Jesus is to see God’s heart.</p>
              </div>
              <div>
                <p className="font-semibold text-dust-100">Grace or performance?</p>
                <p>Grace. We’re saved by trusting His finished work—not by earning it. Obedience flows from love, not fear.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-dust-100">What about rest?</p>
                <p>Jesus invites us into His rest—a weekly pause that remembers His creation and redemption, and points us to the rest to come.</p>
              </div>
              <div>
                <p className="font-semibold text-dust-100">Why does His return matter?</p>
                <p>Because He promised to come again, end evil, heal creation, and dwell with His people. Hope is not vague—it’s anchored in Him.</p>
              </div>
            </div>
          </div>
          <div className="bg-stone-900/60 border border-stone-800 rounded-lg p-4">
            <p className="font-mono text-[11px] text-campfire-300 tracking-widest mb-1">NEXT STEP</p>
            <p className="text-dust-200 font-serif">
              If you want to talk about Jesus, doubts, or next steps—reach out. I’m glad to listen and pray.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FEATURED ENCOUNTER: CATMAN ===== */}
      <section className="py-20 bg-stone-950/70 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <Users className="h-6 w-6 text-campfire-500" />
            <p className="font-mono text-xs text-campfire-500 tracking-widest">PEOPLE OF THE ROAD</p>
          </div>
          
          {/* Catman Feature */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden worn-photo">
              <Image
                src="/images/catman.jpg"
                alt="Kentaro Jin - The Strange Catman - walking across Australia"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="font-mono text-xs text-dust-400">© Brian Larwood</p>
              </div>
            </div>
            
            {/* Story */}
            <div>
              <p className="font-mono text-xs text-earth-500 tracking-widest mb-2">ENCOUNTER</p>
              <h2 className="font-cinematic text-4xl md:text-5xl text-dust-100 tracking-wider mb-4">
                THE STRANGE CATMAN
              </h2>
              <p className="font-mono text-sm text-cyan-500 mb-6">KENTARO JIN • JAPAN 🇯🇵</p>
              
              <div className="space-y-4 text-dust-300 font-serif leading-relaxed">
                <p>
                  I was having a break at the <strong className="text-dust-100">Balladonia Roadhouse</strong> when 
                  this bloke came bursting through the door, absolutely buzzing with excitement. He was showing 
                  everyone photos on his phone, going on about some guy dressed as a cat walking down the highway.
                </p>
                <p>
                  &ldquo;You&apos;ve got to see this!&rdquo; he kept saying. &ldquo;There&apos;s a <em>catman</em> out there!&rdquo;
                </p>
                <p>
                  I&apos;d planned to stay at the roadhouse a bit longer, but something told me I needed to see 
                  this for myself. I got in the Jeep and headed out. It was a <strong className="text-campfire-400">scorching 
                  hot day</strong>—the kind where the heat shimmers off the road.
                </p>
                <p>
                  Sure enough, <strong className="text-dust-100">8 minutes out of Norseman</strong>, there he was. 
                  A man in a full leopard-print bodysuit, pushing a wheelbarrow down the highway. In <em>this</em> heat. 
                  I pulled over immediately.
                </p>
                <p>
                  I had a car fridge full of cold water, so I grabbed some bottles and offered them to him. 
                  His reaction? <strong className="text-campfire-400">Like he&apos;d just won the lottery.</strong> Pure, 
                  unbridled joy. Out here in the middle of nowhere, in that heat, cold water wasn&apos;t just 
                  refreshing—it was liquid gold.
                </p>
                <p>
                  I asked him why he was doing it. Why walk thousands of kilometres in a leopard suit across 
                  one of the harshest landscapes on Earth?
                </p>
                <p className="text-xl text-cyan-400 font-journal my-6 text-center">
                  &ldquo;Because I want to be a superhero. Spreading happiness.&rdquo;
                </p>
                <p>
                  And in that moment, standing on a scorching highway 8 minutes from Norseman, I realised—
                  <strong className="text-dust-100">he already was one.</strong>
                </p>
                <p>
                  Meet <strong className="text-dust-100">Kentaro Jin</strong>—a Japanese construction worker 
                  who decided to walk over <strong className="text-cyan-400">5,000 kilometres</strong> across 
                  Australia. Not for fame. Not for records. But because he wanted to be a superhero, 
                  spreading happiness to everyone he meets.
                </p>
                <p>
                  After we chatted, I got back on the road—but I wasn&apos;t done. I jumped on the 
                  <strong className="text-cyan-400"> UHF radio</strong> and started telling every truckie and 
                  traveller about him. Word spreads fast on the Nullarbor, and this superhero deserved all the 
                  encouragement he could get.
                </p>
              </div>

              <div className="bg-campfire-900/20 border border-campfire-800/30 rounded-lg p-4 my-6">
                <p className="font-mono text-xs text-campfire-400 tracking-widest mb-2">📍 THE ENCOUNTER</p>
                <p className="text-dust-300 font-serif text-sm">
                  <strong>Tip-off:</strong> Balladonia Roadhouse (excited traveller with photos)<br />
                  <strong>Location:</strong> 8 minutes east of Norseman, WA (GPS from photo metadata)<br />
                  <strong>Conditions:</strong> Extreme heat<br />
                  <strong>The gift:</strong> Cold water from the car fridge (reaction: pure joy)<br />
                  <strong>His why:</strong> &ldquo;I want to be a superhero, spreading happiness&rdquo;<br />
                  <strong>Follow-up:</strong> Spread the word via UHF radio to other travellers
                </p>
              </div>

              <blockquote className="my-8 pl-4 border-l-2 border-campfire-500">
                <p className="font-serif italic text-dust-400 text-lg">
                  &ldquo;I want to be a superhero. Spreading happiness.&rdquo;
                </p>
                <cite className="font-mono text-xs text-campfire-500 mt-2 block">
                  — KENTARO JIN, 8 MINUTES FROM NORSEMAN
                </cite>
              </blockquote>

              <blockquote className="my-8 pl-4 border-l-2 border-stone-700">
                <p className="font-serif italic text-dust-500 text-sm">
                  &ldquo;Australia is a very big country, and very nice people… I really like the journey. 
                  Every town, there are so many kinds of people, and they are kind to me. I love each town.&rdquo;
                </p>
                <cite className="font-mono text-xs text-dust-600 mt-2 block">
                  — KENTARO JIN (ABC INTERVIEW)
                </cite>
              </blockquote>

              <div className="bg-stone-900/50 border border-stone-800 rounded-lg p-6 mb-6">
                <p className="font-mono text-xs text-earth-500 tracking-widest mb-3">THE JOURNEY</p>
                <ul className="space-y-2 text-dust-400 font-serif text-sm">
                  <li>🚶 <strong>Distance:</strong> 5,000+ kilometres</li>
                  <li>📍 <strong>Route:</strong> Carnarvon → Albany → Esperance → Sydney</li>
                  <li>🏕️ <strong>Method:</strong> Walking with a wheelbarrow, sleeping roadside</li>
                  <li>💪 <strong>Daily:</strong> 10 hours of walking</li>
                  <li>❤️ <strong>Mission:</strong> Spreading kindness and inspiring others</li>
                </ul>
              </div>

              <p className="text-dust-400 font-serif italic">
                Two journeys. Two strangers. One road. Sometimes the people you meet become 
                the most memorable part of the adventure.
              </p>

              <a 
                href="https://www.instagram.com/thestrangecatman/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-cyan-400 hover:text-cyan-300 font-mono text-sm transition-colors"
              >
                Follow Catman&apos;s journey on Instagram
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE DOCTOR ===== */}
      <section className="py-20 bg-stone-950/60 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">🐱</span>
            <p className="font-mono text-xs text-cyan-500 tracking-widest">CREATURES OF THE ROAD</p>
          </div>
          
          {/* The Doctor Feature */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Images */}
            <div className="space-y-4">
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden worn-photo">
                <Image
                  src="/images/Munglinup-roadhouse.jpg"
                  alt="Munglinup Roadhouse - General Store, Liquor, Coffee, Bait, Ice"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="font-mono text-xs text-dust-400">© Brian Larwood</p>
                </div>
              </div>
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden worn-photo">
                <Image
                  src="/images/the-doctor.jpg"
                  alt="The Doctor - the roadhouse cat at Munglinup"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="font-mono text-xs text-dust-400">© Brian Larwood</p>
                </div>
              </div>
            </div>
            
            {/* Story */}
            <div>
              <p className="font-mono text-xs text-earth-500 tracking-widest mb-2">MUNGLINUP ROADHOUSE</p>
              <h2 className="font-cinematic text-4xl md:text-5xl text-dust-100 tracking-wider mb-4">
                THE DOCTOR
              </h2>
              <p className="font-mono text-sm text-cyan-500 mb-6">&ldquo;NOT EXACTLY THE RITZ&rdquo;</p>
              
              <div className="space-y-4 text-dust-300 font-serif leading-relaxed">
                <p>
                  I&apos;d pulled into the <strong className="text-dust-100">Munglinup Roadhouse</strong>—the 
                  kind of place that&apos;s equal parts general store, servo, and outback institution. 
                  General Store. Liquor. Coffee. Bait. Ice. Everything a traveller needs, nothing they don&apos;t.
                </p>
                <p>
                  I was inside buying some food and drinks when this cat came strolling in like he owned 
                  the place. Friendly little thing, weaving between the shelves, totally at home.
                </p>
                <p>
                  &ldquo;What a friendly cat!&rdquo; I said to the young lady behind the counter.
                </p>
                <p>
                  She looked up, glanced at the cat, and said in the most matter-of-fact voice imaginable:
                </p>
                <p className="text-2xl text-cyan-400 font-journal my-6 text-center">
                  &ldquo;Oh, that&apos;s only The Doctor.&rdquo;
                </p>
                <p>
                  <strong className="text-dust-100">The Doctor.</strong> Of course. Clearly one of his 
                  regenerations was as a tabby cat, roaming the Australian outback, keeping watch over 
                  weary travellers at a roadhouse in the middle of nowhere.
                </p>
                <p className="text-dust-400 italic">
                  Look into those eyes and tell me he hasn&apos;t seen the Time Vortex. I dare you.
                </p>
              </div>

              <div className="bg-cyan-900/20 border border-cyan-800/30 rounded-lg p-4 my-6">
                <p className="font-mono text-xs text-cyan-400 tracking-widest mb-2">📍 THE ENCOUNTER</p>
                <p className="text-dust-300 font-serif text-sm">
                  <strong>Location:</strong> Munglinup Roadhouse, WA<br />
                  <strong>Amenities:</strong> General Store, Liquor, Coffee, Bait, Ice<br />
                  <strong>Resident Time Lord:</strong> The Doctor (feline regeneration)<br />
                  <strong>Vibe:</strong> &ldquo;Not exactly the Ritz&rdquo;
                </p>
              </div>

              <blockquote className="my-6 pl-4 border-l-2 border-cyan-600">
                <p className="font-serif italic text-dust-400 text-sm">
                  In 900 years of time and space, I&apos;ve never met anyone who wasn&apos;t important.
                </p>
                <cite className="font-mono text-xs text-cyan-600 mt-2 block">
                  — THE DOCTOR (PROBABLY THIS ONE TOO)
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MORE STORIES COMING ===== */}
      <section className="py-20 bg-stone-950/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <Flame className="h-12 w-12 text-campfire-500 mx-auto mb-6" />
            <h2 className="font-cinematic text-4xl text-dust-100 tracking-wider mb-4">
              MORE STORIES TO COME
            </h2>
            <p className="text-dust-400 font-serif text-lg max-w-2xl mx-auto">
              6,859 kilometres of road means countless encounters—grey nomads at roadhouses, 
              locals with stories to tell, and characters you couldn&apos;t make up if you tried.
            </p>
          </div>

          {/* Placeholder story cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'The Grey Nomads', location: 'Nullarbor Roadhouse', desc: 'Three years on the road and counting...' },
              { title: 'The Roadhouse Owner', location: 'Norseman', desc: '"East," I said. He just nodded.' },
              { title: 'Solitude & Stars', location: 'Israelite Bay', desc: 'Sometimes the best conversations are with yourself.' },
            ].map((story, i) => (
              <div key={i} className="bg-stone-900/50 border border-stone-800 rounded-lg p-6">
                <p className="font-mono text-xs text-dust-600 tracking-widest mb-2">{story.location.toUpperCase()}</p>
                <h3 className="font-cinematic text-xl text-dust-200 tracking-wider mb-3">{story.title}</h3>
                <p className="text-dust-500 font-serif text-sm italic">{story.desc}</p>
                <p className="text-dust-700 font-mono text-xs mt-4">Coming soon...</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SCRIPTURE ===== */}
      <section className="py-20 bg-night-950/50 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Quote className="h-10 w-10 text-campfire-500/50 mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl font-serif italic text-dust-300 leading-relaxed mb-6">
            &ldquo;Do not forget to show hospitality to strangers, for by so doing some people 
            have shown hospitality to angels without knowing it.&rdquo;
          </blockquote>
          <cite className="font-mono text-sm text-dust-600 tracking-widest">
            — HEBREWS 13:2
          </cite>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-stone-950/70 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-mono text-xs text-earth-500 tracking-widest mb-4">CONTINUE</p>
          <h2 className="font-cinematic text-4xl md:text-5xl text-dust-100 tracking-wider mb-6">
            EXPLORE THE JOURNEY
          </h2>
          <p className="text-dust-400 font-serif text-lg mb-8 max-w-xl mx-auto">
            Every stop along the way has its own story. Trace the route and discover what each place revealed.
          </p>
          <Link href="/journey" className="btn-expedition inline-flex items-center gap-3">
            THE ROAD
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
