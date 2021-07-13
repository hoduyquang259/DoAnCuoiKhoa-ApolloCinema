import { Container } from "@material-ui/core";
import React from "react";
import RegisterForm from "./RegisterForm";

const Register = () => {
  const handleSubmit = async (values) => {
    console.log("Form Register:", values);
  };
  return (
    <div className="register">
      <Container maxWidth="xs">
        <RegisterForm onSubmit={handleSubmit} />
      </Container>
    </div>
  );
};

export default Register;
