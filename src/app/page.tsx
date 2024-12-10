import styles from '@/styles/Home.module.scss'
import clsx from 'clsx';
import {
  HomeSectionPreview,
  CardDataSection,
  HomeSectionPools,
  HomeSectionHeroCTA,
  HomeSectionChains,
  HomeSectionHeroEmail,
  HomeSectionProducts,
} from '@/components';
import { fetchHomeData, processHomeData } from '@/utils';

export default async function Home() {
  try {
    const rawData = await fetchHomeData();
    const data = processHomeData(rawData);

    return (
      <section className={clsx(styles.cHome, "c-home")}>
        <div className="c-container">
          <HomeSectionPreview />
          <CardDataSection dataCards={data.dataCards} />
          <HomeSectionPools pools={data.pools} />
          <HomeSectionHeroCTA />
          <HomeSectionChains chains={data.chains} />
          <HomeSectionHeroEmail />
          <HomeSectionProducts />
        </div>
      </section>
    );
  } catch (error) {
    return <div>Error loading data. Please try again later.</div>;
  }
}
