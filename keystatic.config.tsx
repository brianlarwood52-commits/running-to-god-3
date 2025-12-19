import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    // For local development, use 'local'
    // For production with GitHub, change to:
    // kind: 'github',
    // repo: 'your-username/your-repo-name',
    kind: 'local',
  },
  
  ui: {
    brand: {
      name: 'Running to God',
    },
    navigation: {
      'Content': ['journeyStops', 'campfireDevotions', 'dailyEncouragements'],
      'Pages': ['homePage', 'aboutPage', 'myStoryPage', 'whyThisMinistryPage'],
      'Settings': ['siteSettings'],
    },
  },

  singletons: {
    // Home Page Content
    homePage: singleton({
      label: 'Home Page',
      path: 'content/pages/home',
      schema: {
        heroTitle: fields.text({
          label: 'Hero Title',
          description: 'The main title on the home page',
        }),
        heroSubtitle: fields.text({
          label: 'Hero Subtitle',
          multiline: true,
        }),
        heroDescription: fields.text({
          label: 'Hero Description',
          multiline: true,
        }),
        ctaButtonText: fields.text({
          label: 'Call to Action Button Text',
        }),
        ctaButtonLink: fields.text({
          label: 'Call to Action Button Link',
        }),
        featuredVerse: fields.object({
          text: fields.text({ label: 'Verse Text', multiline: true }),
          reference: fields.text({ label: 'Verse Reference' }),
        }, { label: 'Featured Bible Verse' }),
      },
    }),

    // About Page
    aboutPage: singleton({
      label: 'About Page',
      path: 'content/pages/about',
      schema: {
        title: fields.text({ label: 'Page Title' }),
        content: fields.document({
          label: 'Page Content',
          formatting: true,
          links: true,
          dividers: true,
        }),
      },
    }),

    // My Story Page
    myStoryPage: singleton({
      label: 'My Story Page',
      path: 'content/pages/my-story',
      schema: {
        title: fields.text({ label: 'Page Title' }),
        subtitle: fields.text({ label: 'Subtitle', multiline: true }),
        content: fields.document({
          label: 'Your Story',
          formatting: true,
          links: true,
          dividers: true,
          images: {
            directory: 'public/images/story',
            publicPath: '/images/story',
          },
        }),
      },
    }),

    // Why This Ministry Page
    whyThisMinistryPage: singleton({
      label: 'Why This Ministry',
      path: 'content/pages/why-this-ministry',
      schema: {
        title: fields.text({ label: 'Page Title' }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          links: true,
          dividers: true,
        }),
      },
    }),

    // Site Settings
    siteSettings: singleton({
      label: 'Site Settings',
      path: 'content/settings/site',
      schema: {
        siteName: fields.text({ label: 'Site Name' }),
        tagline: fields.text({ label: 'Tagline' }),
        contactEmail: fields.text({ label: 'Contact Email' }),
        footerQuote: fields.object({
          text: fields.text({ label: 'Quote Text', multiline: true }),
          reference: fields.text({ label: 'Reference' }),
        }, { label: 'Footer Quote' }),
      },
    }),
  },

  collections: {
    // Journey Stops Collection
    journeyStops: collection({
      label: 'Journey Stops',
      slugField: 'title',
      path: 'content/journey/*',
      format: { contentField: 'fullDescription' },
      schema: {
        title: fields.slug({
          name: { label: 'Title', description: 'The name of this journey stop' },
        }),
        location: fields.text({
          label: 'Location',
          description: 'e.g., "Perth, Western Australia"',
        }),
        distance: fields.text({
          label: 'Distance from Perth',
          description: 'e.g., "725 km"',
        }),
        order: fields.integer({
          label: 'Order',
          description: 'The order in which this stop appears (1, 2, 3...)',
          defaultValue: 1,
        }),
        type: fields.select({
          label: 'Stop Type',
          options: [
            { label: 'City', value: 'city' },
            { label: 'Desert', value: 'desert' },
            { label: 'Beach', value: 'beach' },
            { label: 'Roadhouse', value: 'roadhouse' },
            { label: 'Camp', value: 'camp' },
            { label: 'Destination', value: 'destination' },
          ],
          defaultValue: 'roadhouse',
        }),
        shortDescription: fields.text({
          label: 'Short Description',
          description: 'A brief one-line description',
          multiline: true,
        }),
        fullDescription: fields.document({
          label: 'Full Story',
          description: 'The complete story of this journey stop',
          formatting: true,
          links: true,
          dividers: true,
          images: {
            directory: 'public/images/journey',
            publicPath: '/images/journey',
          },
        }),
        spiritualLesson: fields.text({
          label: 'Spiritual Lesson',
          description: 'What spiritual lesson did you learn here?',
          multiline: true,
        }),
        bibleVerse: fields.object({
          text: fields.text({ label: 'Verse Text', multiline: true }),
          reference: fields.text({ label: 'Reference (e.g., John 3:16)' }),
        }, { label: 'Bible Verse' }),
        featuredImage: fields.image({
          label: 'Featured Image',
          directory: 'public/images/journey',
          publicPath: '/images/journey',
        }),
        imageDescription: fields.text({
          label: 'Image Description',
          description: 'Alt text for the image',
        }),
      },
    }),

    // Campfire Devotions Collection
    campfireDevotions: collection({
      label: 'Campfire Devotions',
      slugField: 'title',
      path: 'content/campfire-devotions/*',
      format: { contentField: 'fullContent' },
      schema: {
        title: fields.slug({
          name: { label: 'Title' },
        }),
        theme: fields.text({
          label: 'Theme',
          description: 'e.g., "Finding Hope", "God\'s Provision"',
        }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Faith', value: 'faith' },
            { label: 'Hope', value: 'hope' },
            { label: 'Love', value: 'love' },
            { label: 'Peace', value: 'peace' },
            { label: 'Courage', value: 'courage' },
            { label: 'Trust', value: 'trust' },
            { label: 'Healing', value: 'healing' },
            { label: 'Purpose', value: 'purpose' },
          ],
          defaultValue: 'faith',
        }),
        shortDescription: fields.text({
          label: 'Short Description',
          multiline: true,
        }),
        fullContent: fields.document({
          label: 'Devotional Content',
          formatting: true,
          links: true,
          dividers: true,
        }),
        reflection: fields.text({
          label: 'Reflection Questions',
          multiline: true,
        }),
        prayer: fields.text({
          label: 'Prayer',
          multiline: true,
        }),
        bibleVerse: fields.object({
          text: fields.text({ label: 'Verse Text', multiline: true }),
          reference: fields.text({ label: 'Reference' }),
        }, { label: 'Bible Verse' }),
        journeyConnection: fields.text({
          label: 'Connected Journey Stop (slug)',
          description: 'Optional: Link to a journey stop by its slug',
        }),
        publishedDate: fields.date({
          label: 'Published Date',
        }),
      },
    }),

    // Daily Encouragements Collection
    dailyEncouragements: collection({
      label: 'Daily Encouragements',
      slugField: 'title',
      path: 'content/daily-encouragements/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({
          name: { label: 'Title' },
        }),
        date: fields.date({
          label: 'Date',
          description: 'The date for this encouragement',
        }),
        content: fields.document({
          label: 'Encouragement Content',
          formatting: true,
          links: true,
        }),
        bibleVerse: fields.object({
          text: fields.text({ label: 'Verse Text', multiline: true }),
          reference: fields.text({ label: 'Reference' }),
        }, { label: 'Bible Verse' }),
        prayer: fields.text({
          label: 'Short Prayer',
          multiline: true,
        }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Hope', value: 'hope' },
            { label: 'Strength', value: 'strength' },
            { label: 'Peace', value: 'peace' },
            { label: 'Joy', value: 'joy' },
            { label: 'Faith', value: 'faith' },
            { label: 'Love', value: 'love' },
            { label: 'Guidance', value: 'guidance' },
          ],
          defaultValue: 'hope',
        }),
      },
    }),
  },
});
