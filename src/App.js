import React, { useState } from 'react';
import PatientForm from './components/PatientForm';
import PatientList from './components/PatientList';
import './App.css'

const App = () => {
  const [patients, setPatients] = useState([]);

  const addPatient = (newPatient) => {
    setPatients([...patients, newPatient]);
  };

  return (
    <div className="App">
      <h1>Doctor Application</h1>
      <PatientForm addPatient={addPatient} />
      <PatientList patients={patients} />
    </div>
  );
};

export default App;
