import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Detail for {id}</h1>
      <p>empty</p>
    </div>
  );
};

export default Detail;
