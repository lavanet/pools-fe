import styles from '@/styles/Home.module.scss'
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
import { fetchHomeData } from '@/utils/homeUtils';
import { processHomeData } from '@/utils/homeUtils';

export default async function Home() {
  try {
    const rawData = await fetchHomeData();
    const data = processHomeData(rawData);

    return (
      <section className={clsx(styles.cHome, "c-home")}>
        <div className="c-container">
          <HomeSectionPreview />
          <HomeSectionDataCards dataCards={data.dataCards} />
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
