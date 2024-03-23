import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

function SingleDog({ dog }: { dog: any }) {
  const breed = dog?.breeds?.length ? dog?.breeds[0] : {};
  return (
    <Card>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CardMedia component="img" image={dog?.url} alt={dog?.id} />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography variant="h5" component="div">
              Breed: {breed?.name || "-"}
            </Typography>
            <Typography>Breed For: {breed?.bred_for || "-"}</Typography>
            <Typography>Breed Group: {breed?.breed_group || "-"}</Typography>
            <Typography>
              Height: {breed?.height?.imperial || "-"} inch /{" "}
              {breed?.height?.metric || "-"} cm
            </Typography>
            <Typography>Life span: {breed?.life_span || "-"}</Typography>
            <Typography>Temperament: {breed?.temperament || "-"}</Typography>
            <Typography>
              Weight: {breed?.weight?.imperial || "-"} lb /{" "}
              {breed?.weight?.metric || "-"} kg
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}

export default SingleDog;
