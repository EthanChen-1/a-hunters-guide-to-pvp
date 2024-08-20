import React from "react";
import styles from "./LoginPage.module.css";
import { Form, json } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <Form method="POST">
        <h1>Register</h1>
        <label>Username:</label>
        <input type="text" name="username" id="username" />
        <label>Email:</label>
        <input type="text" name="email" id="email" />
        <label>Password:</label>
        <input type="password" name="password" id="password" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}

export async function loginAction({ request }) {
  let userSubmittedForm = await request.formData();

  if (
    !userSubmittedForm.get("username") ||
    !userSubmittedForm.get("email") ||
    !userSubmittedForm.get("password")
  ) {
    throw json(
      { message: "The username, email, or password is missing" },
      { status: "400" }
    );
  }
  return json({ message: "request was sent to server" }, { status: 200 });
}
