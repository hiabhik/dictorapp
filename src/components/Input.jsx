import React from 'react';

const Input = ({ type, name, value, onChange, label }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
