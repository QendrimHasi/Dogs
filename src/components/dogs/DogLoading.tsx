import { Card, CardContent, Grid, Skeleton } from "@mui/material";
import React from "react";

function DogLoading() {
  // return (
  //   <Grid item xs={12} sm={6} md={4}>
  //     <Skeleton width={"100%"} height={200} />
  //   </Grid>
  // );
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <Skeleton variant="rectangular" width={"100%"} height={"300px"} />
        <CardContent>
          <Skeleton variant="rectangular" width={"100%"} height={20} />
        </CardContent>
      </Card>
    </Grid>
  );
}

export default DogLoading;
