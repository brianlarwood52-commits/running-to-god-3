'use client'

import React from 'react'
import { Users } from 'lucide-react'

export default function QuestionsAboutJesusPage() {
  return (
    <div className="min-h-screen bg-stone-950">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-end vignette film-grain">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 to-stone-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_55%)]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-16 w-full">
          <p className="location-tag mb-4">QUESTIONS ABOUT JESUS</p>
          <h1 className="font-cinematic text-5xl md:text-7xl text-dust-100 tracking-wider title-card mb-4">
            JESUS: GOD WITH US
          </h1>
          <p className="text-lg md:text-xl text-dust-300 font-serif max-w-3xl">
            For those who believe in God but are still asking who Jesus really is—these are the essentials, simply and clearly.
          </p>
        </div>
      </section>

      {/* Q&A */}
      <section className="py-14 bg-stone-950/80 backdrop-blur-sm">
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
    </div>
  )
}

