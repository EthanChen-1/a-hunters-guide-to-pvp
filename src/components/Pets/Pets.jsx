import React from "react";
import styles from "./Pets.module.css";

export default function Pets() {
  return (
    <div className={styles.container}>
      <div>
        <h1>What pets should you bring?</h1>
        <p>
          A hunter's pet can bring tons of neccessary utility: movement speed,
          mortal wounds, stuns, slows, leech, heals, extra max hp, slow removal,
          or a bloodlust/ heroism effect.
        </p>
        <p>
          But pets in WoW fall into three categories: ferocity, cunning, and
          tenacity. Each brings a subset of the utility shown above and its up
          to you to decide which benefits your gameplan more. I personally would
          recommend a Tenacity/ Cunning pet with a Mortal Strike effect.
        </p>
        <p>
          <b>Ferocity Pets</b>
        </p>
        <p>
          Pets that fall under the Ferocity category are things like Cats,
          Wolves, and Dinosaurs etc.
        </p>
        <p>
          These pets bring two common utility which are Primal Rage, and
          Predator's Thirst. Which are a bloodlust/ heroism effect and leech
        </p>
        <p>
          Some of the pets in the ferocity category will also have a Mortal
          Wounds effect such as: Devilsaurs, Scorpids, and Wasps
        </p>
        <p>
          <b>Cunning Pets</b>
        </p>
        <p>
          Pets that fall under the Cunning category are things like Raptors,
          Rodents, and Serpents.
        </p>
        <p>
          These pets bring two common utility which are Pathfinding (movement
          speed), and Master's Call (removes movement impairing effects).
        </p>
        <p>
          Some of the pets in the ferocity category will also have a Mortal
          Wounds effect such as: Raptors, Rodents, and Hyenas
        </p>
        <p>
          <b>Tenacity Pets</b>
        </p>
        <p>
          Pets that fall under the Tenacity category are things like Bears,
          Lizards, and Stags etc.
        </p>
        <p>
          These pets bring two common utility which are Endurance Training (Max
          HP) and Fortitude of the Bear (A Heal + temporary Max HP)
        </p>
        <p>
          Some of the pets in the ferocity category will also have a Mortal
          Wounds effect such as: River Beasts, Lizards, and Hydras
        </p>
        <a href="#talents">
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
