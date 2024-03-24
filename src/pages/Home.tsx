import React, { useEffect } from "react";
import useDogStore from "../store/useDogs";
import { Container, Grid, Pagination, styled } from "@mui/material";
import Dog from "../components/dogs/Dog";
import DogLoading from "../components/dogs/DogLoading";
import Search from "../components/Search";

const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

function Home() {
  const { dogs, page, loading, getInitDogs, limit, hasNextPage } =
    useDogStore();
  useEffect(() => {
    getInitDogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePageChange = (event: any, value: any) => {
    getInitDogs(value);
  };

  return (
    <Container maxWidth="lg">
      <Search />
      <Grid container spacing={2}>
        {!loading &&
          dogs.map((dog) => (
            <Dog
              data={{ url: dog?.url, name: dog?.breeds[0]?.name, id: dog?.id }}
              key={dog.id}
            />
          ))}
        {(loading || !dogs?.length) &&
          Array.from({ length: limit }).map((_, index) => (
            <DogLoading key={index} />
          ))}
      </Grid>
      <Wrapper>
        {" "}
        <Pagination
          count={hasNextPage ? page + 10 : page}
          page={page}
          onChange={handlePageChange}
        />
      </Wrapper>
    </Container>
  );
}

export default Home;
