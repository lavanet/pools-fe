'use client'

import { ReactNode, useState } from 'react';
import clsx from 'clsx';
import { CustomButton } from '@/components/common';
import styles from '@/styles/CustomAccordion.module.scss';
interface CustomAccordionItemProps {
  title: string;
  content: ReactNode;
}

interface CustomAccordionProps {
  accordionItems: CustomAccordionItemProps[];
  name: string;
}

export const CustomAccordion = ({ accordionItems, name }: CustomAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === `${name}-${index}` ? null : `${name}-${index}`);
  };

  return (
    <div className={clsx(styles.cAccordion, "c-accordion")}>

      {accordionItems.map((accordion, accordionIdx) => (

        <div
          className="c-accordion-item"
          key={`${name}-${accordionIdx}`}
        >

          <CustomButton
            extraClassName={clsx("c-accordion-item-toggle", openIndex === `${name}-${accordionIdx}` && 'is-open')}
            text={accordion.title}
            btnVariant="link"
            hasChevronIcon
            aria-expanded={openIndex === `${name}-${accordionIdx}`}
            onClick={() => toggleOpen(accordionIdx)}
          />

          <div className={clsx("c-accordion-item-content", openIndex === `${name}-${accordionIdx}` && 'is-open')}>

            <div className='c-accordion-item-content-wrapper'>
              {accordion.content}
            </div>

          </div>

        </div>
      ))}

    </div>
  );
};