import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Collapsible = props => {
  const { title = 'click me', children } = props;

  const [isVisible, setIsVisible] = useState(true);

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
        <AnimatePresence initial={false}>
          {isVisible && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              style={{ overflow: 'hidden' }}
              //   transition={{ duration: 2 }}
            >
              <div
                style={{
                  padding: '.8rem 1.2rem',
                  width: 300,
                  border: '1px solid #ddd',
                }}>
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Collapsible;
