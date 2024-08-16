import React from "react";
import styles from "./Rotation.module.css";

export default function Rotation() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Rotation</h1>
        <p>
          <b>Marksmanship Hunter</b>
        </p>
        <p>
          <b>Big Burst:</b> True Shot &gt; Aimed Shot / Wailing Arrow &gt; Rapid
          Fire &gt; Arcane Shot (Kill Shot whenever it is up)
        </p>
        <p>
          <b>Tiny Burst:</b> Volley &gt; Explosive Shot &gt; Rapid Fire OR
          Explosive Shot &gt; Kill Shot
        </p>
        <p>
          <b>No Burst Cooldowns:</b> Tranquilizing Shot OR Concussive Shot &gt;
          Rapid Fire OR Arcane Shot
        </p>
        <p>
          <b>No Focus:</b> Steady Shot OR Tranquilizing Shot OR Concussive Shot
        </p>
        <p>
          <b>Kiting:</b> Tar Trap OR Concussive Shot OR Scatter Shot OR Bursting
          Shot
        </p>
        <p>
          <b>CC Healer:</b> Intimidation OR Binding Shot &gt; Freezing Trap OR
          Scatter Shot &gt; Freezing Trap
        </p>
        <a href="#comps">
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
