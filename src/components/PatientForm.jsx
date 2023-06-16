import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import Textarea from './Textarea';

const PatientForm = ({ addPatient }) => {
  const [newPatient, setNewPatient] = useState({
    name: '',
    history: '',
    prescription: '',
    appointment: '',
  });

  const handleInputChange = (event) => {
    setNewPatient({
      ...newPatient,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPatient(newPatient);
    setNewPatient({
      name: '',
      history: '',
      prescription: '',
      appointment: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        value={newPatient.name}
        onChange={handleInputChange}
        label="Patient Name:"
      />

      <Textarea
        name="history"
        value={newPatient.history}
        onChange={handleInputChange}
        label="Patient History:"
      />

      <Textarea
        name="prescription"
        value={newPatient.prescription}
        onChange={handleInputChange}
        label="Prescription:"
      />

      <Input
        type="date"
        name="appointment"
        value={newPatient.appointment}
        onChange={handleInputChange}
        label="Appointment Date:"
      />

      <Button>Add Patient</Button>
    </form>
  );
};

export default PatientForm;
