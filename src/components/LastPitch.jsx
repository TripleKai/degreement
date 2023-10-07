import { Link } from 'react-router-dom';

const LastPitch = (props) => {
  return (
    <div id='last-pitch'>
      <div id='last-pitch-holder'>
        <h1>Serve your clients with Degreement!</h1>
        <Link id='request-trial-bottom' onClick={props.onRequest}>
          Request Free Trial
        </Link>
      </div>
    </div>
  );
};

export default LastPitch;
