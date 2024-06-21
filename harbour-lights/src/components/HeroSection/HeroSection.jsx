import React from "react";
import HeaderBox from "./HeaderBox";
import Button from "@mui/material/Button";
import logo from "../../assets/logo.svg";
import headerImage from "../../assets/HeaderImage.svg"
import heroImage from "../../assets/HeroImage.svg"; 

import "./HeroSection.css"; 
import Grid from '@mui/material/Grid';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <img src={heroImage} alt="Hero" className="hero-image" />

      <img src={logo} alt="logo" className="logo" />
     
      <div className="button">
        <Button variant="outlined" size="large">Enquire Now</Button>
      </div>
      <div className="headerContent">
     
      <Grid container >
      <Grid item xs={12} md={6}>
      <img src={headerImage} alt="headerImage" className="headerImage"/>

        </Grid>
      
        <Grid item xs={12} md={6}  sx={{display:"flex",justifyContent:"flex-end"}}>
       
        <HeaderBox/>
      
          </Grid>
     
        
    
     </Grid>
     </div>
    </div>
  );
};

export default HeroSection;
