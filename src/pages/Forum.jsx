import React from "react";
import api from "../api/api";
import styles from "./Forum.module.css";
import { Link, useLoaderData } from "react-router-dom";
import ThreadList from "../components/Thread/ThreadList";

export default function Forum() {
  const threads = useLoaderData();
  return (
    <div className={styles.header}>
      <h1>The Hunter Forums</h1>
      <p>
        Welcome to the forums here you can discuss anything related to Hunter
        PVP
      </p>
      <Link to={"/"}>To Home Page</Link>
      <div className={styles.threadContainer}>
        <ThreadList threads={threads} />
      </div>
    </div>
  );
}

export async function forumLoader() {
  const token = await getUserToken();
  const res = await api.get("/forum", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}

async function getUserToken() {
  return localStorage.getItem("userToken");
}
