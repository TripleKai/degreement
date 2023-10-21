import { motion, useTransform } from 'framer-motion';

import images from '../assets/images.js';
import styles from './Benefits.module.css';

const Benefits = (props) => {
  const yBenefits = useTransform(props.scrollY, [1200, 1400], [100, 0]);
  const opacityBenefits = useTransform(
    props.scrollY,
    [1200, 1400, 1800, 2200],
    [0, 1, 1, 0]
  );

  return (
    <>
      <div id={styles.benefits}>
        <div id={styles['benefits-backdrop']}>
          <h1>With Degreement, you and your team will be able to</h1>
          <motion.div
            id={styles['benefits-holder']}
            style={{ y: yBenefits, opacity: opacityBenefits }}
          >
            <section>
              <img src={images.handshakeIcon} />
              <h2>Close transactions in days rather than weeks</h2>
              <p>
                by utilizing software in place of manual processes to save weeks
                worth of time until closing
              </p>
            </section>
            <section>
              <img src={images.partnerIcon} />
              <h2>Attract more leads</h2>
              <p>
                by leveraging creative finance as a seamless and desired option,
                empowering both buyers and sellers
              </p>
            </section>
            <section>
              <img src={images.paymentsIcon} />
              <h2>Become a one-stop-shop for all FSBO transactions</h2>
              <p>
                using software in place of a Title company, Escrow, and
                Notary service all in one
              </p>
            </section>
            <section>
              <img src={images.leaderIcon} />
              <h2>Become recognized as an innovative leader</h2>
              <p>
                in the industry by using cutting-edge technology to drastically
                improve the transaction experience
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
