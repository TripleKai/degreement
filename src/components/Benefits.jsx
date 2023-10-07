import { motion, useTransform } from 'framer-motion';

import images from '../assets/images.js';

const Benefits = (props) => {
  const yBenefits = useTransform(props.scrollY, [1200, 1400], [100, 0]);
  const opacityBenefits = useTransform(
    props.scrollY,
    [1200, 1400, 1800, 2200],
    [0, 1, 1, 0]
  );

  return (
    <div id='benefits'>
      <h1>With Degreement, you and your team will be able to</h1>
      <motion.div
        id='benefits-holder'
        style={{ y: yBenefits, opacity: opacityBenefits }}
      >
        <section>
          <img src={images.handshakeIcon} />
          <h2>Close more deals than before</h2>
          <p>by leveraging creative finance as a seamless and desired option</p>
        </section>
        <section>
          <img src={images.partnerIcon} />
          <h2>Attract more leads</h2>
          <p>
            by being known for faster closing times and cheaper transaction
            costs, empowering both buyers and sellers
          </p>
        </section>
        <section>
          <img src={images.paymentsIcon} />
          <h2>Become a one-stop-shop for all FSBO clients</h2>
          <p>
            providing the additional value of a Title company, escrow, and
            notary service all in one and charge for it
          </p>
        </section>
        <section>
          <img src={images.leaderIcon} />
          <h2>Become recognized as an innovative leader</h2>
          <p>
            in the industry by using cutting-edge technology to drastically
            improve the transaction experience for clients
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default Benefits;
