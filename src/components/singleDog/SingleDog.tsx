import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import React from "react";

const Wrapper = styled(CardContent)`
  p {
    margin-bottom: 10px;
  }
  h5 {
    margin-bottom: 20px;
  }
`;

function SingleDog({ dog }: { dog: any }) {
  const breed = dog?.breeds?.length ? dog?.breeds[0] : {};
  return (
    <Card>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CardMedia component="img" image={dog?.url} alt={dog?.id} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Wrapper>
            <Typography variant="h5" color="primary">
              <strong> Breed: {breed?.name || "No name"}</strong>
            </Typography>
            <Typography color="primary">
              Breed For: {breed?.bred_for || "-"}
            </Typography>
            <Typography color="primary">
              Breed Group: {breed?.breed_group || "-"}
            </Typography>
            <Typography color="primary">
              Height: {breed?.height?.imperial || "-"} inch /{" "}
              {breed?.height?.metric || "-"} cm
            </Typography>
            <Typography color="primary">
              Life span: {breed?.life_span || "-"}
            </Typography>
            <Typography color="primary">
              Temperament: {breed?.temperament || "-"}
            </Typography>
            <Typography color="primary">
              Weight: {breed?.weight?.imperial || "-"} lb /{" "}
              {breed?.weight?.metric || "-"} kg
            </Typography>
          </Wrapper>
        </Grid>
      </Grid>
    </Card>
  );
}

export default SingleDog;
