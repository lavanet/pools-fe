import clsx from 'clsx';
import {
  HomeSectionPreview,
  HomeSectionDataCards,
  HomeSectionPools,
  HomeSectionHeroCTA,
  HomeSectionChains,
  HomeSectionHeroEmail,
  HomeSectionProducts,
  HomeDataProvider,
} from '@/components';
import styles from '@/styles/Home.module.scss'

// This tells Next.js to regenerate this page every 30 seconds
export const revalidate = 30;

export default function Home() {
  return (
    <section className={clsx(styles.cHome, "c-home")}>
      <div className="c-container">
        <HomeSectionPreview />
        <HomeDataProvider>
          <HomeSectionDataCards />
          <HomeSectionPools />
          <HomeSectionHeroCTA />
          <HomeSectionChains />
        </HomeDataProvider>
        <HomeSectionHeroEmail />
        <HomeSectionProducts/>
      </div>
    </section>
  );
}
