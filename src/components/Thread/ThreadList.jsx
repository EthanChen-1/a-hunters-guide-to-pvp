import React from "react";
import styles from "./ThreadList.module.css";

export default function ThreadList({ threads }) {
  return threads.map((thread) => (
    <div key={thread._id} className={styles.thread}>
      <p>{thread.author}</p>
      <p>
        <b>{thread.title}</b>
      </p>
      <p className={styles.content}>{thread.content}</p>
    </div>
  ));
}
