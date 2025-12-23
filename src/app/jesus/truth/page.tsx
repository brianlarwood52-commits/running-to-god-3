'use client'

import React from 'react'

export default function JesusTruthPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-dust-200">
      <section className="relative py-20 bg-gradient-to-b from-stone-900 via-stone-950 to-stone-950">
        <div className="max-w-4xl mx-auto px-6">
          <p className="location-tag mb-4">KNOWING JESUS</p>
          <h1 className="font-cinematic text-5xl md:text-6xl text-dust-100 tracking-wider mb-4">
            JESUS OUR TRUTH
          </h1>
          <p className="text-lg font-serif text-dust-300 mb-8">
            Jesus doesn&apos;t just tell the truth—He is the Truth. In a world of mixed voices and half-lights,
            He shows us what God is really like and what freedom really is.
          </p>

          <div className="space-y-10">
            {/* Bible scene */}
            <div className="bg-stone-900/70 border border-stone-800 rounded-lg p-6">
              <h2 className="font-cinematic text-2xl text-dust-100 mb-4">The Truth That Sets Free</h2>
              <p className="font-mono text-[11px] text-cyan-400 tracking-widest mb-2">
                JOHN 8:31–32, 36
              </p>
              <p className="font-serif text-sm leading-relaxed text-dust-200 mb-4">
                &ldquo;To the Jews who had believed him, Jesus said, &lsquo;If you hold to my teaching, you are
                really my disciples. Then you will know the truth, and the truth will set you free.&rsquo; &hellip;
                So if the Son sets you free, you will be free indeed.&rdquo;
              </p>
              <p className="font-serif text-sm text-dust-300">
                Truth in Jesus is not just information—it is a Person who breaks chains: guilt, lies we believe,
                and the power of sin. His words cut through confusion and lead us into real freedom.
              </p>
            </div>

            {/* Simple Bible study outline */}
            <div className="bg-stone-900/70 border border-stone-800 rounded-lg p-6">
              <h2 className="font-cinematic text-2xl text-dust-100 mb-4">Sample Bible Study: Walking in His Truth</h2>
              <ol className="list-decimal list-inside space-y-3 font-serif text-sm text-dust-300">
                <li>
                  <strong className="text-cyan-300">Read John 14:1–7.</strong> 
                  When Jesus says &ldquo;I am the way and the truth and the life,&rdquo; what is He claiming about Himself?
                </li>
                <li>
                  <strong className="text-cyan-300">Read John 1:14–18.</strong> 
                  How do grace and truth come together in Jesus? What does He show us about the Father?
                </li>
                <li>
                  <strong className="text-cyan-300">Read Psalm 43:3 and John 16:13.</strong> 
                  How does God lead us by His light and truth through His Spirit today?
                </li>
                <li>
                  Pray: &ldquo;Jesus, be my Truth. Expose the lies I believe and lead me into the freedom You promise.&rdquo;
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


