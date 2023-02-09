import React from "react";
import { StylesObject } from "../types/types";

const getStyles = (): StylesObject => {
  return {
    answerContainer: { height: "60px" },
    answerInput: { position: "relative", top: "6px" },
    answer: {
      display: "flex",
      gap: "5px",
      flexDirection: "row",
      alignItems: "flex-start",
      userSelect: "none",
      ':hover':{cursor: "pointer",}
    },
    answerText: { alignSelf: "flex-end" },
    answersContainer: {
      display: "flex",
      maxWidth: "300px",
      flexWrap: "wrap",
    },
  };
};

function Answer({ answer, index }: any) {
  const styles = getStyles();

  return (
    <div style={styles.answerContainer}>
      <label style={styles.answer}>
        <div>{index + 1}.</div>
        <input style={styles.answerInput} type="checkbox" name="check" />
        <div style={styles.answerText}>{answer}</div>
      </label>
    </div>
  );
}

export default Answer;
