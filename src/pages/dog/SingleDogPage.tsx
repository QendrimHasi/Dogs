import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useDogStore from "../../store/useDogs";
import { Container } from "@mui/material";
import SingleDog from "../../components/singleDog/SingleDog";
import SingleDogLoading from "../../components/singleDog/SingleDogLoading";

function SingleDogPage() {
  const { id } = useParams();
  const { dog, loading, getDogById } = useDogStore();

  useEffect(() => {
    getDogById(id as string);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Container maxWidth="lg">
      {dog && !loading && <SingleDog dog={dog} />}
      {!dog && loading && <SingleDogLoading />}
    </Container>
  );
}

export default SingleDogPage;
