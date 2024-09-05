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
import styles from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <section className={clsx(styles.cHome, "c-home")}>
      <div className="c-container">
        <HomeSectionPreview />
        <HomeSectionDataCards />
        <HomeSectionPools />
        <HomeSectionHeroCTA />
        <HomeSectionChains />
        <HomeSectionHeroEmail />
        <HomeSectionProducts/>
      </div>
    </section>
  );
}
