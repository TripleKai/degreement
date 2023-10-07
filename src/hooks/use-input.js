import { useState } from 'react';

const useInput = (validate, isRequestAttempted) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validate(value);
  const isError = (!isValid && isTouched) || (!isValid && isRequestAttempted);

  const valueChangedHandler = (event) => {
    setValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue('');
    setIsTouched(false);
  };

  return {
    value,
    isValid,
    isError,
    valueChangedHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
