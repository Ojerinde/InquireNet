import { useState } from "react";
import { ValidatePassword, ValidateEmail } from "@/lib/Validations";

import Input from "./LoginInput";
import Button from "@/components/UI/Button";

import classes from "./LoginForm.module.css";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import React from "react";

const Form = ({ onSubmit, error, isLoading }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordIcon] = useState(true);
  const [form, setForm] = useState({
    email: "",
    password: "",
    emailIsValid: false,
    passwordIsValid: false,
    emailIsFocus: false,
    passwordIsFocus: false,
  });

  // Two - way binding implementation.
  const emailOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, email: e.target.value };
    });
  };
  const passwordOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, password: e.target.value };
    });
  };

  // Allowing the user to unfocus the input field before checking if the input field is correct.
  const emailOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, emailIsFocus: true };
    });

    const isValid = ValidateEmail(form.email);
    if (isValid) {
      setForm((prev) => {
        return { ...prev, emailIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, emailIsValid: false };
      });
    }
  };

  const passwordOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, passwordIsFocus: true };
    });

    const isValid = ValidatePassword(form.password);
    if (isValid) {
      setForm((prev) => {
        return { ...prev, passwordIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, passwordIsValid: false };
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const { emailIsValid, passwordIsValid } = form;
    if (!emailIsValid || !passwordIsValid) return;

    // Send form details to parent component
    onSubmit({
      email: form.email,
      password: form.password,
    });
  };

  return (
    <form className={classes.login__form} onSubmit={submitHandler}>
      <Input
        id="email"
        label="Email"
        type="text"
        invalid={!form.emailIsValid && form.emailIsFocus ? "invalid" : ""}
        placeholder="example@name.com"
        value={form.email}
        onChange={emailOnChangeHandler}
        onBlur={emailOnBlurHandler}
      />
      {form.emailIsFocus && !form.emailIsValid && (
        <p className={classes.invalid__input}>Please enter a valid email</p>
      )}
      <Input
        id="password"
        label="Password"
        type={showPassword ? "text" : "password"}
        invalid={!form.passwordIsValid && form.passwordIsFocus ? "invalid" : ""}
        placeholder="e.g, Password@1234"
        value={form.password}
        onChange={passwordOnChangeHandler}
        onBlur={passwordOnBlurHandler}
        passwordIcon={passwordIcon}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      {form.passwordIsFocus && !form.passwordIsValid && (
        <p className={classes.invalid__input}>
          MinLength(8), uppercase, lowercase, character, number
        </p>
      )}
      <div>
        {isLoading && <LoadingSpinner />}
        {error.hasError && (
          <p className={classes.error__message}>{error.message}</p>
        )}
      </div>

      <div className={classes.btn__box}>
        <Button id="btn__submit" type="submit" className={classes.button}>
          Login
        </Button>
      </div>
    </form>
  );
};
export default Form;
