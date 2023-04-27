import { createUserWithEmailAndPassword, auth, db } from "@/config";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import Link from "next/link";
import Form from "./Form";
import classes from "./SignUp.module.css";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setIsSuccess] = useState(false);
  const [error, setError] = useState({ hasError: false, message: "" });
  const signUpHandler = async (formData) => {
    const { email, password, lastname, firstname, track } = formData;
    setIsLoading(true);
    setError({ hasError: false, message: "" });
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const docRef = await addDoc(collection(db, "students"), {
        firstname: firstname,
        lastname: lastname,
        email: email,
        track: track,
      });
      setIsSuccess(true);
    } catch (error) {
      setError({ hasError: true, message: error.message });
      // Clearing the error after 3s
      setTimeout(() => {
        setError({ hasError: false, message: "" });
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={classes.login}>
        <h1 className={classes.h1}>Hello!</h1>
        <Form
          onSubmit={signUpHandler}
          isLoading={isLoading}
          error={error}
          success={success}
        />
        <p className={classes.p}>
          Already have an account?
          <Link href="/login" className={classes.a}>
            Login
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;
