import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Dog({
  data: { url, name, id },
}: {
  data: { url: string; name: string; id: string };
}) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Link to={`/dog/${id}`} target="_blank">
        <Card
          sx={{
            transition: "0.3s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <CardMedia component="img" height="300" image={url} alt={name} />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Breed: {name || "No name"}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}

export default Dog;
