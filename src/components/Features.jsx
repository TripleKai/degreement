import { motion, useTransform } from 'framer-motion';

import images from '../assets/images.js';
import styles from './Features.module.css';

const Features = (props) => {
  const xContracts = useTransform(props.scrollY, [1500, 1900], [-200, 0]);
  const opacityContracts = useTransform(
    props.scrollY,
    [1500, 1900, 2400],
    [0, 1, 1]
  );

  return (
    <div id={styles['features-holder']}>
      <motion.div id={styles.features}>
        <h1>What Tools Are Included?</h1>
        <p className={styles.explanation}>
          <b> + Smart Contract Offer Letter -</b>{' '}
          <i>
            Easily create and modify smart contracts to fit your client's seller
            finance offer or proposal. You and your clients have access and can
            stay updated in real-time.
          </i>
        </p>
        <p className={styles.explanation}>
          <b>+ Instant Title Search -</b>{' '}
          <i>
            Conduct a preliminary Title search through the automated search
            system. The tool integrates multiple industry-standard title search
            softwares to provide a comprehensive report.
          </i>
        </p>
        <p className={styles.explanation}>
          <b>+ Virtual Escrow -</b>{' '}
          <i>
            Hold funds directly on software without the need to open or maintain
            traditional accounts. Funds are stored directly on the blockchain,
            impervious to fraud or manipulation.
          </i>
        </p>
        <p className={styles.explanation}>
          <b>+ Virtual Notary -</b>{' '}
          <i>
            Clearly validate transactions by accessing on-chain data. The
            validation serves as the notary.
          </i>
        </p>
        <p className={styles.explanation}>
          <b>+ Closing Transaction -</b>{' '}
          <i>
            Conduct the closing transaction and documentation through digital
            signature and smart contract contingency fulfillment.
          </i>
        </p>
      </motion.div>
      <motion.div
        id={styles['features-img-holder']}
        style={{ opacity: opacityContracts, x: xContracts }}
      >
        <div id={styles['features-holder2']}>
          <img id={styles['contract-img']} src={images.contractImg} />
          <img id={styles['arrow-down']} src={images.arrowDownIcon} />
          <img id={styles['laptop-img']} src={images.laptopImg} />
        </div>
      </motion.div>
    </div>
  );
};

export default Features;
