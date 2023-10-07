import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import styles from './FAQItem.module.css';

const FAQItem = (props) => {
  const [isOpened, setIsOpened] = useState(false);

  const openHandler = () => {
    setIsOpened(!isOpened);
  };

  const faqItemClasses = isOpened
    ? styles['faq-question'] + ' ' + styles['faq-question-clicked']
    : styles['faq-question'];

  return (
    <>
      <button onClick={openHandler} className={faqItemClasses}>
        <motion.span
          animate={{
            rotate: isOpened ? 180 : 0,
          }}
          className={styles['faq-item-answer-icon']}
        >
          &#x25BC;
        </motion.span>
        {' ' + props.content.question}
      </button>
      <hr></hr>
      <AnimatePresence>
        {isOpened && (
          <motion.div animate={{ opacity: [0, 0.5, 1], y: [-100, 0] }}>
            <p>{props.content.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FAQItem;
