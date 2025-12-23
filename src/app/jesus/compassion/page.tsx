'use client'

import React from 'react'
import Link from 'next/link'

export default function JesusCompassionPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-dust-200">
      <section className="relative py-20 bg-gradient-to-b from-stone-900 via-stone-950 to-stone-950">
        <div className="max-w-4xl mx-auto px-6">
          <p className="location-tag mb-4">KNOWING JESUS</p>
          <h1 className="font-cinematic text-5xl md:text-6xl text-dust-100 tracking-wider mb-4">
            JESUS OUR COMPASSION
          </h1>
          <p className="text-lg font-serif text-dust-300 mb-8">
            Jesus does not stand far off from our pain. He sees, He feels, and He moves toward broken people with
            a heart that is deeply moved.
          </p>

          <div className="space-y-10">
            {/* Bible scene */}
            <div className="bg-stone-900/70 border border-stone-800 rounded-lg p-6">
              <h2 className="font-cinematic text-2xl text-dust-100 mb-4">Seeing the Crowds</h2>
              <p className="font-mono text-[11px] text-cyan-400 tracking-widest mb-2">
                MATTHEW 9:35–36
              </p>
              <p className="font-serif text-sm leading-relaxed text-dust-200 mb-4">
                &ldquo;Jesus went through all the towns and villages, teaching in their synagogues, proclaiming the good
                news of the kingdom and healing every disease and sickness. When he saw the crowds, he had compassion
                on them, because they were harassed and helpless, like sheep without a shepherd.&rdquo;
              </p>
              <p className="font-serif text-sm text-dust-300">
                He doesn&apos;t just see statistics or &quot;sinners&quot;—He sees people who are worn out, misled,
                and in need of a Shepherd. His first movement is not anger but compassion.
              </p>
            </div>

            {/* Simple Bible study outline */}
            <div className="bg-stone-900/70 border border-stone-800 rounded-lg p-6">
              <h2 className="font-cinematic text-2xl text-dust-100 mb-4">Sample Bible Study: Jesus and the Broken</h2>
              <ol className="list-decimal list-inside space-y-3 font-serif text-sm text-dust-300">
                <li>
                  <strong className="text-cyan-300">Read Matthew 9:35–38.</strong> 
                  What words describe the crowds? What words describe Jesus&apos; heart?
                </li>
                <li>
                  <strong className="text-cyan-300">Read Luke 7:11–15.</strong> 
                  Jesus meets a grieving widow at Nain. What does He do before He performs a miracle? What moves Him?
                </li>
                <li>
                  <strong className="text-cyan-300">Read Hebrews 4:14–16.</strong> 
                  How does Jesus as our High Priest show compassion to our weaknesses today?
                </li>
                <li>
                  Close by praying: &ldquo;Jesus, help me to believe that You see me with this same compassion, and
                  teach me to look at others the way You do.&rdquo;
                </li>
              </ol>
            </div>

            {/* Navigation back */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/"
                className="px-4 py-2 border border-stone-700 rounded-full text-sm font-mono tracking-widest text-dust-300 hover:border-cyan-500 hover:text-cyan-300 transition-colors"
              >
                ← BACK HOME
              </Link>
              <Link
                href="/#knowing-jesus"
                className="px-4 py-2 border border-stone-700 rounded-full text-sm font-mono tracking-widest text-dust-300 hover:border-cyan-500 hover:text-cyan-300 transition-colors"
              >
                ↺ BACK TO KNOWING JESUS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


