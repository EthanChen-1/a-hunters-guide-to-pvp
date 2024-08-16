import React from "react";
import styles from "./PlayStyle.module.css";

export default function PlayStyle() {
  return (
    <div className={styles.container}>
      <div>
        <h1>How should you play?</h1>
        <p>
          Hunter is a very high APM class that is always able to impact the flow
          of the match through their high burst potential and multitude of
          utility and mobility options. They also have to control the actions of
          their pet which brings a load of other options for attacking your
          foes.
        </p>
        <p>
          Hunters aren't as squishy as they were in past expansions with The War
          Within pre-patch they have gained a bunch of new defensive options
          that should help with staying alive if they can predict enemy goes and
          time their defensives well.
        </p>
        <p>
          They can start goes by CCing the healer with a stun or a root followed
          by a trap to keep them incapacitated for longer periods of time. And
          with a ranged interrupt, hunters are usually able to stop casts from
          anywhere on the battlefield.
        </p>
        <p>
          Hunters are always moving across the battlefield kiting the melee that
          are focusing them and moving in and out of the line of site the enemy
          ranged when necessary.
        </p>
        <p>
          Hunters should always start off the fight in Camouflage which allows
          them to move while invisible to the enemies and gain the pre-emptive
          strike.
        </p>
        <a href="#pets">
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
