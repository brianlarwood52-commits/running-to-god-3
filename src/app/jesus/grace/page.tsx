'use client'

import React from 'react'
import Link from 'next/link'

export default function JesusGracePage() {
  return (
    <div className="min-h-screen bg-stone-950 text-dust-200">
      <section className="relative py-20 bg-gradient-to-b from-stone-900 via-stone-950 to-stone-950">
        <div className="max-w-4xl mx-auto px-6">
          <p className="location-tag mb-4">KNOWING JESUS</p>
          <h1 className="font-cinematic text-5xl md:text-6xl text-dust-100 tracking-wider mb-4">
            JESUS OUR GRACE
          </h1>
          <p className="text-lg font-serif text-dust-300 mb-8">
            Grace means we are accepted in Christ not because we are good enough, but because He is. Jesus gives
            us what we could never earn and what we do not deserve.
          </p>

          <div className="space-y-10">
            {/* Bible scene */}
            <div className="bg-stone-900/70 border border-stone-800 rounded-lg p-6">
              <h2 className="font-cinematic text-2xl text-dust-100 mb-4">No Condemnation</h2>
              <p className="font-mono text-[11px] text-cyan-400 tracking-widest mb-2">
                JOHN 8:3–11 (SUMMARY) &amp; ROMANS 8:1
              </p>
              <p className="font-serif text-sm leading-relaxed text-dust-200 mb-4">
                A woman caught in adultery is dragged before Jesus. The crowd is ready to stone her. Jesus exposes
                the hypocrisy of the accusers and then says, &ldquo;Neither do I condemn you. Go now and leave your
                life of sin.&rdquo; (John 8:11)
              </p>
              <p className="font-serif text-sm leading-relaxed text-dust-200 mb-4">
                Paul later writes: &ldquo;Therefore, there is now no condemnation for those who are in Christ Jesus.&rdquo;
                (Romans 8:1)
              </p>
              <p className="font-serif text-sm text-dust-300">
                Grace does not pretend sin is small; it shows that Jesus&apos; sacrifice is greater. He lifts the
                guilty, forgives fully, and then calls us into a new life with Him.
              </p>
            </div>

            {/* Simple Bible study outline */}
            <div className="bg-stone-900/70 border border-stone-800 rounded-lg p-6">
              <h2 className="font-cinematic text-2xl text-dust-100 mb-4">Sample Bible Study: Saved by Grace</h2>
              <ol className="list-decimal list-inside space-y-3 font-serif text-sm text-dust-300">
                <li>
                  <strong className="text-cyan-300">Read Ephesians 2:4–9.</strong> 
                  List everything God does in these verses. What is our part? What is not our part?
                </li>
                <li>
                  <strong className="text-cyan-300">Read Luke 23:39–43.</strong> 
                  The thief on the cross has nothing to offer. What does this scene teach you about grace?
                </li>
                <li>
                  <strong className="text-cyan-300">Read Titus 2:11–14.</strong> 
                  How does grace both save us and train us to live differently?
                </li>
                <li>
                  Pray: &ldquo;Jesus, thank You that there is no condemnation in You. Teach me to live out of Your
                  grace, not out of fear.&rdquo;
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


