'use client'

import styles from '@/styles/Accordion.module.scss';

import { ReactNode, useState } from 'react';
import clsx from 'clsx';

import { Button } from '@/components/common';
interface AccordionItemProps {
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  accordionItems: AccordionItemProps[];
  name: string;
}

export const Accordion = ({ accordionItems, name }: AccordionProps) => {
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

          <Button
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
