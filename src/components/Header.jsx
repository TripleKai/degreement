import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import Contact from './Contact.jsx';
import styles from './Header.module.css';

export default function Header() {
  const [contactOpen, setContactOpen] = useState(false);
  const navigate = useNavigate();

  function handleHome() {
    navigate('/');
  }

  function handleContactOpen() {
    setContactOpen(true);
  }

  function handleContactClose() {
    setContactOpen(false);
  }

  function handleAbout() {
    navigate('/how-it-works');
  }

  return (
    <>
      <AnimatePresence>
        {contactOpen && <Contact onDone={handleContactClose} />}
      </AnimatePresence>

      <header id={styles['main-header']}>
        <motion.button id={styles.title} onClick={handleHome}>
          Degreement
        </motion.button>
        <motion.button
          id={styles['how-it-works']}
          onClick={handleAbout}
          // className='button'
        >
          How it Works
        </motion.button>
        <motion.button
          id={styles.contact}
          onClick={handleContactOpen}
          // className='button'
        >
          Contact
        </motion.button>
      </header>
    </>
  );
}
