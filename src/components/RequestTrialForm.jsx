import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import styles from './RequestTrialForm.module.css';

const RequestTrialForm = (props) => {
  const firstNameInputClasses = props.params.firstNameError
    ? styles.invalid
    : '';
  const lastNameInputClasses = props.params.lastNameError ? styles.invalid : '';
  const emailInputClasses = props.params.emailError ? styles.invalid : '';

  return (
    <form id={styles['request-trial-form']} className={styles['form-style']}>
      <input
        id='first-name'
        className={firstNameInputClasses}
        placeholder='First Name'
        type='text'
        onChange={props.params.firstNameChangeHandler}
        onBlur={props.params.firstNameBlurHandler}
        value={props.params.enteredFirstName}
      ></input>
      {props.params.firstNameError && (
        <p className={styles['input-error']}>
          Please enter a first name before sending
        </p>
      )}
      <input
        id='last-name'
        className={lastNameInputClasses}
        placeholder='Last Name'
        type='text'
        onChange={props.params.lastNameChangeHandler}
        onBlur={props.params.lastNameBlurHandler}
        value={props.params.enteredLastName}
      ></input>
      {props.params.lastNameError && (
        <p className={styles['input-error']}>
          Please enter a last name before sending
        </p>
      )}
      <input
        id='email'
        className={emailInputClasses}
        placeholder='Email'
        type='email'
        onChange={props.params.emailChangeHandler}
        onBlur={props.params.emailBlurHandler}
        value={props.params.enteredEmail}
      ></input>
      {props.params.emailError && (
        <p className={styles['input-error']}>
          Please enter a valid email before sending
        </p>
      )}
      <div className={styles['form-buttons']}>
        <Link id={styles['send-request-trial']} onClick={props.onSubmit}>
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
        <Link id={styles['cancel-request-trial']} onClick={props.onCancel}>
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default RequestTrialForm;
