import React from "react";
import styles from "./SurvivalTalents.module.css";
import ClassTalents from "../HunterClassTalents/ClassTalents";
import SpecTalents from "./SpecTalents";
import HeroTalents from "./HeroTalents";

export default function SurvivalTalents() {
  return (
    <div className={styles.container}>
      <h1>Survival Talents</h1>
      <a href="#rotation">
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
      <div className={styles.talentcontainer}>
        <ClassTalents />
        <HeroTalents />
        <SpecTalents />
      </div>
    </div>
  );
}
