import {
  Box,
  Chip,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";
export default function SingleRecipe() {
  const { id } = useParams();
  const [productInfo, setproductInfo] = useState(null);

  console.log(id);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/recipes/${id}`)
      .then((response) => {
        setproductInfo(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Box sx={{ p: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2}>
            <Paper
              elevation={0}
              sx={{
                height: "104vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  cursor: "pointer",
                  margin: "10px 0",
                  height: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <img
                  src={productInfo?.image}
                  style={{
                    width: "60%",
                    height: "60%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                p: 2,
              }}
            >
              <img
                src={productInfo?.image}
                style={{
                  width: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
                alt="Selected"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper elevation={0} sx={{ height: "100vh", padding: 2 }}>
              <Box>
                <Typography
                  variant="button"
                  color="text.secondary"
                  sx={{ fontSize: "14px", fontWeight: "bolder" }}
                >
                  {productInfo?.brand}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="button"
                  color="text.secondary"
                  sx={{ fontSize: "24px", fontWeight: "bolder" }}
                >
                  {productInfo?.name}
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}
              >
                <Chip
                  size="small"
                  label={productInfo?.rating}
                  color={
                    productInfo?.rating > 4.5
                      ? "success"
                      : productInfo?.rating > 4
                      ? "warning"
                      : "error"
                  }
                  icon={<StarRateIcon sx={{ fontSize: "16px" }} />}
                  sx={{ borderRadius: "10px" }}
                />
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}
              ></Box>
              <Box
                sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}
              >
                {/* <Typography variant="h4" mt={1} color="text.secondary">
                   {productInfo?.rating}
                </Typography> */}
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}
              >
                <Typography variant="caption" mb={1} color="text.secondary">
                  {productInfo?.shippingInformation}
                </Typography>
              </Box>
              <Divider />
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Cusine</TableCell>
                      <TableCell>
                        <Typography variant="caption" color="text.secondary">
                          {productInfo?.cuisine}
                        </Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Ingredients</TableCell>
                      <TableCell>
                        <Typography variant="caption" color="text.secondary">
                          {productInfo?.ingredients?.map(
                            (ingredient, index) => (
                              <li key={index}>{ingredient}</li>
                            )
                          )}
                        </Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell sx={{ width: "200px" }}>
                        Preperation Time
                      </TableCell>
                      <TableCell>
                        <Typography variant="caption" color="text.secondary">
                          {productInfo?.prepTimeMinutes}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Cook Time</TableCell>
                      <TableCell>
                        <Typography variant="caption" color="text.secondary">
                          {productInfo?.cookTimeMinutes}
                        </Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Meal Type</TableCell>
                      <TableCell>
                        <Typography variant="caption" color="text.secondary">
                          {productInfo?.mealType}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Difficuty</TableCell>
                      <TableCell>
                        <Typography variant="caption" color="text.secondary">
                          {productInfo?.difficulty}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Servings</TableCell>
                      <TableCell>
                        <Typography variant="caption" color="text.secondary">
                          {productInfo?.servings}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Calories</TableCell>
                      <TableCell>
                        <Typography variant="caption" color="text.secondary">
                          {productInfo?.caloriesPerServing}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody></TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
