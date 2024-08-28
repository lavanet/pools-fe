import {
  HomeSectionPreview,
  HomeSectionDataCards,
  HomeSectionPools,
  HomeSectionCTA,
  HomeSectionChains,
  HomeSectionCTAEmail,
  HomeSectionProducts,
} from '@/components';


export default function Home() {
  return (
    <>
      <HomeSectionPreview />
      <HomeSectionDataCards />
      <HomeSectionPools />
      <HomeSectionCTA />
      <HomeSectionChains />
      <HomeSectionCTAEmail />
      <HomeSectionProducts/>
    </>
  );
}
