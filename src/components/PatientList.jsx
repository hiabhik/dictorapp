import React from 'react';

const PatientList = ({ patients }) => {
  return (
    <div>
      <h2>Patients List:</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>History</th>
            <th>Prescription</th>
            <th>Appointment</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.name}</td>
              <td>{patient.history}</td>
              <td>{patient.prescription}</td>
              <td>{patient.appointment}</td>
             </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;
