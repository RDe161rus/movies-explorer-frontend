import { useState } from 'react';

function useInput(inputValue) {
  const [query, setQuery] = useState(inputValue);

  const handleInputChange = e => {
    setQuery(e.target.value);
  };
  return {
    query,
    handleInputChange
  };
}

export default useInput;
