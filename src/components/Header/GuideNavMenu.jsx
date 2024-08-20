import React, { useState } from "react";
import styles from "./GuideNavMenu.module.css";

export default function GuideNavMenu() {
  const [showNavBar, setShowNavBar] = useState(false);
  return (
    <nav
      onMouseEnter={() => setShowNavBar(true)}
      onMouseLeave={() => setShowNavBar(false)}
      className={styles.navbar}
    >
      {showNavBar ? (
        <ul className={styles.list}>
          <li>
            <a href="#header">To Top</a>
          </li>
          <li>
            <a href="#race">Races</a>
          </li>
          <li>
            <a href="#playstyle">Play style</a>
          </li>
          <li>
            <a href="#pets">Pets</a>
          </li>
          <li>
            <a href="#talents">Talents</a>
          </li>
          <li>
            <a href="#rotation">Rotation</a>
          </li>
          <li>
            <a href="#comps">Comps</a>
          </li>
          <li>
            <a href="#statsandgear">Stats & Gear</a>
          </li>
        </ul>
      ) : (
        <svg
          tabIndex={1}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setShowNavBar(true);
            }
          }}
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="15" rx="8" fill="#aad372"></rect>
          <rect y="30" width="100" height="15" rx="8" fill="#aad372"></rect>
          <rect y="60" width="100" height="15" rx="8" fill="#aad372"></rect>
        </svg>
      )}
    </nav>
  );
}
