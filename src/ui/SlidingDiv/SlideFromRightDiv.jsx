import React from "react";
import styles from "./SlideFromRightDiv.module.css";

export default function SlideFromRightDiv(props) {
  return (
    <div {...props} className={props.className + " " + styles.animation}>
      {props.children}
    </div>
  );
}
