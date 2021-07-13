import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../FormControl/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Avatar, Button } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import PasswordField from "../FormControl/PasswordField";

const LoginForm = (props) => {
  const schema = yup.object().shape({
    userName: yup
      .string()
      .required("Please enter your full name")
      .min(5, "Please enter ad least 5 characters"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(6, "Please enter at least 6 characters"),
  });

  const form = useForm({
    defaultValues: {
      userName: "",
      password: "",
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
      <h2>Đăng Nhập</h2>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="userName" label="User Name" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <Button type="submit">Đăng Nhập</Button>
      </form>
    </div>
  );
};

export default LoginForm;
