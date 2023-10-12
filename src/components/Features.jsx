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
          <b> + Smart Contract Offer Letter and Note Creation - </b>
          Easily create and modify smart contracts to fit your client's seller
          finance offer or proposal. Create the seller's note as a digital
          document as well. All contracts are shared documents - you, your
          client, and counterparty have access and can negotiate and make
          ammendments online to stay updated in real-time.
        </p>
        <p className={styles.explanation}>
          <b>+ Instant Title Search - </b>
          Conduct a preliminary Title search through the automated search
          system. The tool integrates multiple industry-standard title search
          softwares to provide an aggregated, comprehensive report.
        </p>
        <p className={styles.explanation}>
          <b>+ Virtual Escrow - </b>
          Hold funds directly on software without the need to open or maintain
          traditional accounts. Funds (for earnest money, downpayments, seller
          credits, etc.) are stored directly on the blockchain, impervious to
          fraud or manipulation. Documents, such as deed and warranties, can
          also be stored.
        </p>
        <p className={styles.explanation}>
          <b>+ Virtual Notary - </b>
          Conduct notary through the integrated remote notary and clearly
          validate transactions by accessing on-chain data. The validation
          serves as the notary.
        </p>
        <p className={styles.explanation}>
          <b>+ Closing Transaction - </b>
          Conduct the closing transaction and documentation through digital
          signature and smart contract contingency fulfillment. All held funds
          and documents are released to appropriate parties, including agent
          commissions. Degreement will send the recording request to the local
          Register of Deeds office for you.
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
