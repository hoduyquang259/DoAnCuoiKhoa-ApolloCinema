import { AppBar, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import ListMovie from "./ListMovie";

const a11yProps = (index) => {
  return {
    id: `simple-movie-${index}`,
    "aria-controls": `simple-listmovie-${index}`,
  };
};

const Movie = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Showing Now" {...a11yProps(0)} />
          <Tab label="Coming Soon" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <ListMovie value={value} index={0} />
      <ListMovie value={value} index={1} />
    </div>
  );
};

export default Movie;

// return (
//   <div className={classes.root}>
//     <TabPanel>Item One</TabPanel>
//     <TabPanel value={value} index={1}>
//       Item Two
//     </TabPanel>
//     <TabPanel value={value} index={2}>
//       Item Three
//     </TabPanel>
//   </div>
// );
