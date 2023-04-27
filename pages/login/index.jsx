import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { auth, signInWithEmailAndPassword } from "@/config";

import Form from "./Form";
import classes from "./Login.module.css";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ hasError: false, message: "" });
  const router = useRouter();

  // The function that will be triggered when the login button is clicked.
  const signInHandler = async (formData) => {
    const { email, password } = formData;
    setIsLoading(true);
    setError({ hasError: false, message: "" });
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;
      console.log(user.email);
      router.push("/home");
    } catch (error) {
      setError({ hasError: true, message: error.message });
      setTimeout(() => {
        setError({ hasError: false, message: "" });
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={classes.login} data-testid="login__page">
        <h1 className={classes.h1}>Welcome back!</h1>
        <Form onSubmit={signInHandler} error={error} isLoading={isLoading} />

        <p className={classes.p}>
          Do not have an account?
          <Link href="/signup" className={classes.a}>
            Create now
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
