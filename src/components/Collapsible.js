import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Collapsible = props => {
  const { title = 'click me', children } = props;

  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <div className='collapse-container'>
        <div
          style={{
            backgroundColor: '#ddd',
            width: 300,
            padding: '.8rem 1.2rem',
          }}
          onClick={() => handleVisibility()}>
          {title}
        </div>
        <AnimatePresence>
          {isVisible && (
            <motion.div style={{ padding: '.8rem 1.2rem' }}>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Collapsible;
