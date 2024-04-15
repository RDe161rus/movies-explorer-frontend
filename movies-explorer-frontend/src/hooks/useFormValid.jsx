import { useCallback, useState } from 'react';

function useFormValid() {
  const [values, setValues] = useState({});
  const [messages, setMessages] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setMessages({ ...messages, [name]: e.target.validationMessage });
    setIsValid(e.target.closest('form').checkValidity());
  };
  const resetForm = useCallback(
    (newValues = {}, newMessage = {}, newIsValid = false) => {
      setValues(newValues);
      setMessages(newMessage);
      setIsValid(newIsValid);
    },
    [setValues, setMessages, setIsValid]
  );
  return { values, messages, isValid, handleChange, resetForm, setValues, setIsValid };
}

export default useFormValid;
