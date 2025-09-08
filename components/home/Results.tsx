import React from "react";
import Card from "../common/Card";

function Results({ data }) {
  return (
    <div className="flex gap-5">
      {data.map((item, index) => (
        <Card
          key={index} title={item.name} />
      ))}
    </div>
  );
}

export default Results;
