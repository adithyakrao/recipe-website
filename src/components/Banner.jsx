import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import Newpic from "../Assests/Images/food7.jpg";

const Banner = () => {
  return (
<Box
  sx={{
    position: "relative",
    mt: 10,
    px: { xs: 3, md: 20 },
    py: { xs: 10, md: 15 },
    overflow: "hidden",
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${Newpic})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImageRendering: "optimizeQuality",
    borderRadius: "10px",
  }}
>

      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          
          <Typography
  variant="h3"
  sx={{
    color: "white", // Primary text color
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)", // Improves readability
    fontWeight: "bold",
    textTransform: "uppercase",
  }}
>
  Discover Delicious Recipes
</Typography>

            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontSize: { xs: "14px", md: "16px" },
                mb: 4,
                maxWidth: { xs: "100%", md: "80%" },
              }}
            >
              Unleash your inner chef with our curated collection of simple and tasty recipes for every occasion.
            </Typography>
            <Button
              variant="contained"
              href="/Recepie"
              sx={{
                bgcolor: "primary.main",
                color: "white",
                fontWeight: "bold",
                px: 4,
                py: 1.5,
                "&:hover": {
                  bgcolor: "primary.dark",
                },
              }}
            >
              Explore Recipes
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
