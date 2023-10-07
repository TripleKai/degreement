import { motion, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

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

  const opacityHandshake = useTransform(
    props.params.scrollY,
    [0, 200, 300, 500],
    [1, 0.5, 0.5, 0]
  );

  const yText = useTransform(props.params.scrollY, [0, 500], [0, 300]);
  const opacityText = useTransform(props.params.scrollY, [0, 500], [1, 0]);

  const firstNameInputClasses = firstNameError ? styles.invalid : '';
  const lastNameInputClasses = lastNameError ? styles.invalid : '';
  const emailInputClasses = emailError ? styles.invalid : '';

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
          // scale: scaleText,
          y: yText,
          opacity: opacityText,
        }}
      >
        <h1>Seller Financing Made Easy</h1>
        <h2>
          Close sales faster and cheaper for clients with Smart Contracts and
          Blockchain technology
        </h2>
        {!props.params.trial && (
          <h2>
            <i>Opt-out of antiquated systems</i>
          </h2>
        )}
        {props.params.trial && (
          <h2 style={{ color: '#84b0fc' }}>Enter your information</h2>
        )}
        {!props.params.trial && (
          <Link
            id={styles['request-trial']}
            onClick={props.params.requestTrialHandler}
          >
            Request Free Trial
          </Link>
        )}
        {props.params.trial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 1] }}
            exit={{ opacity: 0 }}
          >
            <form
              id={styles['request-trial-form']}
              className={styles['form-style']}
            >
              <input
                id='first-name'
                className={firstNameInputClasses}
                placeholder='First Name'
                type='text'
                onChange={firstNameChangeHandler}
                onBlur={firstNameBlurHandler}
                value={enteredFirstName}
              ></input>
              {firstNameError && (
                <p className={styles['input-error']}>
                  Please enter a first name before sending
                </p>
              )}
              <input
                id='last-name'
                className={lastNameInputClasses}
                placeholder='Last Name'
                type='text'
                onChange={lastNameChangeHandler}
                onBlur={lastNameBlurHandler}
                value={enteredLastName}
              ></input>
              {lastNameError && (
                <p className={styles['input-error']}>
                  Please enter a last name before sending
                </p>
              )}
              <input
                id='email'
                className={emailInputClasses}
                placeholder='Email'
                type='email'
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                value={enteredEmail}
              ></input>
              {emailError && (
                <p className={styles['input-error']}>
                  Please enter a valid email before sending
                </p>
              )}
              <div className={styles['form-buttons']}>
                <Link
                  id={styles['send-request-trial']}
                  onClick={props.params.submitHandler}
                >
                  {!props.params.isSending && <>Send</>}
                  {props.params.isSending && (
                    <div className={styles['circle-loader-container']}>
                      <motion.span
                        className={styles['circle-loader']}
                        animate={{ rotate: 360 }}
                        transition={{
                          loop: Infinity,
                          duration: 1,
                          ease: 'linear',
                        }}
                      />
                    </div>
                  )}
                </Link>
                <Link
                  id={styles['cancel-request-trial']}
                  onClick={props.params.cancelHandler}
                >
                  Cancel
                </Link>
              </div>
            </form>
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
            <h3>Close more deals than before</h3>
            <h3>Attract more leads</h3>
            <h3>Become a one-stop-shop for all FSBO clients</h3>
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
