import React from "react";
import { css } from "emotion";

const fretboardBackground = css`
  background: pink;
  border: 3px solid blue;
  display: flex;
  justify-content: space-around;
  height: 315px;
`;

const cellStyle = css`
  background: white;
  width: 100%;
  min-width: 800px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: aquamarine;
  border: 1px solid gray;
`;

const guitarString = css`
  background: white;
  height: 50px;
`;

// calculate row height based on number of rows
/**
 * API
 * Implement functionally
 * N of strings
 * N of Frets
 * Tuning
 * DisplayType
 *
 */

// TODO: apply linting to project
// TODO: apply default props

// TODO: Complete styling:
// TODO: apply binding to fretboard
// TODO: apply frets to fretboard
// TODO: apply fretboard decorations
// TODO: apply nut
// TODO: apply graded fret sizing

const fretGenerator = (numberOfFrets) => {
  let frets = [...new Array(numberOfFrets)];

  return frets.map((fret) => <td>a fret</td>);
};

const stringLaneGenerator = (numberOfStrings) => {
  let strings = [...new Array(numberOfStrings)];

  return strings.map((string) => (
    <tr className={guitarString}>{fretGenerator(22)}</tr>
  ));
};

const Guitar = (props) => {
  const { strings } = props;
  return (
    <div className={fretboardBackground}>
      <table>
        <tbody>
          {stringLaneGenerator(6)}
          {/* <tr>E</tr>
          <tr>B</tr>
          <tr>G</tr>
          <tr>D</tr>
          <tr>A</tr>
          <tr>E</tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Guitar;
