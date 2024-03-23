import React, { useEffect } from "react";
import useDogStore from "../store/useDogs";
import { Container, Grid } from "@mui/material";
import Dog from "../components/dogs/Dog";
import DogLoading from "../components/dogs/DogLoading";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

function Home() {
  const {
    dogs,
    loading,
    getInitDogs,
    limit,
    hasNextPage,
    fetchMore,
    errorMessage,
  } = useDogStore();
  useEffect(() => {
    getInitDogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [sentryRef] = useInfiniteScroll({
    loading: loading,
    hasNextPage: hasNextPage,
    onLoadMore: () => {
      fetchMore();
    },
    disabled: !!errorMessage,
    rootMargin: "0px 0px 0px 0px",
  });

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {dogs.map((dog) => (
          <Dog
            data={{ url: dog?.url, name: dog?.breeds[0]?.name, id: dog?.id }}
            key={dog.id}
          />
        ))}
        <div ref={sentryRef} />
        {loading &&
          Array.from({ length: limit }).map((_, index) => (
            <DogLoading key={index} />
          ))}
      </Grid>
    </Container>
  );
}

export default Home;
