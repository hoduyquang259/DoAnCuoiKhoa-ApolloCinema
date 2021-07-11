import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const PageNotFound = () => {
  const history = useHistory();
  return (
    <div className="page-not-found">
      <div className="contain">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          The link you are followed probably broken or the page does not exist
        </p>
        <Button
          onClick={() => {
            history.push("/");
          }}
        >
          Return Home
        </Button>
      </div>
    </div>
  );
};

export default PageNotFound;
