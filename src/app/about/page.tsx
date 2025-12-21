'use client'

import React from 'react'
import Link from 'next/link'
import { Heart, Compass, MapPin, ArrowRight, Quote } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-950">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-b from-earth-700 via-earth-800 to-stone-900 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="font-mono text-xs text-dust-400 tracking-widest mb-4">
            THE STORY BEHIND THE JOURNEY
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-white mb-6 tracking-wider">
            WHY THE ROAD?
          </h1>
          <p className="text-xl text-dust-300 max-w-2xl mx-auto font-light">
            Sometimes you have to leave everything behind to find what matters most.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-stone-100 dark:bg-stone-950">
        <div className="max-w-3xl mx-auto px-4">
          <div className="adventure-card p-8 md:p-12">
            <Quote className="h-12 w-12 text-earth-300 dark:text-earth-700 mb-6" />
            
            <div className="space-y-6 text-stone-600 dark:text-stone-400 text-lg leading-relaxed">
              <p className="first-letter:text-5xl first-letter:font-display first-letter:text-earth-600 first-letter:mr-2 first-letter:float-left">
                There comes a moment in every life when the familiar becomes suffocating. 
                When the daily routine feels less like stability and more like a prison. 
                For me, that moment came in Perth, staring at the same four walls, 
                wondering if there was more to life than this.
              </p>

              <p>
                I didn&apos;t have a plan. I had a car, a tent, and a desperate need to find 
                something—or Someone—bigger than my circumstances. So I pointed the car 
                east and started driving.
              </p>

              <p>
                The Nullarbor has a way of stripping everything away. There&apos;s no 
                distraction out there. No phone signal. No Netflix. Just you, the road, 
                and 1,200 kilometres of nothing. In that nothing, I found everything.
              </p>

              <p className="font-hand text-2xl text-earth-600 dark:text-earth-400 italic">
                God meets us in the wilderness. He always has.
              </p>

              <p>
                Standing at the Bunda Cliffs, watching the Southern Ocean crash against 
                ancient limestone, I understood something for the first time: I am small, 
                but I am loved by Someone infinite. The same God who carved those cliffs 
                knows my name.
              </p>

              <p>
                This ministry exists because of that road trip. Every kilometre taught me 
                something. Every roadhouse conversation revealed a truth. Every starlit 
                night was a reminder that we are never truly alone.
              </p>

              <p>
                <strong className="text-stone-800 dark:text-stone-200">Running to God</strong> isn&apos;t 
                about running away from your problems. It&apos;s about running towards the 
                One who can handle them. Whether you&apos;re on a literal road trip or 
                navigating the highways and byways of everyday life, God is there—in 
                the dust, in the stars, in the silence.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-stone-200 dark:border-stone-800">
              <p className="font-hand text-xl text-stone-500 dark:text-stone-500 text-right">
                — From Perth to Port Lincoln, and beyond
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-earth-100 dark:bg-stone-900">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-earth-800 dark:text-earth-500 tracking-wide mb-4">
              OUR MISSION
            </h2>
            <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
              To encourage fellow travellers on their faith journey through stories, 
              devotions, and shared experiences from the road.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="adventure-card p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-earth-600 rounded-lg flex items-center justify-center">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-display text-xl text-earth-700 dark:text-earth-500 tracking-wide mb-2">
                SHARE THE JOURNEY
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm">
                Stories from the road that point to something greater
              </p>
            </div>

            <div className="adventure-card p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-campfire-600 rounded-lg flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-display text-xl text-earth-700 dark:text-earth-500 tracking-wide mb-2">
                FUEL THE SPIRIT
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm">
                Daily encouragement for life&apos;s highway
              </p>
            </div>

            <div className="adventure-card p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-bight-600 rounded-lg flex items-center justify-center">
                <Compass className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-display text-xl text-earth-700 dark:text-earth-500 tracking-wide mb-2">
                POINT THE WAY
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm">
                Always directing travellers towards the ultimate destination
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-earth-800 dark:bg-stone-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl text-dust-100 mb-4 tracking-wide">
            START YOUR JOURNEY
          </h2>
          <p className="text-dust-400 mb-8 max-w-xl mx-auto">
            Every great journey begins with a single step. Where will yours take you?
          </p>
          <Link href="/journey" className="btn-adventure inline-flex items-center gap-2">
            <Compass className="h-5 w-5" />
            HIT THE ROAD
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
