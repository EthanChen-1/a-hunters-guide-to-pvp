import React from "react";
import styles from "./SignUp.module.css";
import { Form, redirect, useActionData, Link, json } from "react-router-dom";
import api from "../api/api";

export default function SignUpPage() {
  const errors = useActionData();
  return (
    <div className={styles.container}>
      <Form method="post">
        <h1>Sign Up</h1>
        <label>Username:</label>
        <input type="text" name="username" id="username" />
        {errors?.username && <span>{errors.username}</span>}
        <label>Email:</label>
        <input type="text" name="email" id="email" />
        {errors?.email && <span>{errors.email}</span>}
        <label>Password:</label>
        <input type="password" name="password" id="password" />
        {errors?.password && <span>{errors.password}</span>}
        <div className={styles.buttonContainer}>
          <button type="submit">Sign up</button>
        </div>
        <div className={styles.linkContainer}>
          <Link to={"/login"}>Login</Link>
          <Link to={"/"}>Home Page</Link>
        </div>
      </Form>
    </div>
  );
}

export async function signUpAction({ request }) {
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
  }

  api
    .post(`/register`, { username, email, password })
    .then((res) => console.log(res))
    .catch((err) => {
      throw json(err, { status: err.status });
    });

  return redirect("/");
}
