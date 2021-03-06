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

const tdStyle = css`
  // width: 15px;
  // height: 1px;
  // background-color: black;
  // position: absolute;
  // top: 50%;
  // line-height: 2px;
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

const strings = {
  0: "E",
  1: "B",
  2: "G",
  3: "D",
  4: "A",
  5: "E",
};

const fretGenerator = (numberOfFrets, stringNumber) => {
  let frets = [...new Array(numberOfFrets)];

  return frets.map((fret, fretNumber) => {
    if (fretNumber === 0) {
      return <td className={tdStyle}>{strings[stringNumber]}</td>;
    } else {
      return <td>a fret</td>;
    }
  });
};

const stringLaneGenerator = (numberOfStrings) => {
  let strings = [...new Array(numberOfStrings)];

  return strings.map((string, stringNumber) => (
    <tr className={guitarString}>{fretGenerator(22, stringNumber)}</tr>
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
