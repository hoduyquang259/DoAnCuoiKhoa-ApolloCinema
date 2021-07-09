import { Container, Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <h2>Convenient app for movie lovers</h2>
            <h3>Not only booking tickets, more...</h3>
            <Grid container spacing={10}>
              <Grid item xs={4} style={{ textAlign: "right" }}>
                <Link to="/en/home">
                  <img src="/images/apple.png" />
                </Link>
              </Grid>
              <Grid item xs={4} style={{ textAlign: "left" }}>
                <Link to="/en/home">
                  <img src="/images/google.png" />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
