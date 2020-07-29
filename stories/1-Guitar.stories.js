import React from "react";
import Guitar from "../components/Guitar/Guitar";

console.log("guitar comp: " + Guitar);

export default {
  title: "Guitar",
  component: Guitar,
};

export const GuitarFretboard = () => {
  return (
    <div>
      <Guitar />
    </div>
  );
};
