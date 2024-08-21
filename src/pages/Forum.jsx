import React from "react";
import api from "../api/api";
import { json } from "react-router-dom";

export default function Forum() {
  return <h1>The AHGTPVP Forums</h1>;
}

export async function forumLoader() {
  const token = await getUserToken();
  const res = await api.get("/forum", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
}

async function getUserToken() {
  return localStorage.getItem("userToken");
}
