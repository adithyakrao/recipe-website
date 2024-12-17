import { Box } from "@mui/material";
import React from "react";
import AboutContent from "../components/AboutContent";
// import Banner from "../components/Banner";
import Footer from "../components/Footer"

export default function About() {
  return (
    <Box>
      <Box>
        <AboutContent />
      </Box>
      {/* <Box>
        <Banner />
      </Box> */}
      <Footer />
    </Box>
  );
}
