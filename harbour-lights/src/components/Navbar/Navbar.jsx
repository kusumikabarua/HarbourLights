import "./Navbar.css";
import Grid from "@mui/material/Grid";
import Section from "./Section";
import bookWith from "../../assets/BookWith.svg";
import paymentPlan from "../../assets/PaymentPlan.svg";
import areaStartsFrom from "../../assets/AreaStartsFrom.svg";
import handOverOn from "../../assets/HandOverOn.svg";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Grid container spacing={5}>
        <Grid item xs={6} md={3}>
          <Section image={bookWith} text="BOOK WITH" value="ONLY 20%" />
        </Grid>
        <Grid item xs={6} md={3}>
          <Section image={paymentPlan} text="PAYMENT PLAN" value="EASY 70/30" />
        </Grid>
        <Grid item xs={6}  md={3}>
          <Section image={handOverOn} text="HANDOVER ON" value="Q2 2027" />
        </Grid>
        <Grid item xs={6} md={3}>
          <Section image={areaStartsFrom} text="AREA STARTS FROM" value="700 SQMT" />
        </Grid>
      </Grid>
    </nav>
  );
};

export default Navbar;
