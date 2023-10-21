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
    email: enteredEmail,
  };

  props.params.inputInfo({
    requesterInfo,
    enteredFirstNameValid,
    enteredLastNameValid,
    enteredEmailValid,
    resetFirstNameInput,
    resetLastNameInput,
    resetEmailInput,
  });

  let isSending = props.params.isSending;

  const params = {
    isSending,
    enteredFirstName,
    enteredLastName,
    enteredEmail,
    firstNameError,
    lastNameError,
    emailError,
    firstNameChangeHandler,
    lastNameChangeHandler,
    emailChangeHandler,
    firstNameBlurHandler,
    lastNameBlurHandler,
    emailBlurHandler,
  };

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
      <motion.div
        id={styles['welcome-header-content']}
        style={{
          y: yText,
          opacity: opacityText,
        }}
      >
        <h1>Creative Financing Made Easy</h1>
        {!props.params.trial && (
          <>
            <h2>
              Close sales faster and cheaper for clients with Creative Finance,
              Smart Contracts, and Blockchain Technology
            </h2>
            <h2>
              <i>Opt-out of antiquated systems</i>
            </h2>
          </>
        )}
        {props.params.trial && (
          <>
            <h2 style={{ color: 'rgb(164, 92, 187)' }}>
              Degreement is currently under development. Register to get free
              access once it's available and stay up to date on its development.
            </h2>
            <h2 style={{ color: '#84b0fc' }}>Enter your information</h2>
          </>
        )}
        {!props.params.trial && (
          <Link
            id={styles['request-trial']}
            onClick={props.params.requestTrialHandler}
          >
            Register for Access
          </Link>
        )}
        {props.params.trial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 1] }}
            exit={{ opacity: 0 }}
          >
            <RequestTrialForm
              params={params}
              onSubmit={props.params.submitHandler}
              onCancel={props.params.cancelHandler}
            />
          </motion.div>
        )}
        {props.params.isSent && !props.params.trial && (
          <h1>
            Congrats {JSON.parse(localStorage.getItem('firstName'))}, your free
            trial request is registered! Check your email for further updates.
          </h1>
        )}
        {!props.params.isSent && !props.params.trial && (
          <>
            <h3>Close transactions in days rather than weeks</h3>
            <h3>Attract more leads</h3>
            <h3>Become a one-stop-shop for all FSBO transactions</h3>
            <h3>Become recognized as an innovative leader</h3>
          </>
        )}
      </motion.div>
      <motion.img
        id={styles['handshake-img']}
        style={{ opacity: opacityHandshake }}
        src={images.handshakeImg}
      />
    </motion.header>
  );
};

export default WelcomeHeader;
