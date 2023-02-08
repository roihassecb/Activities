import React from "react";

function Answer({ answer, index }) {
  return (
    <div className="answer-container">
      <div className="answer">
        <div>{index + 1}.</div>
        <input type="checkbox" name="check" id="" />
        <div className="answer-text">{answer}</div>
      </div>
    </div>
  );
}

export default Answer;
