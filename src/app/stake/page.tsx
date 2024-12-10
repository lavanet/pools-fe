import { CardDataSection, StakeSectionHeader } from '@/components';
import { StakeSectionDataCards } from '@/utils';

export default async function Stake() {
  return (
    <section className="cStake">
      <div className='c-container'>
        <StakeSectionHeader/>
        <CardDataSection dataCards={StakeSectionDataCards}/>

      </div>
    </section>
  )
}