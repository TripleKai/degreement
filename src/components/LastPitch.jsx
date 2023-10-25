import { Link } from 'react-router-dom';

import styles from './LastPitch.module.css';

const LastPitch = (props) => {
  return (
    <div id={styles['last-pitch']}>
      <div id={styles['last-pitch-holder']}>
        <h1>Serve your clients better with Degreement</h1>
        <Link id={styles['request-trial-bottom']} onClick={props.onRequest}>
          Register Now
        </Link>
      </div>
    </div>
  );
};

export default LastPitch;
