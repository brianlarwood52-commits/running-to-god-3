import { Metadata } from 'next';
import PremiumBibleReader from '@/components/PremiumBibleReader';

export const metadata: Metadata = {
  title: 'Premium Bible Study - Shame to Flame Ministry',
  description: 'Experience an immersive, offline-first KJV Bible study with highlighting, notes, cross-references, and advanced reading features.',
  keywords: 'KJV Bible study, Bible reading app, Bible notes, Bible highlights, offline Bible, premium Bible reader, Bible cross-references',
  openGraph: {
    title: 'Premium Bible Study - Advanced Scripture Reading Experience',
    description: 'Immersive KJV Bible study with highlighting, notes, cross-references, and offline support. Built for deep study and spiritual growth.',
    type: 'website',
  },
};

export default function BibleStudyPage() {
  return (
    <div className="min-h-screen">
      <PremiumBibleReader />
    </div>
  );
}
