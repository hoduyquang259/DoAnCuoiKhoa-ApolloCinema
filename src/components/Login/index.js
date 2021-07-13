import { Container } from "@material-ui/core";
import React from "react";
import LoginForm from "./LoginForm";

const Login = () => {
  const handleSubmit = (values) => {
    console.log("Form Submit:", values);
  };
  return (
    <div className="login">
      <Container maxWidth="xs">
        <LoginForm onSubmit={handleSubmit} />
      </Container>
    </div>
  );
};

export default Login;
