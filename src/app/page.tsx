import styles from '@/styles/Home.module.scss'

import { Suspense } from 'react';
import clsx from 'clsx';
import {
  HomeSectionPreview,
  HomeSectionDataCards,
  HomeSectionPools,
  HomeSectionHeroCTA,
  HomeSectionChains,
  HomeSectionHeroEmail,
  HomeSectionProducts,
} from '@/components';
import { fetchProcessedHomeData } from '@/utils/homeUtils';
import { ProcessedHomeData } from '@/types';

function LoadingFallback() {
  return <div>Loading...</div>;
}

function ErrorFallback({ error }: { error: Error }) {
  return <div>Error: {error.message}</div>;
}

async function HomeContent() {
  try {
    let processedData: ProcessedHomeData | null = null;
    let error: Error | null = null;

    try {
      processedData = await fetchProcessedHomeData();
    } catch (e) {
      error = e instanceof Error ? e : new Error('An unknown error occurred');
      console.error('Error fetching processed home data:', error);
    }

    if (error) {
      return <ErrorFallback error={error} />;
    }

    if (!processedData) {
      return <LoadingFallback />;
    }

    return (
      <>
        <HomeSectionPreview />
        <HomeSectionDataCards dataCards={processedData.dataCards} />
        <HomeSectionPools pools={processedData.pools} />
        <HomeSectionHeroCTA />
        <HomeSectionChains chains={processedData.chains} />
        <HomeSectionHeroEmail />
        <HomeSectionProducts />
      </>
    );
  } catch (error) {
    console.error('Error fetching home data:', error);
    return <div>Error loading data. Please try again later.</div>;
  }
}

export default function Home() {
  return (
    <section className={clsx(styles.cHome, "c-home")}>
      <div className="c-container">
        <Suspense fallback={<div>Loading...</div>}>
          <HomeContent />
        </Suspense>
      </div>
    </section>
  );
}
