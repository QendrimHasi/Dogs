import { Card, CardContent, Grid, Skeleton } from "@mui/material";
import React from "react";

function SingleDogLoading() {
  return (
    <Card>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            style={{ minHeight: 380 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardContent>
            <Skeleton
              variant="rectangular"
              width="100%"
              height="30px"
              style={{ marginBottom: 15 }}
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              height="30px"
              style={{ marginBottom: 15 }}
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              height="30px"
              style={{ marginBottom: 15 }}
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              height="30px"
              style={{ marginBottom: 15 }}
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              height="30px"
              style={{ marginBottom: 15 }}
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              height="30px"
              style={{ marginBottom: 15 }}
            />
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}

export default SingleDogLoading;
