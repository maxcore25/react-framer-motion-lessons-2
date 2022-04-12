import React from 'react';
import { motion } from 'framer-motion';

export default function Button(props) {
  const { text, handleClick = Function.prototype } = props;

  return (
    <motion.button
      layout
      whileHover={{ backgroundColor: '#ddd' }}
      whileTap={{ backgroundColor: '#ccc' }}
      onClick={handleClick}>
      {text}
    </motion.button>
  );
}
