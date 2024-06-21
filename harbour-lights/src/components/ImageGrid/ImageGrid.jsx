import React from "react";
import Grid from "@mui/material/Grid";
import exterior1 from "../../assets/Exterior1.svg";
import interior1 from "../../assets/Interior1.svg";
import interior2 from "../../assets/Interior2.svg";
import interior3 from "../../assets/Interior3.svg";
import interior4 from "../../assets/Interior4.svg";
import Button from "@mui/material/Button";
import "./ImageGrid.css"

const ImageGrid = () => {
  return (
    <div className="content">
      <div className="buttonClass">
        <Button sx={{ padding: "10px" }} variant="contained">
          Exteriors
        </Button>
        <Button variant="outlined">Interiors</Button>
      </div>
      <Grid container maxWidth={1118}>
        <Grid item lg={12}>
          <img src={exterior1} alt="exterior1" />
        </Grid>
        <Grid item xs={6} md={3}>
          <img src={interior1} alt="interior1" />
        </Grid>
        <Grid item xs={6} md={3}>
          <img src={interior2} alt="interior2" />
        </Grid>
        <Grid item xs={6} md={3}>
          <img src={interior3} alt="interior3" />
        </Grid>
        <Grid item xs={6} md={3}>
          <img src={interior4} alt="interior4" />
        </Grid>
      </Grid>
    </div>
  );
};

export default ImageGrid;
