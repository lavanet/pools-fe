'use client';

import styles from '@/styles/HomeSectionPoolsCard.module.scss';

import clsx from 'clsx';
import { NumericFormat } from 'react-number-format';

import { IPool } from '@/types';

import { ButtonLink } from '@/components';
import { formatNumber } from '@/utils/formatters';

type PoolsCardProps = IPool;

const RewardsList = [
  {title: "Rewards in this month", color: "#FFFFFF"},
  {title: "Future rewards", color: "#7679FF"},
  {title: "Past rewards", color: "#5E6167"},
]

export const HomeSectionPoolsCard = (
  {
    id,
    title,
    service,
    node_runner,
    requests,
    value,
    currency,
    monthly_rewards,
    future_rewards,
    past_rewards,
    icon,
    rewards_end,
    rewards_days_remaining,
    rpc_url,
  }: PoolsCardProps) => {
  const calculateRewardPercentages = (monthly_rewards?: number, future_rewards?: number, past_rewards?: number) => {
    const rewards = [monthly_rewards ?? 0, future_rewards ?? 0, past_rewards ?? 0];
    const total = rewards.reduce((sum: number, reward: number) => sum + reward, 0);

    if (total === 0) {
      return {
        monthlyPercentage: 0,
        futurePercentage: 0,
        pastPercentage: 0,
      };
    }

    const [monthlyPercentage, futurePercentage, pastPercentage] = rewards.map(
      (reward) => (reward / total) * 100
    );

    return {
      monthlyPercentage,
      futurePercentage,
      pastPercentage,
    };
  };

  const { monthlyPercentage, futurePercentage, pastPercentage } = calculateRewardPercentages(
    monthly_rewards,
    future_rewards,
    past_rewards
  );

  const combinedRewards = RewardsList.map((item, index) => ({
    ...item,
    percentage: [monthlyPercentage, futurePercentage, pastPercentage][index],
    value: [monthly_rewards, future_rewards, past_rewards][index] ?? 0,
  }));

  return (
    <article className={clsx(styles.cHomeSectionPoolsCards, "c-home-section-pools-card", id)}>

      <div className="c-home-section-pools-card-wrapper">

        <div className="c-home-section-pools-card-header">

          <div className="c-home-section-pools-card-header-text">
            <i>
              {icon}
            </i>

            <div>
              <h2 className="h5">{title}</h2>
              <small>{service}</small>
            </div>

          </div>

          <ul>
            <li>
              <em>RPC Providers:&nbsp;</em>
              <small>{node_runner}</small>
            </li>

            <li>
              <em>Total requests:&nbsp;</em>
              <small>{formatNumber(requests ?? 0, true)}</small>
            </li>
          </ul>

        </div>

        <div className='c-home-section-pools-card-rewards'>

          <div className='c-home-section-pools-card-rewards-header'>

            <span>
              <em>Total rewards&nbsp;</em>
              <small>(Updated in real-time)</small>
            </span>

            <p className="h6 sharp-medium">
              {value}
            </p>

            <div>
              <em>{rewards_days_remaining ? rewards_days_remaining + ' days' : ''}&nbsp;</em>
              <time>{rewards_end ? rewards_end : 'TBD'}</time>
            </div>

          </div>

          <div className='c-home-section-pools-card-rewards-progressbar'>
            {combinedRewards.map((bar, barIdx) => (
                <div
                  key={barIdx}
                  style={{
                    backgroundColor: bar.color,
                    maxWidth: `${bar.percentage}%`
                  }}
                />
              )
            )}
          </div>

        </div>

        <ul className="c-home-section-pools-card-rewards-data">

          {combinedRewards.map(({ title, color, value }, dataIdx) => (
            <li key={dataIdx}>
              <span>
                <i style={{ backgroundColor: `${color}` }}></i>
                {title}
              </span>

              <NumericFormat
                displayType="text"
                value={value}
                renderText={(value) => <span>{formatNumber(value, true)} {currency}</span>}
              />

            </li>
          ))}

        </ul>

        <div className="c-home-section-pools-card-footer">

          <ButtonLink
            href={rpc_url ?? 'http://docs.lavanet.xyz/provider-setup'}
            text='Run RPC node'
          />

          <ButtonLink
            href="https://www.lavanet.xyz/stakers"
            isExternal
            btnColor="white"
            text="Earn Rewards"
          />

        </div>

      </div>

    </article>
  );
};
