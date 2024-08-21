import React from "react";
import { Link, useRouteError } from "react-router-dom";
import styles from "./Error.module.css";

export default function Error() {
  let error = useRouteError();
  console.log(error);
  return (
    <div className={styles.container}>
      <h1>Error Occurred</h1>
      <p>{error.code + ": " + error.message}</p>
      <p>{error.response.statusText}</p>
      <Link to="/">
        <p>Back to Homepage</p>
      </Link>
    </div>
  );
}
