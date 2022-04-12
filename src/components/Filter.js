import React, { useState } from 'react';
import { AnimatePresence, motion, AnimateSharedLayout } from 'framer-motion';
import Button from './Button';

export default function Filter({ data }) {
  const [cards, setCards] = useState(data);

  const buttons = data.reduce(
    (acc, el) => {
      if (acc.includes(el.category)) return acc;
      return [...acc, el.category];
    },
    ['all']
  );

  const handleFilter = selector => {
    if (selector === 'all') return setCards(data);

    setCards(data.filter(el => el.category === selector));
  };

  return (
    <AnimateSharedLayout>
      <motion.div layout>
        <div>
          {buttons.map(btn => (
            <Button
              key={btn}
              text={btn}
              handleClick={() => handleFilter(btn)}
            />
          ))}
        </div>
        <motion.div
          layout
          style={{
            overflow: 'hidden',
            maxWidth: 400,
            border: '1px solid #ccc',
          }}>
          <AnimatePresence initial={false} exitBeforeEnter>
            {cards.map(el => (
              <motion.div
                layout
                key={el.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}>
                {el.title}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimateSharedLayout>
  );
}
