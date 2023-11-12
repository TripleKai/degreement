import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import Contact from './Contact.jsx';
import styles from './Header.module.css';
import styles_features from './Features.module.css';

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

  function handleFAQ() {
    const element = document.getElementById(styles_features['hybrid-img']);
    element.scrollIntoView({ behavior: 'smooth' });
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
        <motion.button id={styles['how-it-works']} onClick={handleAbout}>
          How it Works
        </motion.button>
        <motion.button id={styles.faq} onClick={handleFAQ}>
          FAQ
        </motion.button>
        <motion.button id={styles.contact} onClick={handleContactOpen}>
          Contact
        </motion.button>
      </header>
    </>
  );
}
