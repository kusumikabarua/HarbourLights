import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./HeaderBox.css";

export default function HeaderBox() {
  return (
    <div className="box"
    >
      <p class="smallFont">PRICING STARTS FROM</p>
      <h1> $425,000</h1>
      <p>AED 1.3 Million</p>
      <Button variant="contained">GET A PRESENTATION</Button>
      <div class="boxFooter">Get an Expert’s Presentation of Real Estate in Dubai for Life and investment</div>
    </div>
  );
}
