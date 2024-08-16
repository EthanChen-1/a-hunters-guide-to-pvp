import React from "react";
import styles from "./Header.module.css";

export default function Header({ showContent }) {
  return (
    <div id="header" name="header" className={styles.header}>
      <h1>A Hunter's Guide to PVP</h1>
      <p>
        Want to learn more about <a href="#race">races</a>,{" "}
        <a href="#playstyle">play style</a>, <a href="#pets">pets</a>,{" "}
        <a href="#talents">talents</a>, <a href="#rotation">rotation</a>,{" "}
        <a href="#comps">comps</a>, <a href="#statsandgear">stats</a>, and{" "}
        <a href="#statsandgear">gear</a> that Hunters use in PVP? Well you've
        come to the right place!
      </p>
      <a href="#race">
        <svg width="100" height="55" preserveAspectRatio="none">
          <path
            d="M0,0 l50,50 l50,-50"
            fill="none"
            stroke="black"
            strokeLinecap="round"
            strokeWidth="5"
          />
        </svg>
      </a>
    </div>
  );
}
