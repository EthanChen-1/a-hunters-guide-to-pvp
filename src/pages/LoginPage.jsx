import React from "react";
import styles from "./LoginPage.module.css";
import { Form, redirect, useActionData, Link } from "react-router-dom";

export default function LoginPage() {
  const errors = useActionData();

  return (
    <div className={styles.container}>
      <Form method="POST">
        <h1>Register</h1>
        <label>Username:</label>
        <input type="text" name="username" id="username" />
        {errors?.username && <span>{errors.username}</span>}
        <label>Email:</label>
        <input type="text" name="email" id="email" />
        {errors?.email && <span>{errors.email}</span>}
        <label>Password:</label>
        <input type="password" name="password" id="password" />
        {errors?.password && <span>{errors.password}</span>}
        <button type="submit">Submit</button>
        <Link to={"/"}>Home Page</Link>
      </Form>
    </div>
  );
}

export async function loginAction({ request }) {
  let userSubmittedForm = await request.formData();
  const username = userSubmittedForm.get("username");
  const email = userSubmittedForm.get("email");
  const password = userSubmittedForm.get("password");
  const errors = {};

  if (!username || username.length === 0) {
    errors.username = "Username was not provided";
  }

  if (
    !email ||
    email.length === 0 ||
    !email.includes("@") ||
    !email.includes(".")
  ) {
    errors.email = "Email was not provided or is not structured correctly";
  }

  if (!password || password.length < 8) {
    errors.password =
      "Password was not provided or was less than 8 characters in length";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  } else return redirect("/");
}
