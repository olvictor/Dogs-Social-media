import React, { useState } from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email valido",
  },
  number: {
    regex: /^\d+$/,
    message: "Utilize apenas números",
  },
};
const UseForm = (type) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);
  const onChange = (e) => {
    if (error) {
      validate(e.target.value);
    }
    setValue(e.target.value);
  };

  const validate = (value) => {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor !");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  };
  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default UseForm;
