import {
  Autocomplete,
  Button,
  Chip,
  Grid,
  TextField,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import useDogStore from "../../store/useDogs";

const ChipWrapper = styled(Grid)`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

function Search() {
  const { breeds, getBreeds, setFilters } = useDogStore();
  const [search, setSearch] = useState("");
  const [selectedBreeds, setSelectedBreeds] = useState<any>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getBreeds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = () => {
    setFilters({ selectedBreedsIds: selectedBreeds, search });
  };

  return (
    <Grid container spacing={2} style={{ marginBottom: 15 }}>
      <Grid item xs={12} md={4}>
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          label="Search"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Autocomplete
          options={breeds}
          value={selectedBreeds}
          getOptionLabel={(option) => option.name}
          onChange={(event, newValue) => {
            setSelectedBreeds(newValue);
          }}
          renderTags={() => <></>}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Dog Breeds"
              variant="outlined"
              fullWidth
            />
          )}
          fullWidth
          multiple
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onBlur={() => {
            setOpen(false);
          }}
          sx={{ marginBottom: 2, width: "100%" }}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          style={{ padding: "15px 39px" }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Grid>
      {selectedBreeds?.length > 0 && (
        <ChipWrapper item xs={12} md={12}>
          {selectedBreeds.map((breed: any) => (
            <Chip
              key={breed.id}
              label={breed.name}
              onDelete={() =>
                setSelectedBreeds(
                  selectedBreeds.filter((el: any) => el.id !== breed.id)
                )
              }
            />
          ))}
        </ChipWrapper>
      )}
    </Grid>
  );
}

export default Search;
