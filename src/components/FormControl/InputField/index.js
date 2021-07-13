import { TextField } from "@material-ui/core";
import React from "react";
import { Controller } from "react-hook-form";

const InputField = (props) => {
  const { form, name, label, disabled } = props;
  const { errors } = form;
  const hasError = errors[name];
  return (
    <Controller
      name={name}
      control={form.control}
      as={TextField}
      variant="outlined"
      margin="normal"
      fullWidth
      label={label}
      disabled={disabled}
      error={!!hasError}
      helperText={errors[name]?.message}
    />
  );
};

export default InputField;
