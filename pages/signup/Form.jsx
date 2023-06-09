import { useState } from "react";

import { ValidatePassword, ValidateEmail } from "../../lib/Validations";

import Input from "../login/LoginInput";
import SelectInput from "@/components/UI/SelectInput";
import Button from "../../components/UI/Button";
import InputError from "@/components/UI/InputError";

import classes from "./SignUpForm.module.css";
import LoadingSpinner from "../login/LoadingSpinner/LoadingSpinner";
import { useRouter } from "next/router";

const checkFormValidity = (form, setForm, e = {}) => {
  const { firstnameIsValid, lastnameIsValid, emailIsValid, passwordIsValid } =
    form;
  if (
    firstnameIsValid &&
    lastnameIsValid &&
    emailIsValid &&
    passwordIsValid &&
    e.target?.value === form.password
  ) {
    setForm((prev) => {
      return { ...prev, formIsValid: true };
    });
  } else {
    setForm((prev) => {
      return { ...prev, formIsValid: false };
    });
  }
};

const options = [
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "cloud", label: "Cloud" },
];

const Form = ({ onSubmit, isLoading, error, success }) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordIcon] = useState(true);
  const [selected, setSelected] = useState("Frontend");
  const getOptionsSelected = (option) => {
    console.log(option);
    setSelected((prev) => option);
  };

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    firstnameIsValid: false,
    lastnameIsValid: false,
    emailIsValid: false,
    passwordIsValid: false,
    confirmpasswordIsValid: false,
    firstnameIsFocus: false,
    lastnameIsFocus: false,
    emailIsFocus: false,
    confirmpasswordIsFocus: false,
    formIsValid: false,
  });

  const firstnameOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, firstname: e.target?.value };
    });
  };
  const lastnameOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, lastname: e.target?.value };
    });
  };
  const emailOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, email: e.target?.value };
    });
  };
  const passwordOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, password: e.target?.value };
    });
  };
  const confirmpasswordOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, confirmpassword: e.target?.value };
    });
    checkFormValidity(form, setForm, e);
  };

  // Allowing the user to unfocus the input field before checking if the input field is correct.
  const firstnameOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, firstnameIsFocus: true };
    });

    if (form.firstname.length >= 3 && form.firstname.length <= 12) {
      setForm((prev) => {
        return { ...prev, firstnameIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, firstnameIsValid: false };
      });
    }
    checkFormValidity(form, setForm);
  };
  const lastnameOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, lastnameIsFocus: true };
    });

    if (form.lastname.length >= 3 && form.lastname.length <= 12) {
      setForm((prev) => {
        return { ...prev, lastnameIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, lastnameIsValid: false };
      });
    }
    checkFormValidity(form, setForm);
  };
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
    checkFormValidity(form, setForm);
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
    checkFormValidity(form, setForm);
  };
  const confirmpasswordOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, confirmpasswordIsFocus: true };
    });

    const isValid = form.password === form.confirmpassword;
    if (isValid) {
      setForm((prev) => {
        return { ...prev, confirmpasswordIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, confirmpasswordIsValid: false };
      });
    }
    checkFormValidity(form, setForm, e);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // Send form details to parent component
    onSubmit({
      firstname: form.firstname,
      lastname: form.lastname,
      email: form.email,
      track: selected,
      password: form.password,
      confirmpassword: form.confirmpassword,
    });

    // Clearing the input fields
    setSelected("Frontend");
    setForm({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
      firstnameIsValid: false,
      lastnameIsValid: false,
      emailIsValid: false,
      passwordIsValid: false,
      confirmpasswordIsValid: false,
      firstnameIsFocus: false,
      lastnameIsFocus: false,
      emailIsFocus: false,
      confirmpasswordIsFocus: false,
      formIsValid: false,
    });
  };

  return (
    <form className={classes.login__form} onSubmit={submitHandler}>
      <Input
        id="firstname"
        label="First Name"
        type="text"
        invalid={!form.firstnameIsValid && form.nameIsFocus ? "invalid" : ""}
        placeholder="Enter your first name"
        value={form.firstname}
        onChange={firstnameOnChangeHandler}
        onBlur={firstnameOnBlurHandler}
      />
      {form.firstnameIsFocus && !form.firstnameIsValid && (
        <InputError
          message="Please enter a first name that is between 4 and 12 characters in
            length"
        />
      )}
      <Input
        id="lastname"
        label="Last Name"
        type="text"
        invalid={!form.lastnameIsValid && form.lastname ? "invalid" : ""}
        placeholder="Enter your last name"
        value={form.lastname}
        onChange={lastnameOnChangeHandler}
        onBlur={lastnameOnBlurHandler}
      />
      {form.lastnameIsFocus && !form.lastnameIsValid && (
        <InputError
          message="Please enter a last name that is between 4 and 12 characters in
            length"
        />
      )}

      <Input
        id="email"
        label="Email"
        type="email"
        invalid={!form.emailIsValid && form.emailIsFocus ? "invalid" : ""}
        placeholder="example@email.com"
        value={form.email}
        onChange={emailOnChangeHandler}
        onBlur={emailOnBlurHandler}
      />
      {form.emailIsFocus && !form.emailIsValid && (
        <InputError message="Enter a valid email." />
      )}

      <SelectInput
        label="Select your track"
        options={options}
        selected={selected}
        onSelect={getOptionsSelected}
        placeholder="What track are you on?"
      />

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
        <InputError message="MinLength(8), uppercase, lowercase, character, number." />
      )}

      <Input
        id="confirmpassword"
        label="Confirm Password"
        type={showConfirmPassword ? "text" : "password"}
        invalid={
          !form.confirmpasswordIsValid && form.confirmpasswordIsFocus
            ? "invalid"
            : ""
        }
        placeholder="e.g, Password@1234"
        value={form.confirmpassword}
        onChange={confirmpasswordOnChangeHandler}
        onBlur={confirmpasswordOnBlurHandler}
        passwordIcon={passwordIcon}
        showPassword={showConfirmPassword}
        setShowPassword={setShowConfirmPassword}
      />
      {form.confirmpasswordIsFocus && !form.confirmpasswordIsValid && (
        <InputError message=" Password does not match!" />
      )}
      <div>
        {isLoading && <LoadingSpinner />}
        {!isLoading && error.hasError && (
          <p
            className={classes.error__message}
          >{`Sign up failed! - ${error.message}`}</p>
        )}
        {success && (
          <p className={classes.span__box}>
            Successfully Signed Up!
            <span>
              <Button
                className={classes.success_button}
                onClick={() => router.push("/login")}
              >
                Login to continue
              </Button>
            </span>
          </p>
        )}
      </div>

      <div className={classes.btn__box}>
        <Button
          id="btn__submit"
          type="submit"
          disabled={!form.formIsValid}
          className={classes.button}
        >
          Sign Up
        </Button>
      </div>
    </form>
  );
};
export default Form;
