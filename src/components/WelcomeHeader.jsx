import { motion, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

import RequestTrialForm from './RequestTrialForm';
import useInput from '../hooks/use-input';
import images from '../assets/images.js';
import styles from './WelcomeHeader.module.css';

const WelcomeHeader = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameValid,
    isError: firstNameError,
    valueChangedHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== '', props.params.isRequestAttempted);

  const {
    value: enteredLastName,
    isValid: enteredLastNameValid,
    isError: lastNameError,
    valueChangedHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== '', props.params.isRequestAttempted);

  const {
    value: enteredCompanyName,
    valueChangedHandler: companyNameChangeHandler,
    reset: resetCompanyNameInput,
  } = useInput((value) => value.trim() !== '', props.params.isRequestAttempted);

  const {
    value: enteredEmail,
    isValid: enteredEmailValid,
    isError: emailError,
    valueChangedHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(
    (value) => value.trim().includes('@'),
    props.params.isRequestAttempted
  );

  const requesterInfo = {
    date: new Date().toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    time: new Date().toLocaleTimeString(),
    firstName: enteredFirstName,
    lastName: enteredLastName,
    companyName: enteredCompanyName,
    email: enteredEmail,
  };

  props.params.inputInfo({
    requesterInfo,
    enteredFirstNameValid,
    enteredLastNameValid,
    enteredEmailValid,
    resetFirstNameInput,
    resetLastNameInput,
    resetCompanyNameInput,
    resetEmailInput,
  });

  let isSending = props.params.isSending;

  const params = {
    isSending,
    enteredFirstName,
    enteredLastName,
    enteredCompanyName,
    enteredEmail,
    firstNameError,
    lastNameError,
    emailError,
    firstNameChangeHandler,
    lastNameChangeHandler,
    companyNameChangeHandler,
    emailChangeHandler,
    firstNameBlurHandler,
    lastNameBlurHandler,
    emailBlurHandler,
  };

  const yHandshake = useTransform(props.params.scrollY, [0, 500], [0, 300]);
  const opacityHandshake = useTransform(
    props.params.scrollY,
    [0, 200, 300, 500],
    [1, 0.5, 0.5, 0]
  );

  const yText = useTransform(props.params.scrollY, [0, 500], [0, 300]);
  const opacityText = useTransform(props.params.scrollY, [0, 500], [1, 0]);

  return (
    <motion.header
      id={styles['welcome-header']}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.25, 0.5, 0.75, 1] }}
      exit={{ opacity: 1 }}
    >
      <motion.div id={styles['welcome-header-content']}>
        {!props.params.trial && (
          <motion.div
            style={{
              y: yText,
              opacity: opacityText,
            }}
          >
            <h1>Creative Financing Made Easy</h1>
          </motion.div>
        )}
        {!props.params.isSent && !props.params.trial && (
          <motion.div
            style={{
              y: yText,
              opacity: opacityText,
            }}
          >
            <h2>
              Close bankless property transactions faster and cheaper with
              Creative Finance, Smart Contracts, and Blockchain Technology
            </h2>
            <Link
              id={styles['request-trial']}
              onClick={props.params.requestTrialHandler}
            >
              Register Now
            </Link>
          </motion.div>
        )}
        {props.params.trial && (
          <>
            <h1>Creative Financing Made Easy</h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 1] }}
              exit={{ opacity: 0 }}
            >
              <h2 style={{ color: 'rgb(164, 92, 187)' }}>
                Degreement is currently under development. Register now to get
                free lifetime access once it's available and stay up to date on
                its development.
              </h2>
              <h2 style={{ color: '#84b0fc' }}>Enter your information</h2>
              <RequestTrialForm
                params={params}
                onSubmit={props.params.submitHandler}
                onCancel={props.params.cancelHandler}
              />
            </motion.div>
          </>
        )}
        {props.params.isSent && !props.params.trial && (
          <motion.h2
            style={{
              y: yText,
              opacity: opacityText,
            }}
          >
            <b>
              Congrats {JSON.parse(localStorage.getItem('firstName'))}! You will
              have free lifetime access once Degreement is launched! Check your
              email for further updates.
            </b>
          </motion.h2>
        )}
        {!props.params.isSent && !props.params.trial && (
          <motion.div
            style={{
              y: yText,
              opacity: opacityText,
            }}
          >
            <h2>
              <b>Close sales fast with Smart Contract powered:</b>
            </h2>
            <h3>Seller Financing</h3>
            <h3>Subject To</h3>
            <h3>Cash Offer</h3>
            <h3>Hybrid Financing</h3>
          </motion.div>
        )}
      </motion.div>
      <motion.img
        id={styles['handshake-img']}
        style={{ opacity: opacityHandshake, y: yHandshake }}
        src={images.handshakeImg}
      />
    </motion.header>
  );
};

export default WelcomeHeader;
