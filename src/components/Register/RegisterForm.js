import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../FormControl/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Avatar, Button } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import PasswordField from "../FormControl/PasswordField";

const RegisterForm = (props) => {
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("Please enter your full name")
      .test(
        "Should has as at least two words",
        "Please enter at least 2 words",
        (value) => {
          return value.split(" ").length >= 2;
        }
      ),
    userName: yup
      .string()
      .required("Please enter your full name")
      .min(5, "Please enter ad least 5 characters"),
    email: yup
      .string()
      .required("Please enter your email")
      .email("Please enter a valid email address"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(6, "Please enter at least 6 characters"),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password")], "Password's not match")
      .required("Please re-enter your password"),
    phoneNumber: yup
      .string()
      .required("Pleaser enter your phone number")
      .min(10, "Please enter at least 10 numbers"),
  });

  const form = useForm({
    defaultValues: {
      fullName: "",
      userName: "",
      password: "",
      confirmpassword: "",
      email: "",
      phoneNumber: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
  };

  return (
    <div>
      <Avatar>
        <LockOutlined />
      </Avatar>
      <h2>Create An Account</h2>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="userName" label="User Name" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField
          name="confirmpassword"
          label="Confirm Password"
          form={form}
        />
        <InputField name="email" label="Email" form={form} />
        <InputField name="phoneNumber" label="Phone Number" form={form} />
        <Button type="submit">Create An Account</Button>
      </form>
    </div>
  );
};

export default RegisterForm;
