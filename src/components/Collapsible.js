import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Collapsible = props => {
  const { title = 'click me', children } = props;

  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => setIsVisible(true);

  return (
    <>
      <div
        style={{ backgroundColor: '#ddd', width: 300, padding: '.8rem 1.2rem' }}
        onClick={() => handleVisibility()}>
        {title}
      </div>
      <AnimatePresence>
        {isVisible && <div style={{ padding: '.8rem 1.2rem' }}>{children}</div>}
      </AnimatePresence>
    </>
  );
};

export default Collapsible;
