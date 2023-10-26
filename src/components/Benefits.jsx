import { motion, useTransform } from 'framer-motion';

import images from '../assets/images.js';
import styles from './Benefits.module.css';

const Benefits = (props) => {
  const yBenefits1 = useTransform(props.scrollY, [1000, 1200], [100, 0]);
  const opacityBenefits1 = useTransform(
    props.scrollY,
    [1000, 1200, 1800, 2200],
    [0, 1, 1, 0]
  );

  const yBenefits2 = useTransform(props.scrollY, [1050, 1250], [100, 0]);
  const opacityBenefits2 = useTransform(
    props.scrollY,
    [1050, 1250, 1800, 2200],
    [0, 1, 1, 0]
  );

  const yBenefits3 = useTransform(props.scrollY, [1100, 1300], [100, 0]);
  const opacityBenefits3 = useTransform(
    props.scrollY,
    [1100, 1300, 1800, 2200],
    [0, 1, 1, 0]
  );

  const yBenefits4 = useTransform(props.scrollY, [1150, 1350], [100, 0]);
  const opacityBenefits4 = useTransform(
    props.scrollY,
    [1150, 1350, 1800, 2200],
    [0, 1, 1, 0]
  );

  return (
    <>
      <div id={styles.benefits}>
        <div id={styles['benefits-backdrop']}>
          <h1>With Degreement, you and your team will be able to</h1>
          <div id={styles['benefits-holder']}>
            <motion.section
              style={{ y: yBenefits1, opacity: opacityBenefits1 }}
            >
              <img src={images.handshakeIcon} />
              <h2>Close transactions in days rather than weeks</h2>
              <p>
                by utilizing software in place of manual processes to save weeks
                worth of time until closing
              </p>
            </motion.section>
            <motion.section
              style={{ y: yBenefits2, opacity: opacityBenefits2 }}
            >
              <img src={images.partnerIcon} />
              <h2>Attract more leads</h2>
              <p>
                by leveraging creative finance as a seamless and desired option,
                empowering both buyers and sellers
              </p>
            </motion.section>
            <motion.section
              style={{ y: yBenefits3, opacity: opacityBenefits3 }}
            >
              <img src={images.paymentsIcon} />
              <h2>Become a one-stop-shop for all FSBO transactions</h2>
              <p>
                using software in place of a Title company, Escrow, and Notary
                service all in one
              </p>
            </motion.section>
            <motion.section
              style={{ y: yBenefits4, opacity: opacityBenefits4 }}
            >
              <img src={images.leaderIcon} />
              <h2>Become recognized as an innovative leader</h2>
              <p>
                in the industry by using cutting-edge technology to drastically
                improve the transaction experience
              </p>
            </motion.section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
