import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Patient } from './Patient';
import { Score } from './Score';
import { TasksCollection } from '/imports/api/TasksCollection';
import "/imports/api/TasksCollection";
import { PatientRegister } from './PatientRegister';
import { PatientCollection } from '../api/PatientCollection';
import { ScoreRegister } from './ScoreRegister';
import { ScoreCollection } from '../api/ScoreCollection';
import { Meteor } from 'meteor/meteor';

export const App = () => {

  //const patients = useTracker(()  => PatientCollection.find({}, { sort: {createdAt: -1}}).fetch()); //sacar esto y poner otra cosa

  const scores = useTracker(()  => ScoreCollection.find({}, { sort: {createdAt: -1}}).fetch()); //sacar esto y poner otra cosa
  
  // const toggleChecked = ({ _id, isChecked }) => {
  //   TasksCollection.update(_id, {
  //     $set: {
  //       isChecked: !isChecked
  //     }
  //   })
  // };

  const deleteTask = ({ _id }) => ScoreCollection.remove(_id);

  return (
    <div>
      <h1>Tabletop score tracker</h1>

      {/* <PatientRegister></PatientRegister> */}
      <ScoreRegister></ScoreRegister>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Fecha</th>
            <th scope="col">Juego</th>
            <th scope="col">Expansion</th>
            <th scope="col">Papa</th>
            <th scope="col">Mama</th>
            <th scope="col">Pao</th>
            <th scope="col">HugoN</th>
          </tr>
        </thead>
        <tbody>
          {/* {{allPatients}} */}
          {/* { patients.map(patient => <Patient key={ patients._id } patient={ patient } onDeleteClick={deleteTask}/>) } */}
          { scores.map(score => <Score key={ scores._id } score={ score } onDeleteClick={deleteTask}/>) }
        </tbody>
      </table>
    </div>
  );
};