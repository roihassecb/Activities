import React from "react";
import Answer from "./Answer";
import { StylesObject } from "../types/types";

const getStyles = (): StylesObject => {
  return {
    questionContainer: {
      marginTop: "20px",
      marginBottom: "10px",
      display: "flex",
      gap: "20px",
      borderRadius: "10px",
      padding: "5px",
      boxShadow: "0 0 20px 0px #c0c0c0",
      width: "90%",
      maxWidth: "970px",
      alignItems: "center",
    },
    question: { display: "flex", gap: "10px" },
    questionImg: { width: "300px", borderRadius: "5px", height: "auto" },
    bold: { fontWeight: "bold" },
    xButton: {
      alignSelf: "flex-start",
    },
    button: {
      cursor: "pointer",
      width: "20px",
      height: "20px",
      border: "none",
      borderRadius: "5px",
      boxShadow: "0 0 3px 0px #c0c0c0",
      backgroundColor: "#fff",
    },
  };
};

function Question({ question, index }: any) {
  const { text, image, answers } = question;
  const styles = getStyles();

  return (
    <div style={styles.questionContainer}>
      <div style={styles.question}>
        <div style={styles.bold}>{index + 1}.</div>
        <img style={styles.questionImg} src={image} alt="" />
        <div>{text}</div>
      </div>

      <div style={styles.answersContainer}>
        {answers.map((answer: any, i: number) => {
          const { _id, text } = answer;
          return <Answer key={_id} answer={text} index={i} />;
        })}
      </div>

      <div style={styles.xButton}>
        <button style={styles.button}>X</button>
      </div>
    </div>
  );
}

export default Question;
