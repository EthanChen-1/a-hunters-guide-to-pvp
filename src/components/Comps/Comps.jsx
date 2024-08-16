import React from "react";
import styles from "./Comps.module.css";

export default function Comps() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Comps</h1>
        <p>
          <b>S Tier:</b>
        </p>
        <p>Cupid: Retribution Paladin, Marksmanship Hunter, Holy Priest</p>
        <p>
          Jungle: Feral Druid, Marksmanship Hunter, Holy Priest OR Resto Druid
        </p>

        <p>
          <b>A Tier:</b>
        </p>
        <p>
          Thug Cleave: Subtlety Rogue, Marksmanship Hunter, Holy Priest Or Disc
          Priest
        </p>
        <p>
          PHDK / DHDK: Unholy Death Knight, Marksmanship Hunter, Resto Druid OR
          Holy Priest
        </p>

        <p>
          <b>B Tier:</b>
        </p>
        <p>Kung Fu Cleave: Arms Warrior, Marksmanship Hunter, Holy Priest</p>
        <p>
          Scatterplay: Warlock/ Shadow Priest, Marksmanship Hunter, Holy Priest
          OR Resto Druid
        </p>

        <p>
          <b>C Tier:</b>
        </p>
        <p>
          Beast Cleave: Enhancement Shaman, Marksmanship Hunter, Discipline
          Priest
        </p>
        <a href="#statsandgear">
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
    </div>
  );
}
