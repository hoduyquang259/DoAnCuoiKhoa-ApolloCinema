import React from "react";
import Button from "@material-ui/core/Button";
import useStyle from "./../../../styles";

export default function MaterialPage() {
  const classes = useStyle();

  return (
    <div className={classes.content}>
      <h3 className={classes.title}>Material</h3>
      <span>Dinh Phuc Nguyen</span>
      <Button variant="contained" color="primary">
        Default
      </Button>
    </div>
  );
}
