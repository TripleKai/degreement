import { motion, useTransform } from 'framer-motion';

import images from '../assets/images.js';

const Features = (props) => {
  const xContracts = useTransform(props.scrollY, [1800, 2200], [-200, 0]);
  const opacityContracts = useTransform(
    props.scrollY,
    [1800, 2200, 2400],
    [0, 1, 1]
  );

  return (
    <>
      <motion.div
        id='features-img-holder'
        style={{ opacity: opacityContracts, x: xContracts }}
      >
        <img
          id='contract-img'
          // style={{ opacity: opacityCity, y: yCity }}
          // animate={{ opacity: 1 }}
          src={images.contractImg}
        />
        <img
          id='arrow-down'
          // style={{ opacity: opacityCity, y: yCity }}
          // animate={{ opacity: 1 }}
          src={images.arrowDownIcon}
        />
        <img
          id='laptop-img'
          // style={{ opacity: opacityCity, y: yCity }}
          // animate={{ opacity: 1 }}
          src={images.laptopImg}
        />
      </motion.div>
      <motion.div id='features'>
        <h1>What Tools Are Included?</h1>
        <p className='explanation'>
          <b> + Smart Contract Offer Letter -</b>{' '}
          <i>
            Easily create and modify smart contracts to fit your client's seller
            finance offer or proposal. You and your clients have access and can
            stay updated in real-time.
          </i>
        </p>
        <p className='explanation'>
          <b>+ Instant Title Search -</b>{' '}
          <i>
            Conduct a preliminary Title search through the automated search
            system. The tool integrates multiple industry-standard title search
            softwares to provide a comprehensive report.
          </i>
        </p>
        <p className='explanation'>
          <b>+ Virtual Escrow -</b>{' '}
          <i>
            Hold funds directly on software without the need to open or maintain
            traditional accounts. Funds are stored directly on the blockchain,
            impervious to fraud or manipulation.
          </i>
        </p>
        <p className='explanation'>
          <b>+ Virtual Notary -</b>{' '}
          <i>
            Clearly validate transactions by accessing on-chain data. The
            validation serves as the notary.
          </i>
        </p>
        <p className='explanation'>
          <b>+ Closing Transaction -</b>{' '}
          <i>
            Conduct the closing transaction and documentation through digital
            signature and smart contract contingency fulfillment.
          </i>
        </p>
      </motion.div>
    </>
  );
};

export default Features;
