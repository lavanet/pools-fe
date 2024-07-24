import { Chains, CTA, CTAEmail, DataCards, Pools, Preview } from '@/modules';

export default function Home() {
  return (
    <>
      <Preview />
      <DataCards />
      <Pools />
      <CTA />
      <Chains />
      <CTAEmail />
    </>
  );
}
