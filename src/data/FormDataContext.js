import React, { createContext, useState } from 'react';

const FormDataContext = createContext();

const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({ name: '', departure: '', travel: '' });

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export { FormDataContext, FormDataProvider };
