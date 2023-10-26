import { useScroll } from 'framer-motion';
import { useState } from 'react';

import Header from '../components/Header';
import FAQ from '../components/FAQ';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import ProblemSolution from '../components/ProblemSolution';
import WelcomeHeader from '../components/WelcomeHeader';
import styles from './Welcome.module.css';
import stylesWH from '../components/WelcomeHeader.module.css';

export default function WelcomePage() {
  const [trial, setTrial] = useState(false);
  const [isRequestAttempted, setIsRequestAttempted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  let info = {
    requesterInfo: {},
    enteredFirstNameValid: false,
    enteredLastNameValid: false,
    enteredEmailValid: false,
    resetFirstNameInput: () => {},
    resetLastNameInput: () => {},
    resetCompanyNameInput: () => {},
    resetEmailInput: () => {},
  };

  const inputInfo = (params) => {
    info.requesterInfo = params.requesterInfo;
    info.enteredFirstNameValid = params.enteredFirstNameValid;
    info.enteredLastNameValid = params.enteredLastNameValid;
    info.enteredEmailValid = params.enteredEmailValid;
    info.resetFirstNameInput = params.resetFirstNameInput;
    info.resetLastNameInput = params.resetLastNameInput;
    info.resetCompanyNameInput = params.resetCompanyNameInput;
    info.resetEmailInput = params.resetEmailInput;
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsRequestAttempted(true);

    if (
      !info.enteredFirstNameValid ||
      !info.enteredLastNameValid ||
      !info.enteredEmailValid
    ) {
      return;
    }

    setIsSending(true);

    const response = await fetch(
      'https://degreement-4d74d-default-rtdb.firebaseio.com/free-trial-request.json',
      {
        method: 'POST',
        body: JSON.stringify(info.requesterInfo),
        headers: { 'Content-Type': 'application/json' },
      }
    );

    // TODO: Error handling

    localStorage.setItem(
      'firstName',
      JSON.stringify(info.requesterInfo.firstName)
    );

    setIsRequestAttempted(false);
    setIsSending(false);
    setIsSent(true);
    setTrial(false);
    resetForm();
  };

  const requestTrialHandler = () => {
    document
      .getElementById(stylesWH['welcome-header'])
      ?.scrollIntoView({ behavior: 'smooth' });
    setTrial(true);
  };

  const resetForm = () => {
    info.resetFirstNameInput();
    info.resetLastNameInput();
    info.resetCompanyNameInput();
    info.resetEmailInput();
    setIsRequestAttempted(false);
    setIsSending(false);
  };

  const cancelHandler = () => {
    setTrial(false);
    resetForm();
  };

  const { scrollY } = useScroll();

  const params = {
    scrollY,
    trial,
    isRequestAttempted,
    isSending,
    isSent,
    submitHandler,
    requestTrialHandler,
    cancelHandler,
    inputInfo,
  };

  return (
    <>
      <Header />
      <WelcomeHeader params={params} />
      <main id={styles['welcome-content']}>
        <ProblemSolution scrollY={scrollY} />
        <Benefits scrollY={scrollY} />
        <Features scrollY={scrollY} />
        <FAQ onRequest={requestTrialHandler} />
      </main>
    </>
  );
}
