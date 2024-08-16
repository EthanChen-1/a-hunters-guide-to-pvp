import React from "react";
import styles from "./StatsAndGear.module.css";

export default function StatsAndGear() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Stats and Gear</h1>
        <p>
          <b>Marksmanship Stats:</b> Versatility &gt; Mastery &gt; Haste &gt;
          Crit
        </p>
        <p>
          <b>Marksmanship Gear:</b> 4pc Tier Set on Head, Shoulders, Chest, and
          Legs + Venom-Steeped Stompers + Flamed-Touched Legguards (Decay
          Infused)
        </p>
      </div>
    </div>
  );
}
