import Card from "components/common/Card";
import React from "react";

function Results({ data }) {
  return (
    <div className="flex gap-5">
      {data.map((item, index) => (
        <Card key={index} title={item.name} />
      ))}
    </div>
  );
}

export default Results;
