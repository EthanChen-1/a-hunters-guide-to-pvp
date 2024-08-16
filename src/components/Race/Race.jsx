import React from "react";
import styles from "./Race.module.css";

export default function Race() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <h1>What Race do you pick?</h1>
          <p>
            <b>
              If you are Alliance you should pick between Night Elf, Human, or
              Dwarf.
            </b>
          </p>
          <p>
            Night elf's racial ability Shadow Meld which stealths the user as
            long as they remain still. This will allow you to dodge casts and
            targetted abilities and drop threat to reset.
          </p>
          <p>
            Human's racial ability Will to Survive which removes all stuns from
            the user and allows them to react to the enemy teams go by
            immediately pressing a defensive afterward.
          </p>
          <p>
            Dwarf's racial ability Stone Form which removes Poison, Bleed,
            Curse, Magic, and Disease debuffs and increases physical resistance
            by 10% for a set amount of time which is good against the abilities
            of multiple classes.
          </p>
          <p>
            <b>
              If you are Horde you should pick between Orc, Troll, or Undead
            </b>
          </p>
          <p>
            Orc's racial ability Blood Fury will increase the attack power of
            Hunter's abilities and their auto attack and is used in tandem with
            their burst cooldowns. Orcs also have another racial passive which
            reduces the time of stuns and can allow them to escape from longer
            stun chains from the enemy team.
          </p>
          <p>
            Troll's racial berserking increases haste which makes it easier to
            chain together abilities by reducing the GCD of abilities up to 33%.
          </p>
          <p>
            Undead's racial Will of the Forsaken allows them to escape from
            charms, fears, and sleep affects which can save you from a go from
            the enemy team.
          </p>
          <a href="#playstyle">
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
    </>
  );
}
