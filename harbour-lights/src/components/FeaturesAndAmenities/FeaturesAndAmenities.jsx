import React from "react";
import "./FeaturesAndAmenities.css";
import MediaCard from "./MediaCard";
import Grid from "@mui/material/Grid";
import floatingPools from "../../assets/FloatingPools.svg";
import spaciousCabins from "../../assets/SpaciousCabins.svg";
import seaFacingSwimmingPools from "../../assets/SeaFacingSwimmingPools.svg";
import gymAndFitness from "../../assets/GymAndFitness.svg";


const FeaturesAndAmenities = () => {
  return (
    <div className="featuresAndAmenities">
      <div className="header">
        HARBOUR <br />
        LIGHTS
      </div>
      <div className="heading">FEATURES AND AMENITIES</div>
      <div className="content">
        Harbour Lights beautifully honours maritime voyages while embracing an
        opulent seafront
        <br /> lifestyle. Its maritime-inspired amenities provide an unmatched
        seaside experience, offering a <br />
        life of tranquility and bliss.
      </div>
    
      <Grid container maxWidth={1118}>
        <Grid item xs={6} md={3}>
          <MediaCard image={floatingPools} text={"Floating \n Pools"} />
        </Grid>
        <Grid item xs={6} md={3}>
          <MediaCard
            image={spaciousCabins}
            text=" Spacious Cabins Like Rooms"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <MediaCard
            image={seaFacingSwimmingPools}
            text="Sea Facing Swimming Pools"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <MediaCard image={gymAndFitness} text="Gymnasium & FItness" />
        </Grid>
      </Grid>
     
      
    </div>
  );
};

export default FeaturesAndAmenities;
