import React from 'react';

const Textarea = ({ name, value, onChange, label }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} name={name} value={value} onChange={onChange}></textarea>
    </div>
  );
};

export default Textarea;
