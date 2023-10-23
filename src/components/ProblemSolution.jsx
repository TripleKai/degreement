import { motion, useTransform } from 'framer-motion';

import images from '../assets/images.js';
import styles from './ProblemSolution.module.css';

const ProblemSolution = (props) => {
  const xHouses = useTransform(props.scrollY, [200, 500], [-100, 0]);
  const opacityHouses = useTransform(
    props.scrollY,
    [200, 500, 900, 1300],
    [0, 1, 1, 0]
  );

  return (
    <div id={styles['problem-solution-holder']}>
      <motion.div
        id={styles['problem-solution-img-holder']}
        style={{ opacity: opacityHouses, x: xHouses }}
      >
        <div id={styles['problem-solution-img-holder2']}>
          <img id={styles['houses-img']} src={images.housesImg} />
          <img id={styles['houses2-img']} src={images.houses2Img} />
          <img id={styles['houses3-img']} src={images.houses3Img} />
        </div>
      </motion.div>
      <motion.div id={styles['problem-solution']}>
        <h1>How Do You Thrive in a Difficult Real Estate Market?</h1>
        <p id={styles['eye-catcher']}>
          <b>When markets dry up</b> due to high interest rates, lack of
          inventory, or simply low demand, finding leads and making deals happen
          become incredibly difficult
        </p>
        <p className={styles.explanation}>
          <b>Conventional wisdom</b> says this predicament is a natural part of
          the market and business must prepare for a slow-down. As history
          shows, and as you may have experienced, this results in fewer buyers
          and even fewer sellers. Conventional bank loans with high interest
          rates become a serious bottleneck for an indefinite period of time.
        </p>
        <p className={styles.explanation}>
          <b>Why take the conventional route</b> when creative finance options
          exist? Both buyer and seller can negotiate financing terms that suit
          them best without depending on external lenders. Furthermore, today's
          technology enables the possibility of automating contractual
          agreements through smart contracts. This allows replacement of
          intermediaries, such as Title companies, and allows for savings in
          closing fees and shorten the time until closing by weeks. Moreover, a
          purely digital process makes the experience of seller financing or
          "Subject To" deal structure intuitive for all parties.
        </p>
      </motion.div>
    </div>
  );
};

export default ProblemSolution;
