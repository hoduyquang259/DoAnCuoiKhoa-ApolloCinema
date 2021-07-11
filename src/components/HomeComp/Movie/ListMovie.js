import { Box, Typography } from "@material-ui/core";
import React from "react";
import Loader from "../../Loader";

const ListMovie = ({ value, index }) => {
  return (
    <div>
      <div
        role={"listmovie"}
        hidden={value !== index}
        id={`simple-listmovie-${index}`}
        aria-labelledby={`simple-movie-${index}`}
        // {...other}
      >
        {value === index ? (
          <Box p={3}>
            <Typography>abc</Typography>
          </Box>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default ListMovie;
