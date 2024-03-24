import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Dog({
  data: { url, name, id },
}: {
  data: { url: string; name: string; id: string };
}) {
  return (
    <Grid item xs={12} sm={6} md={4} data-testid="dog">
      <Link
        to={`/dog/${id}`}
        target="_blank"
        style={{ textDecoration: "none" }}
      >
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
            <Typography color="primary">
              <strong>Breed: {name || "No name"}</strong>
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}

export default Dog;
