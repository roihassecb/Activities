import React from "react";

function Question({ question, index }) {
  const { text, image } = question;
  return (
    <div className="question">
      <div>{index + 1}.</div>
      <img src={image} alt="" />
      <div>{text}</div>
    </div>
  );
}

export default Question;
