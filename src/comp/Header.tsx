import React from "react";
import { StylesObject } from "../types/types";

const getStyles = (): StylesObject => {
  return {
    header: {
      backgroundColor: "#ffb763",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "30px",
      fontWeight: "700",
      color: "#454545",
      boxShadow: "0 0 20px 0px #c0c0c0",
    },
  };
};

function Header() {

  const { header } = getStyles();

  
  return <h1 style={header}>Activities</h1>;
}

export default Header;
