import React from "react";

function Sectiontitle(props) {
  return (
    <div className="mi-sectiontitle">
      <h1>{props.title}</h1>
      <span>{props.title}</span>
    </div>
  );
}

export default Sectiontitle;
