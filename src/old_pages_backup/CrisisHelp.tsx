'use client';

import { Heart, Phone, MessageCircle, Shield } from 'lucide-react';

const CrisisHelp = () => {
  return (
    <div className="animate-fade-in">
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 text-red-500 mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Crisis Support Resources
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            If you or someone you know is in crisis, please reach out for help immediately.
            You are not alone, and there are people who care and want to help you through this.
          </p>
        </div>
      </section>

      <section className="py-12 bg-red-100 dark:bg-red-900/40 border-y-4 border-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-2xl border-4 border-red-500">
            <Shield className="h-12 w-12 text-red-600 dark:text-red-400 mx-auto mb-4" />
            <h2 className="font-serif text-2xl font-bold text-red-900 dark:text-red-200 text-center mb-4">
              If You Are in Immediate Danger
            </h2>
            <p className="text-center text-xl font-bold text-red-900 dark:text-red-100 mb-2">
              Call Emergency Services Now
            </p>
            <div className="flex justify-center gap-8 text-center">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Australia</p>
                <p className="text-4xl font-bold text-red-600 dark:text-red-400">000</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">United States</p>
                <p className="text-4xl font-bold text-red-600 dark:text-red-400">911</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">
              If you're having thoughts of self-harm or suicide, please reach out to these services for immediate, confidential help:
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">
              These services are independent from Shame to Flame Ministry and are included for public support and crisis assistance.
            </p>
          </div>

          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <Phone className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h2 className="font-serif text-3xl font-bold text-gray-800 dark:text-white">
                United States Resources
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-8 rounded-xl shadow-lg border border-blue-200 dark:border-blue-700 hover:shadow-xl transition-all duration-300">
                <a
                  href="https://988lifeline.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="font-semibold text-xl text-gray-800 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    National Suicide Prevention Lifeline
                  </h3>
                  <div className="text-center bg-white dark:bg-gray-800 rounded-lg p-4 mb-3">
                    <p className="text-5xl font-bold text-blue-600 dark:text-blue-400">988</p>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Free, confidential support 24/7 for people in distress. Prevention and crisis resources available.
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 font-semibold">
                    Available: 24/7
                  </p>
                </a>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-8 rounded-xl shadow-lg border border-purple-200 dark:border-purple-700 hover:shadow-xl transition-all duration-300">
                <a
                  href="https://www.crisistextline.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="font-semibold text-xl text-gray-800 dark:text-white mb-3 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    Crisis Text Line
                  </h3>
                  <div className="text-center bg-white dark:bg-gray-800 rounded-lg p-4 mb-3">
                    <MessageCircle className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                    <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">Text HOME to</p>
                    <p className="text-5xl font-bold text-purple-600 dark:text-purple-400">741741</p>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Free 24/7 crisis support via text message. Connect with a trained crisis counselor.
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 font-semibold">
                    Available: 24/7
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center mb-6">
              <Phone className="h-8 w-8 text-green-600 dark:text-green-400 mr-3" />
              <h2 className="font-serif text-3xl font-bold text-gray-800 dark:text-white">
                Australia Resources
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-6 rounded-xl shadow-lg border border-green-200 dark:border-green-700 hover:shadow-xl transition-all duration-300">
                <a
                  href="https://www.lifeline.org.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                    Lifeline Australia
                  </h3>
                  <div className="text-center bg-white dark:bg-gray-800 rounded-lg p-3 mb-2">
                    <p className="text-4xl font-bold text-green-600 dark:text-green-400">13 11 14</p>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300 mb-2">
                    24/7 crisis support and suicide prevention services
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold">
                    Available: 24/7
                  </p>
                </a>
              </div>

              <div className="bg-gradient-to-br from-sky-50 to-sky-100 dark:from-sky-900/30 dark:to-sky-800/30 p-6 rounded-xl shadow-lg border border-sky-200 dark:border-sky-700 hover:shadow-xl transition-all duration-300">
                <a
                  href="https://www.suicidecallbackservice.org.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2 hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                    Suicide Call Back Service
                  </h3>
                  <div className="text-center bg-white dark:bg-gray-800 rounded-lg p-3 mb-2">
                    <p className="text-4xl font-bold text-sky-600 dark:text-sky-400">1300 659 467</p>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300 mb-2">
                    Nationwide service for anyone affected by suicide
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold">
                    Available: 24/7
                  </p>
                </a>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-6 rounded-xl shadow-lg border border-blue-200 dark:border-blue-700 hover:shadow-xl transition-all duration-300">
                <a
                  href="https://www.beyondblue.org.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Beyond Blue
                  </h3>
                  <div className="text-center bg-white dark:bg-gray-800 rounded-lg p-3 mb-2">
                    <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">1300 22 4636</p>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300 mb-2">
                    Mental health support and counseling
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold">
                    Available: 24/7
                  </p>
                </a>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 p-6 rounded-xl shadow-lg border border-teal-200 dark:border-teal-700 hover:shadow-xl transition-all duration-300">
                <a
                  href="https://mensline.org.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                    MensLine Australia
                  </h3>
                  <div className="text-center bg-white dark:bg-gray-800 rounded-lg p-3 mb-2">
                    <p className="text-4xl font-bold text-teal-600 dark:text-teal-400">1300 78 99 78</p>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300 mb-2">
                    Professional telephone and online support for men
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold">
                    Available: 24/7
                  </p>
                </a>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/30 p-6 rounded-xl shadow-lg border border-pink-200 dark:border-pink-700 hover:shadow-xl transition-all duration-300">
                <a
                  href="https://kidshelpline.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                    Kids Helpline
                  </h3>
                  <div className="text-center bg-white dark:bg-gray-800 rounded-lg p-3 mb-2">
                    <p className="text-4xl font-bold text-pink-600 dark:text-pink-400">1800 55 1800</p>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300 mb-2">
                    Counselling service for young people aged 5-25
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold">
                    Ages: 5-25 | Available: 24/7
                  </p>
                </a>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 p-6 rounded-xl shadow-lg border border-orange-200 dark:border-orange-700 hover:shadow-xl transition-all duration-300">
                <a
                  href="https://www.braveenough.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                    Brave Enough Careline
                  </h3>
                  <div className="text-center bg-white dark:bg-gray-800 rounded-lg p-3 mb-2">
                    <p className="text-4xl font-bold text-orange-600 dark:text-orange-400">1800 272 838</p>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300 mb-2">
                    Freecall support line
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold">
                    Available: 24/7
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-sky-50 to-flame-50 dark:from-sky-900/30 dark:to-flame-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="font-serif text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Shame to Flame Ministry Support
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center">
              While we're not a crisis service, we're here to provide spiritual support, prayer, and guidance on your healing journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="/contact"
                className="bg-sky-50 dark:bg-sky-900/30 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center border border-sky-200 dark:border-sky-700"
              >
                <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">
                  Contact Us
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Send us a message for support and guidance
                </p>
              </a>
              <a
                href="/submit-prayer"
                className="bg-flame-50 dark:bg-flame-900/30 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center border border-flame-200 dark:border-flame-700"
              >
                <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">
                  Prayer Request
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Submit a prayer request for personal prayer support
                </p>
              </a>
              <a
                href="/healing-pathways"
                className="bg-sage-50 dark:bg-sage-900/30 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center border border-sage-200 dark:border-sage-700"
              >
                <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">
                  Healing Pathways
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Access guided healing resources and biblical support
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 dark:bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">
            You Are Not Alone
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            These resources provide immediate, professional support available 24/7.
            Reaching out for help is a sign of strength, not weakness.
          </p>
          <p className="text-lg text-flame-300 dark:text-flame-400 italic">
            "The Lord is close to the brokenhearted and saves those who are crushed in spirit." — Psalm 34:18
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-600 mt-8 opacity-70">
            Page Version: 1
          </p>
        </div>
      </section>
    </div>
  );
};

export default CrisisHelp;
