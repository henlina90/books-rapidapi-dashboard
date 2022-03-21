import React from "react";
import { useParams } from "react-router-dom";

const NominatedBooks = () => {
  let params = useParams();

  console.log(params);
  return (
    <div>
      <h1>Nominated Books</h1>
    </div>
  );
};

export default NominatedBooks;
