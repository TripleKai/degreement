import { motion, useTransform } from 'framer-motion';

import images from '../assets/images.js';

const ProblemSolution = (props) => {
  const xHouses = useTransform(props.scrollY, [200, 500], [-100, 0]);
  const opacityHouses = useTransform(
    props.scrollY,
    [200, 500, 900, 1300],
    [0, 1, 1, 0]
  );

  return (
    <>
      <motion.div
        id='problem-solution-img-holder'
        style={{ opacity: opacityHouses, x: xHouses }}
      >
        <img
          id='houses-img'
          // style={{ opacity: opacityCity, y: yCity }}
          // animate={{ opacity: 1 }}
          src={images.housesImg}
        />
        <img
          id='houses2-img'
          // style={{ opacity: opacityCity, y: yCity }}
          // animate={{ opacity: 1 }}
          src={images.houses2Img}
        />
        <img
          id='houses3-img'
          // style={{ opacity: opacityCity, y: yCity }}
          // animate={{ opacity: 1 }}
          src={images.houses3Img}
        />
      </motion.div>
      <motion.div id='problem-solution'>
        <h1>How Do You Thrive in a Difficult Real Estate Market?</h1>
        <p id='eye-catcher'>
          <b>When markets dry up</b> due to high interest rates, lack of
          inventory, or simply low demand, finding leads and making deals happen
          become incredibly difficult
        </p>
        <p className='explanation'>
          <b>Conventional wisdom</b> says this predicament is a natural part of
          the market and business must prepare for a slow-down. As history
          shows, and as you may have experienced, this results in fewer buyers
          and even fewer sellers. Conventional bank loans with high interest
          rates become the bottleneck for you and your clients for an indefinite
          period of time.
        </p>
        <p className='explanation'>
          <b>Why take the conventional route</b> when creative finance options
          exist? On top of that, today's technology enables the possibility of
          automating contractual agreements through smart contracts. This allows
          replacement of intermediaries, such as Title companies. This empowers
          your clients to save huge on time and fees while negotiating financing
          terms that suit all parties. Moreover, a purely digital process makes
          the experience of seller financing intuitive for both agents and
          clients.
        </p>
      </motion.div>
    </>
  );
};

export default ProblemSolution;
