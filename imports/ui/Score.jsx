import React from 'react';

export const Score = ({ score, onDeleteClick }) => {
  return (
    <React.Fragment>
    <tr>
            <td>{score.fecha} a</td>
            <td>{score.juego} b</td>
            <td>{score.expansion}</td>
            <td>{score.papa}</td>
            <td>{score.mama}</td>
            <td>{score.pao}</td>
            <td>{score.hugon}</td>
            <td><button onClick={() => onDeleteClick(score) }>&times;</button></td>
            </tr>
    </React.Fragment>
  );
};