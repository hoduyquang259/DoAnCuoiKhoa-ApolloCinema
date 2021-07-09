import { AppBar, Container, Grid, Tab, Tabs } from "@material-ui/core";
import React from "react";
import ListMoviePage from "./ListMoviePage";

import TabPanel from "./TabPanel";

function Movie() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Container className="movie">
        <Grid container spacing={10} className="box-btns">
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <AppBar position="static" color="transparent">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
              >
                <Tab label="PHIM ĐANG CHIẾU" />
                <Tab label="PHIM SẮP CHIẾU" />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <ListMoviePage />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ListMoviePage />
            </TabPanel>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Movie;
