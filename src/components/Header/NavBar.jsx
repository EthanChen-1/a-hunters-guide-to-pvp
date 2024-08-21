import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(localStorage.getItem("userToken"));
  }, []);
  return (
    <>
      {user ? (
        <nav className={styles.navbar}>
          <ul className={styles.list}>
            <li>
              <Link to={"/forum"}>Forum</Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className={styles.navbar}>
          <ul className={styles.list}>
            <li>
              <Link to={"/signup"}>Register / Login</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
