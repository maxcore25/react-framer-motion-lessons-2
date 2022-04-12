import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from './Button';

export default function Filter({ data }) {
  const [cards, setCards] = useState(data.filter(el => el.category === 'cars'));

  const buttons = data.reduce((acc, el) => {
    if (acc.includes(el.category)) return acc;
    return [...acc, el.category];
  }, []);

  const handleFilter = selector => {
    setCards(data.filter(el => el.category === selector));
  };

  return (
    <div>
      <div>
        {buttons.map(btn => (
          <Button key={btn} text={btn} handleClick={() => handleFilter(btn)} />
        ))}
      </div>
      <div style={{ overflow: 'hidden', maxWidth: 400 }}>
        <AnimatePresence initial={false} exitBeforeEnter>
          {cards.map(el => (
            <motion.div
              key={el.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}>
              {el.title}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
