'use client'

import React from 'react';
import { Calendar, Heart, Sunrise, BookOpen, ArrowRight } from 'lucide-react';

const DailyFire = () => {
  const todaysDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const recentPosts = [
    {
      date: "Today",
      title: "Your Scars Tell a Story of Survival",
      excerpt: "Every scar you carry is evidence that you survived something that tried to destroy you. Today, let those scars remind you not of your pain, but of your strength.",
      scripture: "Isaiah 61:3",
      readTime: "3 min"
    },
    {
      date: "Yesterday",
      title: "When God Feels Silent",
      excerpt: "God's silence doesn't mean His absence. Sometimes He speaks in whispers that can only be heard by a heart that has learned to be still.",
      scripture: "1 Kings 19:12",
      readTime: "4 min"
    },
    {
      date: "2 days ago",
      title: "The Courage to Begin Again",
      excerpt: "Every sunrise is God's invitation to begin again. No matter how many times you've fallen, His mercies are new this morning.",
      scripture: "Lamentations 3:22-23",
      readTime: "3 min"
    },
    {
      date: "3 days ago",
      title: "Healing Isn't Linear",
      excerpt: "Some days you'll feel like you're moving backward. This is normal. Healing spirals upward, not straight up. Trust the process.",
      scripture: "Philippians 1:6",
      readTime: "5 min"
    }
  ];

  const categories = [
    { name: "Overcoming Shame", count: 45, color: "flame" },
    { name: "Grief & Loss", count: 32, color: "sky" },
    { name: "Anxiety & Fear", count: 28, color: "sage" },
    { name: "Depression", count: 24, color: "purple" },
    { name: "Spiritual Healing", count: 38, color: "yellow" },
    { name: "Relationships", count: 29, color: "rose" }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-flame-50 via-orange-50 to-yellow-50 dark:from-flame-900/30 dark:via-orange-900/30 dark:to-yellow-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-float mb-6">
            <Sunrise className="h-16 w-16 text-flame-500 mx-auto" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Daily Fire
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Daily encouragements, devotionals, and reflections designed to kindle hope 
            and strengthen your spirit on the healing journey. Let God's Word ignite 
            the flame of purpose within you.
          </p>
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
            <p className="text-flame-600 dark:text-flame-400 font-medium">{todaysDate}</p>
          </div>
        </div>
      </section>

      {/* Today's Fire */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-flame-50 to-orange-50 dark:from-flame-900/30 dark:to-orange-900/30 rounded-2xl p-8 mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-flame-500 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
            </div>
            
            <h2 className="font-serif text-3xl font-bold text-gray-800 dark:text-white mb-4 text-center">
              Today's Fire
            </h2>
            
            <article className="prose prose-lg max-w-none">
              <h3 className="font-serif text-2xl font-semibold text-flame-700 dark:text-flame-300 mb-4">
                Your Scars Tell a Story of Survival
              </h3>
              
              <blockquote className="border-l-4 border-flame-300 pl-6 mb-6 bg-white dark:bg-gray-800 rounded-r-lg p-4">
                <p className="font-serif text-lg text-gray-700 dark:text-gray-200 italic mb-2">
                  "To bestow on them a crown of beauty instead of ashes, the oil of joy instead of mourning, 
                  and a garment of praise instead of a spirit of despair."
                </p>
                <cite className="text-flame-600 dark:text-flame-400 font-medium">- Isaiah 61:3</cite>
              </blockquote>
              
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                Look at your hands today. Really look at them. Do you see the scars? The marks of battles fought and survived? 
                Each one tells a story—not of weakness, but of incredible strength.
              </p>
              
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                You might look at those scars with shame, wishing you could erase the evidence of your pain. 
                But God sees them differently. He sees proof that you refused to give up. He sees evidence 
                that His grace carried you through what seemed impossible.
              </p>
              
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                Your scars are not your shame—they are your strength made visible. They are proof that 
                you can survive hard things. They are evidence that God's power is made perfect in weakness.
              </p>
              
              <div className="bg-flame-100 dark:bg-flame-900/30 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-flame-800 dark:text-flame-300 mb-2">Today's Reflection:</h4>
                <p className="text-flame-700 dark:text-flame-300">
                  What story do your scars tell? Instead of hiding them, how might God want to use 
                  your survival story to bring hope to someone else who's still fighting?
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Prayer for Today:</h4>
                <p className="text-gray-700 dark:text-gray-200 italic">
                  "Lord, help me see my scars through Your eyes. Transform my shame into strength, 
                  my wounds into wisdom, and my pain into purpose. Use my story of survival to 
                  bring hope to others who are still fighting. Amen."
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-gradient-to-r from-sky-50 to-flame-50 dark:from-sky-900/30 dark:to-flame-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">
            Recent Daily Fires
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentPosts.map((post, index) => (
              <article key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                    <span className="text-sm text-flame-600 dark:text-flame-400">{post.readTime} read</span>
                  </div>
                  
                  <h3 className="font-serif text-xl font-semibold text-gray-800 dark:text-white mb-3 hover:text-flame-600 dark:hover:text-flame-400 transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-sky-600 dark:text-sky-400 font-medium">{post.scripture}</span>
                    <button className="text-flame-600 dark:text-flame-400 hover:text-flame-700 dark:hover:text-flame-300 font-medium flex items-center group">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium py-3 px-8 rounded-full border-2 border-gray-200 dark:border-gray-600 hover:border-flame-300 dark:hover:border-flame-600 transition-all duration-300 transform hover:scale-105">
              View All Daily Fires
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">
            Browse by Topic
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 hover:from-flame-50 hover:to-flame-100 dark:hover:from-flame-900/30 dark:hover:to-flame-800/30 rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-flame-200 dark:hover:border-flame-700">
                  <h3 className="font-serif text-lg font-semibold text-gray-800 dark:text-white group-hover:text-flame-700 dark:group-hover:text-flame-300 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-flame-600 dark:group-hover:text-flame-400">
                    {category.count} posts
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-900 dark:bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calendar className="h-12 w-12 text-flame-400 mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Never Miss Your Daily Fire
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Subscribe to receive daily encouragements directly in your inbox. 
            Start each day with hope, purpose, and God's truth.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-flame-500"
              />
              <button className="bg-flame-600 hover:bg-flame-700 text-white font-medium py-3 px-6 rounded-full transition-colors duration-200">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Unsubscribe anytime. We respect your privacy and will never spam you.
            </p>
          </div>
        </div>
      </section>

      {/* Encouragement */}
      <section className="py-16 bg-gradient-to-br from-sky-50 to-flame-50 dark:from-sky-900/30 dark:to-flame-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="h-12 w-12 text-sky-600 dark:text-sky-400 mx-auto mb-6" />
          <h2 className="font-serif text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Your Daily Dose of Hope
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Some days, all we need is a gentle reminder that we're not alone, that our pain has purpose, 
            and that God's love never fails. Daily Fire is designed to be that reminder—a spark of 
            hope to carry you through each day.
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <p className="text-gray-700 dark:text-gray-200 italic font-medium">
              "Each day is a gift from God, filled with new mercies and fresh possibilities. 
              Let His Word be the flame that lights your path and warms your heart."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DailyFire;