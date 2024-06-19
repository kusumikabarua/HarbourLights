import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./HeaderBox.css";

export default function HeaderBox() {
  return (
    <Box
      height={280}
      width={220}  
      
      sx={{ borderRadius: "5px ", color: "white", backdropFilter: "blur(8px)" }}
    >
      <p class="smallFont">PRICING STARTS FROM</p>
      <h1> $425,000</h1>
      <p>AED 1.3 Million</p>
      <Button variant="contained">GET A PRESENTATION</Button>
      <div class="footer">Get an Expert’s Presentation of Real Estate in Dubai for Life and investment</div>
    </Box>
  );
}
