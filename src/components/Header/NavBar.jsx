import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li>
          <Link to={"/login"}>Register / Login</Link>
        </li>
        <li>
          <Link to={"/forum"}>Forum</Link>
        </li>
      </ul>
    </nav>
  );
}
