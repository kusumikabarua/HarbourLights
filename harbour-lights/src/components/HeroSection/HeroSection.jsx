import React from "react";
import HeaderBox from "./HeaderBox";
import Button from "@mui/material/Button";
import logo from "../../assets/logo.svg";
import headerImage from "../../assets/HeaderImage.svg"
import heroImage from "../../assets/HeroImage.svg"; 
import Box from '@mui/material/Box';
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
     
      <Grid container spacing={5}>
      <Grid item  xm={6}>
      <img src={headerImage} alt="headerImage" className="headerImage"/>

        </Grid>
        <Grid item  xm={6}>
        <HeaderBox/>
      
          </Grid>
     
        
    
     </Grid>
     </div>
    </div>
  );
};

export default HeroSection;
