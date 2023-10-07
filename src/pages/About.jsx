import { motion } from 'framer-motion';

import Header from '../components/Header.jsx';
import styles from './About.module.css';

export default function AboutPage() {
  return (
    <>
      <Header />
      <motion.header
        id={styles.process}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.25, 0.5, 0.75, 1] }}
        exit={{ opacity: 1 }}
      >
        <h1>How it works</h1>
        <h2>Offer contract is uploaded by the buyer to Degreement</h2>
        <h2>
          Degreement creates a Smart Contract that encapsulate its contingencies
          and terms
        </h2>
        <h2>
          The document access is shared by buyer and seller, who can conduct
          negotiations through it in real-time to clearly see updates, counters,
          rejections, and acceptances of terms
        </h2>
        <h2>
          Once buyer and seller accept terms and conditions, title search is
          conducted instantly to generate a report
        </h2>
        <h2>
          Buyer finds the best title insurance provider based on the generated
          report to then purchase from (Degreement recommends partnered
          providers to simplify their search)
        </h2>
        <h2>
          Before closing, buyer sends any down-payment (+ any negotiated fees)
          to the Smart Contract. Seller sends the deed (+ other documentation
          and seller credits) to the Smart Contract
        </h2>
        <h2>
          Closing can now be conducted on an agreed-upon time, where buyer and
          seller sign digital signatures to satisfy the Smart Contract’s
          conditions, which releases the held funds to the seller and the deed
          (+ other documents and seller credits) to the buyer.{' '}
        </h2>
      </motion.header>
    </>
  );
}
