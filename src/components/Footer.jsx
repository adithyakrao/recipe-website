import React from "react";
import { Box, Typography, Grid, Paper, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import logo from "../Assests/Images/recepie1.png";

const Footer = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        bgcolor: "#f8f8f8",
        color: "#353543",
        py: 4,
        px: 4,
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* Logo and Tagline */}
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <img
              style={{ width: "150px" }}
              src={logo}
              alt="logo"
            />
            <Typography
              variant="body1"
              sx={{ mt: 2, color: "#555", fontSize: "14px" }}
            >
              Delicious recipes at your fingertips. Explore and create today!
            </Typography>
          </Box>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontSize: "16px",
                textTransform: "uppercase",
              }}
            >
              Quick Links
            </Typography>
            <Box>
              <MuiLink
                component={Link}
                to="/"
                underline="none"
                sx={{ display: "block", color: "#555", mb: 1 }}
              >
                Home
              </MuiLink>
              <MuiLink
                component={Link}
                to="/about"
                underline="none"
                sx={{ display: "block", color: "#555", mb: 1 }}
              >
                About
              </MuiLink>
              <MuiLink
                component={Link}
                to="/recepie"
                underline="none"
                sx={{ display: "block", color: "#555", mb: 1 }}
              >
                Recipe
              </MuiLink>
            </Box>
          </Box>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontSize: "16px",
                textTransform: "uppercase",
              }}
            >
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" }, gap: 2 }}>
              <MuiLink href="https://facebook.com" target="_blank" rel="noopener" color="inherit">
                <Facebook sx={{ fontSize: 30, color: "#3b5998" }} />
              </MuiLink>
              <MuiLink href="https://twitter.com" target="_blank" rel="noopener" color="inherit">
                <Twitter sx={{ fontSize: 30, color: "#1DA1F2" }} />
              </MuiLink>
              <MuiLink href="https://instagram.com" target="_blank" rel="noopener" color="inherit">
                <Instagram sx={{ fontSize: 30, color: "#C13584" }} />
              </MuiLink>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright Section */}
      <Typography
        variant="body2"
        sx={{
          mt: 4,
          textAlign: "center",
          color: "#aaa",
        }}
      >
        &copy; {new Date().getFullYear()} Your Website Name. All Rights Reserved.
      </Typography>
    </Paper>
  );
};

export default Footer;
