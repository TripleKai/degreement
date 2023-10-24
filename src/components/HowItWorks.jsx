import { motion } from 'framer-motion';

import styles from './HowItWorks.module.css';

const HowItWorks = () => {
  return (
    <motion.header
      id={styles.process}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.25, 0.5, 0.75, 1] }}
      exit={{ opacity: 1 }}
    >
      <h1>How it works</h1>
      <div id={styles.content}>
        <h2>
          <b>Step 1: </b>Create Digital Offer/LOI and Financing Proposal
        </h2>
        <h3>
          Offer contract and financing proposal are created by the buyer on
          Degreement. Degreement creates a <b>Smart Contract</b> that
          encapsulates contingencies and terms.
        </h3>
        <h2>
          <b>Step 2: </b>Forget About Emails, Calls, and Texts When Negotiating
          Terms and Contingencies
        </h2>
        <h3>
          The document access is shared by buyer and seller, who can now conduct
          negotiations through it in real-time to clearly see updates, counters,
          rejections, and acceptances of terms.
        </h3>
        <h2>
          <b>Step 3: </b>Instant Title Search Conducted
        </h2>
        <h3>
          Once buyer and seller accept terms and conditions, the seller note is
          created (if seller financed) and title search is conducted to generate
          a report in short order.
        </h3>
        <h2>
          <b>Step 4: </b>Choose Title Insurance
        </h2>
        <h3>
          The buyer chooses a Title Insurance policy from Degreement. The paying
          party can send funds to the <b>Smart Contract</b>.
        </h3>
        <h2>
          <b>Step 5: </b>Send Funds and Documents to the Smart Contract For
          Closing
        </h2>
        <h3>
          Before closing, the buyer sends any down-payment (+ any negotiated
          fees) to the <b>Smart Contract</b>. The seller sends the deed (+ other
          documentation and seller credits) to the <b>Smart Contract</b>.
        </h3>
        <h2>
          <b>Step 6: </b>Close with Remote Notary and Settle Payments Instantly
        </h2>
        <h3>
          Closing can now be conducted by remote notary on an agreed-upon time,
          where buyer and seller sign digital signatures to satisfy the{' '}
          <b>Smart Contract’s</b> conditions. This releases the held funds to
          the seller, the deed (+ other documents and seller credits) to the
          buyer, and commissions to the agents.{' '}
        </h3>
        <h2>
          <b>Step 7: </b>Degreement Records the Transaction
        </h2>
        <h3>
          Degreement sends the recording request to the local Register of Deeds
          office to officially record the transaction.
        </h3>
      </div>
    </motion.header>
  );
};

export default HowItWorks;
