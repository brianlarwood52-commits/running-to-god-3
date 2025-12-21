'use client'

import React from 'react'
import Link from 'next/link'
import { Flame, Quote, ArrowRight, BookOpen } from 'lucide-react'

const stories = [
  {
    title: 'The Man at the Roadhouse',
    location: 'Nullarbor Roadhouse, KM 1200',
    preview: 'He\'d been sitting at the same table for three hours, nursing the same cup of tea. When I sat down, he looked at me and said, "You\'re not the first to come through here looking for answers, mate."',
    category: 'Encounters',
  },
  {
    title: 'When the Car Died',
    location: 'Somewhere past Caiguna',
    preview: 'No phone signal. No other cars for an hour. Just me, the red dirt, and a dead battery. What happened next taught me more about trust than any sermon ever could.',
    category: 'Trials',
  },
  {
    title: 'The Longest Night',
    location: 'Bunda Cliffs Campsite',
    preview: 'Couldn\'t sleep. The stars were too bright, the silence too loud. At 3am, I finally understood what "be still and know" really meant.',
    category: 'Revelations',
  },
]

export default function CampfirePage() {
  return (
    <div className="min-h-screen bg-stone-950">
      
      {/* ===== HERO ===== */}
      <section className="relative h-[70vh] flex items-end vignette film-grain overflow-hidden">
        {/* Night sky background */}
        <div className="absolute inset-0 bg-gradient-to-b from-night-900 via-night-950 to-stone-950" />
        
        {/* Stars */}
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full star"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        {/* Campfire glow */}
        <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2">
          <div className="w-40 h-40 bg-campfire-500 rounded-full blur-3xl fire-glow opacity-40" />
          <div className="w-24 h-24 bg-campfire-400 rounded-full blur-2xl fire-glow opacity-60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 w-full">
          <p className="location-tag mb-4">GATHERED AROUND THE FIRE</p>
          <h1 className="font-cinematic text-6xl md:text-8xl text-dust-100 tracking-wider title-card mb-4">
            CAMPFIRE TALES
          </h1>
          <p className="text-xl text-dust-300 font-serif max-w-2xl">
            Stories from the roadside. Lessons learned in the dark. 
            Truths that only come out under the stars.
          </p>
        </div>

        {/* Flame icon */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <Flame className="h-8 w-8 text-campfire-500 fire-glow" />
        </div>
      </section>

      {/* ===== INTRO QUOTE ===== */}
      <section className="py-20 bg-stone-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Quote className="h-12 w-12 text-campfire-600/50 mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl font-serif italic text-dust-300 leading-relaxed mb-6">
            &ldquo;There&apos;s something about sitting around a fire that makes people tell the truth. 
            Maybe it&apos;s the darkness. Maybe it&apos;s the warmth. 
            Maybe it&apos;s just being far enough from normal life that the masks come off.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ===== STORIES GRID ===== */}
      <section className="py-16 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-mono text-xs text-earth-500 tracking-widest mb-4">STORIES</p>
            <h2 className="font-cinematic text-4xl md:text-5xl text-dust-100 tracking-wider">
              FROM THE ROAD
            </h2>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            {stories.map((story, index) => (
              <article 
                key={index} 
                className="group bg-stone-900/50 border border-stone-800 rounded-lg p-8 hover:border-campfire-600/50 transition-all cursor-pointer"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <p className="font-mono text-xs text-campfire-500 tracking-widest mb-2">
                      {story.category.toUpperCase()}
                    </p>
                    <h3 className="font-cinematic text-3xl text-dust-100 tracking-wider mb-2 group-hover:text-campfire-400 transition-colors">
                      {story.title.toUpperCase()}
                    </h3>
                    <p className="font-mono text-xs text-dust-600 tracking-wide mb-4">
                      {story.location}
                    </p>
                    <p className="text-dust-400 font-serif leading-relaxed">
                      {story.preview}
                    </p>
                  </div>
                  <div className="flex items-center md:items-end">
                    <span className="font-mono text-xs text-dust-600 group-hover:text-campfire-500 transition-colors flex items-center gap-2">
                      READ MORE <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MORE COMING ===== */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Flame className="h-16 w-16 text-campfire-600/50 mx-auto mb-6" />
          <h2 className="font-cinematic text-3xl md:text-4xl text-dust-200 tracking-wider mb-4">
            MORE STORIES COMING
          </h2>
          <p className="text-dust-500 font-serif mb-8 max-w-xl mx-auto">
            Every campfire has more stories than can be told in one night. 
            Check back as we continue to share tales from the road.
          </p>
          <Link href="/devotions" className="btn-expedition inline-flex items-center gap-3">
            <BookOpen className="h-5 w-5" />
            READ THE JOURNAL
          </Link>
        </div>
      </section>
    </div>
  )
}
