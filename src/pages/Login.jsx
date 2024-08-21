import React from "react";
import styles from "./Login.module.css";
import { Form, redirect, useActionData, Link, json } from "react-router-dom";
import api from "../api/api";

export default function LoginPage() {
  const errors = useActionData();
  return (
    <div className={styles.container}>
      <Form method="post">
        <h1>Login</h1>
        <label>Email:</label>
        <input type="text" name="email" id="email" />
        {errors?.email && <span>{errors.email}</span>}
        <label>Password:</label>
        <input type="password" name="password" id="password" />
        {errors?.password && <span>{errors.password}</span>}
        <div className={styles.buttonContainer}>
          <button type="submit">Login</button>
        </div>
        <div className={styles.linkContainer}>
          <Link to={"/signup"}>Sign Up</Link>
          <Link to={"/"}>Home Page</Link>
        </div>
      </Form>
    </div>
  );
}

export async function loginAction({ request }) {
  let userSubmittedForm = await request.formData();

  const email = userSubmittedForm.get("email");
  const password = userSubmittedForm.get("password");
  const errors = {};

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
    .post(`/login`, { email, password })
    .then((res) => {
      localStorage.setItem("userToken", res.data.token);
    })
    .catch((err) => {
      throw json(err, { status: err.status });
    });

  return redirect("/");
}
