import logo from './logo.svg';
import { motion } from 'framer-motion';
import './App.css';
import Collapsible from './components/Collapsible';

function App() {
  const pVariants = {
    hidden: { x: -1000 },
    visible: { x: 0 },
  };

  const listVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        // duration: 0.1,
        delay: i * 0.3,
      },
    }),
  };

  const items = ['text1', 'text2', 'text3'];

  return (
    <div className='App'>
      <header className='App-header'>
        <motion.img
          // initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            // delay: 3,
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            repeatType: 'reverse',
          }}
          src={logo}
          className='App-logo'
          alt='logo'
        />
        <motion.p
          variants={pVariants}
          initial='hidden'
          animate='visible'
          transition={{ delay: 0.5 }}>
          Edit <code>src/App.js</code> and save to reload.
        </motion.p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
        {items.map((el, index) => (
          <motion.li
            variants={listVariants}
            initial='hidden'
            animate='visible'
            custom={index}
            key={el}>
            {el}
          </motion.li>
        ))}
      </header>
      <section className='section'>
        <Collapsible title='Toggle Content'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorum
          impedit repellat cupiditate laboriosam odio dignissimos adipisci!
          Corrupti voluptates cumque vero quas sit. Praesentium sed illum
          consequatur unde dolores laboriosam?
        </Collapsible>
      </section>
    </div>
  );
}

export default App;
